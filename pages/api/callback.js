import auth0 from '../../utils/auth';
import { getPodName } from "../../utils/github"
import Profile from "../../models/profile"

export default async function callback(req, res) {
    try {
        await auth0.handleCallback(req, res, {
            redirectTo: '/close', onUserLoaded: async (req, res, session, state) => {
                let fellow = await getPodName(session.user.nickname)
                await Profile.create(session.user)
                if (fellow.length == 0) throw new Error({ message: "It is only for mlh fellows" })
                return session;
            }
        });
    } catch (error) {
        res.status(error.status || 400).end(error.message);
    }
}