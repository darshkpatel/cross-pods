import Field from "../../models/fellow"
import auth0 from "../../utils/auth"
import dbConnect from "../../utils/db"

export default async function list(req, res) {
    try {
        await dbConnect()
        const user = (await auth0.getSession(req)).user
        let value = await Field.aggregate([
            {
                $match: {
                    username: { $ne: user.nickname },
                    $or: [{ online: true }, { room: { $ne: null } }]

                }
            },
            {
                $lookup: {
                    from: 'profiles',
                    localField: 'username',
                    foreignField: 'nickname',
                    as: 'profile'
                }
            }
        ])
        res.json(value)
    } catch (error) {
        res.status(error.status || 500).end(error.message);
    }
}