
import axios from 'axios';
import https from 'https';
// Creating API endpoint , in case we deice to add WebRTC support in future
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
export async function GenerateRoom() {
  const response = await client.get('https://videolink2me.com/create_room');
  return response.data;
}


export default async function callback(req, res) {
  try {
    const response = await GenerateRoom();
    res.status(200).json(response);
  } catch (error) {
    res.status(error.status || 400).end(error.message);
  }
}
