import Field from "../../models/fellow"
import auth0 from "../../utils/auth"
import dbConnect from "../../utils/db"

export default async function link(req, res) {
    await dbConnect()
    
}