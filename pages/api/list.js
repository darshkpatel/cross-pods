import Field from "../../models/fellow"
import auth0 from "../../utils/auth"

export default async function list(req, res) {
    const user = (await auth0.getSession(req)).user
    let value = await Field.aggregate([
        {
            $match: {
                online: true,
                username: { $ne: user.nickname }
            }
        },
    ])
    res.json(value)
}


// function list(req, res) {
//     const user = (await auth0.getSession(req)).user
//     let value = await Field.aggregate([
//         {
//             $match: {
//                 online: true,
//                 username: { $ne: user.nickname }
//             }
//         },
//         {
//             $group: {
//                 _id: "$podId",
//                 members: { $push: "$_id" }
//             }
//         }
//     ])
//     res.json(value)
// }