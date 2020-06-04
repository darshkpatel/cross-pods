import dbConnect from "./db"
import Fellow from "../models/fellow"


export async function getPodName(username) {
    await dbConnect()
    return Fellow.find({ username })
}