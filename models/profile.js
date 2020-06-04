
const mongoose = require("mongoose")

const memberSchema = mongoose.Schema({
    nickname: String,
    name: String,
    picture: String,
    updated_at: String,
    sub: String
})

export default mongoose.models.profile || mongoose.model("profile", memberSchema);