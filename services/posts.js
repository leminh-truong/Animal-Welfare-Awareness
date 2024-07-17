import Post from '../models/Posts.js';

const commentPost = async (req) => {

    try{
        const result = await Post.updateOne({"_id": req.body.id}, 
            {$push: 
                {comments : {
                    "text" : req.body.text,
                    "firstName" : req.body.firstName,
                    "lastName" : req.body.lastName,
                    "dateCreated" : req.body.dateCreated
                }}});
        return{
            status:200,
            message: "Add comment success"
        }
    }
    catch(err){
        return{
            status: 400,
            message: "Add comment failed"
        }
    }
}

//In testing this will not return an error if the post with that id is not found
const validatePost = async (req) => {
    const { id } = req.body;
    if(!id){
        return {status: 500, message: "no ID sent" }
    }
    try{
        await Post.updateOne({_id: id}, {$set : {valid : "VALID"}});
        return{
            status:200,
            message: "Validate post success"
        }
    }
    catch (err){
        return{
            status: 400,
            message: "Validate post failed"
        }
    }
}

const rejectPost = async (req) => {
    const { id } = req.body;
    if(!id){
        return {status: 500, message: "no ID sent" }
    }
    try{
        const result = await Post.updateOne({_id: id}, {$set : {valid : "REJECTED"}});
        return{
            status:200,
            message: "Reject post success"
        }
    }
    catch (err){
        return{
            status: 400,
            message: "Reject post failed"
        }
    }
}

const likePost = async (req) => {
    console.log("likePost")
    const { id } = req.body
    try {
        const post = await Post.findOne({_id: id})
        if(!post){
            return {status: 400, error: "Post does not exist"}
        }
        post.likes = post.likes + 1
        console.log(post)
        const result = await post.save();

        console.log("result",result)
        return {status: 200, message: "Successfully liked post"}
    } catch (error) {
        return {status: 500, error: "Failed to like post"}
    }
}

const unlikePost = async (req) => {
    const { id } = req.body
    try {
        const post = await Post.findOne({_id: id})
        if(!post){
            return {status: 500, error: "Post does not exist"}
        }
        post.likes = post.likes - 1
        await post.save()
        return {status: 200, message: "Successfully liked post"}
    } catch (error) {
        return {status: 500, error: "Failed to like post"}
    }
}

const createPost = async (req) => {
    const { userID, content, tags } = req.body;
    var tagArray = []
    if (!userID || !content){
        return {status:500, error: "Missing userID or post is empty"}
    }
    if(tags){
        tagArray = tags.split(',')
    }
    try {
        const dateNow = (Date.now()).toString()
        await Post.create({
            content: content, originalPoster: userID, dateCreated: dateNow, likes: 0, tags: tagArray
        })
    } catch (error) {
        return {status: 500, error: error.message }
    }
    return {status: 200, message: "Post created successfully"}
}

const getPosts = async (req) => {
    const allPosts = await Post.find().lean().populate('originalPoster')
    console.log(allPosts)
    return allPosts;
}

const getFilteredPosts = async (req) => {
    try{
        const { status } = req.query
        // console.log(status)
        if (status == ""){
            const result = await Post.find().populate('originalPoster')
            return result
        }
        const result = await Post.find({valid : status}).populate('originalPoster')
        return result
    } catch (error) {
        return {status: 500, error: error.message}
    }
}

const getPostsByTag = async (req) => {
    try{
        const { tags } = req.query
        const split = tags.split(',')
        const out = {
            $and: split.map(term => {
                const finder = new RegExp(term, 'i')
                return ({tags: finder})
            })
        }
        const posts = await Post.find(out).populate('originalPoster')
        return posts
    } catch (error) {
        return {status:500,error:error.message}
    }   
}

export default {
    validatePost,
    rejectPost,
    commentPost,
    likePost,
    unlikePost,
    createPost,
    getPosts,
    getPostsByTag,
    getFilteredPosts
}
