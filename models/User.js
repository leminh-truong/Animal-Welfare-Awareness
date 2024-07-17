import mongoose from 'mongoose';
import bcrypt from "bcrypt";

export const userSchema = new mongoose.Schema({
    email: {
        type: String,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["User", "Admin"],
        default: "User"
    },
    //likedPosts: [{type: mongoose.Schema.Types.ObjectId, ref: 'posts'}],
    likedPosts: [mongoose.Schema.Types.ObjectId],
    firstName: String,
    lastName: String,
    age: Number,
    location: String,
    gender: String,
    status: { type: Boolean, default: true }
})

userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
}

export default mongoose.model("users", userSchema);