import bcrypt from 'bcrypt';
import User from '../models/User.js';
import Post from '../models/Posts.js';
import jwt from "jsonwebtoken";

const login = async (req) => {
    const { email, password } = req.body
    console.log("login details:")
    console.log(email, password)
    const user = await User.findOne({ email: email });

    console.log("user")
    if (!user) return { status: 400, message: "Not found" }
    console.log(password, user.password)
    console.log(user)
    const isMatch = await bcrypt.compare(password, user.password);

    console.log("isMatch")
    console.log(isMatch)
    if (isMatch) {
        const payload = {
            userInfo: {
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                status: user.status,
            }
        }
        const createdToken = await jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: 36000
        });
        return {
            result: true,
            token: createdToken,
            role: user.role,
            userInfo: payload.userInfo
        };
    }
    else {
        return { result: false, message: "Invalid credentials" };
    }
}

const getUsers = async (req) => {
    const items = await User.find().lean();
    console.log(items);
    return items;
}
const getLikedPosts = async (req) => {
    console.log("getLikedPosts")
    console.log(req.user)
    const foundedUser = await User.findById(req.user._id);
    console.log("foundedUser");
    console.log(foundedUser);
    return foundedUser;
}

const registerUser = async (req) => {
    console.log(req);
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email });
    //console.log("new user is")
    //console.log(user);
    if (user) {
        //console.log("This is true")
        return { status: 500, message: "User already exists" }
    }
    else {
        //console.log("That is true")
        var newUser = new User;
        newUser.email = req.body.email;
        newUser.password = newUser.generateHash(req.body.password);
        newUser.firstName = req.body.firstName;
        newUser.lastName = req.body.lastName;
        newUser.age = req.body.age;
        newUser.gender = req.body.gender;
        newUser.location = req.body.location;
        newUser.status = true;

        newUser.save(function (err) {
            if (err) {
                throw (err);
            }
        })
        return {
            status: 200,
            message: "Successfully registered"
        };
    }
}

const changeStatus = async (req) => {
    const { id, status } = req.body;
    const user = await User.find({ _id: id })
    console.log(user)
    if (!user) {
        console.log("User does not exist")
        return { status: 500, error: "User does not exist" }
    }
    await User.updateOne({ _id: id }, { status: status })
    return { res: 200, message: "Successfully changed user status" }
}

const likePost = async (req) => {
    console.log("user likePost")
    console.log("user likePost")

    const id = req.user._id;
    const post = await Post.findOne({ _id: req.body.id })

    if (!post) {
        return { status: 400, error: "Post does not exist" }
    }

    try {
        const user = await User.updateOne({ _id: id }, { $push: { likedPosts: post } })
        return {
            status: 200,
            message: "Like post success"
        }
    }
    catch (err) {
        return {
            status: 500,
            message: "Like post failed"
        }
    }
}

const unlikePost = async (req) => {
    const id = req.user._id;
    const post = await Post.findOne({ _id: req.body.id })

    if (!post) {
        return { status: 500, error: "Post does not exist" }
    }
    console.log("unlike userId", id)
    try {
        await User.updateOne({ _id: id }, { $pull: { likedPosts: req.body.id } })
        /* const user = await User.findOne({ _id: id })

        const likedPosts = user.likedPosts.filter(item => item != req.body.id)
        console.log("likedPosts")
        console.log(likedPosts)
        user.likedPosts = likedPosts;
        console.log(user)
        const result = await user.save(); */
        console.log(result)
        return {
            status: 200,
            message: "Like post success"
        }
    }
    catch (err) {
        return {
            status: 500,
            message: "Like post failed"
        }
    }
}
export default {
    login,
    getLikedPosts,
    getUsers,
    registerUser,
    changeStatus,
    likePost,
    unlikePost
}