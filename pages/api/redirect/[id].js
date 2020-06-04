
import dbConnect from "../../../utils/db"
import Redirect from "../../../models/redirect"
import auth0 from "../../../utils/auth"
import Fellow from "../../../models/fellow"

export default async function link(req, res) {
    try {
        await dbConnect()
        const user = (await auth0.getSession(req)).user
        const {
            query: { id },
        } = req
        let redirect = await Redirect.findById(id)
        await Fellow.updateMany({ username: user.nickname }, { $set: { room: null, online: false } })
        res.statusCode = 307
        res.setHeader('Location', redirect.url)
        res.end("redirecting")
    } catch (error) {
        res.status(error.status || 500).end(error.message);
    }
}