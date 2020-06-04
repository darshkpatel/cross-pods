const mongoose = require("mongoose")

const redirectSchema = mongoose.Schema({
    url: String,
    members: {
        type: [mongoose.Types.ObjectId]
    }
})

export default mongoose.models.redirect || mongoose.model("redirect", redirectSchema);