import mongoose from 'mongoose';

export const postSchema = new mongoose.Schema({
    content: String,
    originalPoster: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    dateCreated: Date,
    comments: [{
        "text": String,
        "firstName":String,
        "lastName": String,
        "dateCreated": Date
    }],
    likes: Number,
    tags: [{type: String, lowercase: true}],
    valid: {
        type: String,
        enum : ["PENDING", "VALID", "REJECTED"],
        default: "PENDING"
    }
})


export default mongoose.model("posts", postSchema);