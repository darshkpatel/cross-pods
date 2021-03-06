
import axios from 'axios';
import https from 'https';
import crypto from 'crypto';
import Fellow from "../../../models/fellow"
import auth0 from "../../../utils/auth"
import dbConnect from "../../../utils/db"
import Redirect from "../../../models/redirect"

// Creating API endpoint , in case we decide to add WebRTC support in future
const client = axios.create(
  {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false,
    }),
  },
);

client.interceptors.response.use(
  (res) => res,
  (err) => {
    throw new Error(err);
  },
);


export async function GenerateRoomID() {
  const buf = crypto.randomBytes(20);
  return buf.toString('hex');
}


export default async function link(req, res) {
  try {
    await dbConnect()
    const user = (await auth0.getSession(req)).user
    const fellow = await Fellow.findOne({ username: user.nickname })

    if (fellow.room) {
      res.json({ message: fellow.room })
    }

    let value = await Fellow.aggregate([
      {
        $match: {
          online: true,
          username: { $ne: user.nickname },
          podId: { $ne: fellow.podId }
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
      await Fellow.updateOne({ username: user.nickname }, { $set: { online: true } })
      res.json({
        message: "Wait For other fellow to join"
      })
    } else {
      const room = await GenerateRoomID();
      const members = [value[0].members[0], value[1].members[0], fellow._id];
      const redirect = await Redirect.create({ url: `https://meet.jit.si/${room}`, members })
      await Fellow.updateMany({ _id: { $in: members } }, { online: false, room: redirect._id })
      res.json({
        message: redirect._id,
      })
    }
  } catch (error) {
    res.status(error.status || 500).end(error.message);
  }

}
