import Field from "../../models/fellow"
import auth0 from "../../utils/auth"
import dbConnect from "../../utils/db"

export default async function link(req, res) {
    await dbConnect()
    const user = (await auth0.getSession(req)).user
    let value = await Field.aggregate([
        {
            $match: {
                online: true,
                username: { $ne: user.nickname }
            }
        },
        {
            $group: {
                _id: "$podId",
                members: { $push: "$_id" }
            }
        }
    ])
    if (value.length < 2) {
        res.json({
            message: "Wait For other fellow to join"
        })
        Field.update({ username: user.nickname }, { online: true })
    } else {
        const members = [value[0].members[0], value[0].members[1], value[0].members[2]];
        Field.update({ _id: { $in: members } }, { online: false, room: "" })
        res.json({
            room: ""
        })
    }

}