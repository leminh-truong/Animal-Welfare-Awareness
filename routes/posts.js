// All routes in "posts.js" must be protected

import express from "express";
import passport from "passport";
const router = express.Router();

import service from "../services/posts.js";
import user from "../services/users.js";



router.post('/commentPost',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        console.log("commentPost")
        try {
            const result = await service.commentPost(req);
            if (result.status === 500) {
                res.status(500)
            }
            else {
                res.status(200)
            }
            res.json(result)
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    });

router.post('/validatePost',
    //passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const result = await service.validatePost(req);
            if (result.status === 500) {
                res.status(500)
            }
            else {
                res.status(200)
            }
            res.json(result)
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    });

router.post('/rejectPost',
    //passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const result = await service.rejectPost(req);
            if (result.status === 500) {
                res.status(500)
            }
            else {
                res.status(200)
            }
            res.json(result)
        }
        catch (err) {
            console.log(err);
            res.status(500).json({ message: err });
        }
    });

router.post('/likePost',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const result = await service.likePost(req);
            const result2 = await user.likePost(req)
            if (result.status == 500 || result2.status == 500) {
                res.status(500)
            } else {
                res.status(200)
            }
            res.json(result)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    });

router.post('/unlikePost', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const result = await service.unlikePost(req);
        const result2 = await user.unlikePost(req)
        if (result.status == 500 || result2.status == 500) {
            res.status(500)
        } else {
            res.status(200)
        }
        res.json(result)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});

router.post('/createPost', passport.authenticate('jwt', { session: false }), async (req, res) => {
    try {
        const result = await service.createPost(req);
        if (result.status == 500) {
            res.status(500)
        } else {
            res.status(200)
        }
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
});

// Only unprotected route in posts as all users can see posts
router.get('/getPosts', async (req, res) => {
    try {
        const result = await service.getPosts(req);
        res.status(200).json({ result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
})

router.get('/getPostsByTag', async (req, res) => {
    try {
        const result = await service.getPostsByTag(req);
        res.status(200).json({ result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
})

router.get('/getFilteredPosts', async (req, res) => {
    try {
        const result = await service.getFilteredPosts(req);
        res.status(200).json({ result })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error })
    }
})

export default router;
