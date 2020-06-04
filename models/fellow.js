const mongoose = require("mongoose")

const memberSchema = mongoose.Schema({
    username: String,
    pod: String,
    podId: String,
    online: {
        type: Boolean,
        default: false
    },
    room: mongoose.Types.ObjectId
})

export default mongoose.models.member || mongoose.model("member", memberSchema);