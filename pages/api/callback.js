import auth0 from '../../utils/auth';

export default async function callback(req, res) {
    try {
        await auth0.handleCallback(req, res, { redirectTo: '/close' });
    } catch (error) {
        console.error(error);
        res.status(error.status || 400).end(error.message);
    }
}