import Field from "../../models/fellow"
import auth0 from "../../utils/auth"
import dbConnect from "../../utils/db"

export default async function list(req, res) {
    await dbConnect
    const user = (await auth0.getSession(req)).user
    let value = await Field.aggregate([
        {
            $match: {
                online: true,
                username: { $ne: user.nickname }
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
}