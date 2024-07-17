import express from "express";
import passport from "passport";
const router = express.Router();

import service from "../services/users.js";

/* Public routes */
router.post('/login', async (req, res) => {
    try {
        const result = await service.login(req);
        console.log("login result")
        console.log(result)
        res.json(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error });
    }
});

/* Protected routes */
router.get('/getLikedPosts',
    passport.authenticate('jwt', { session: false }),
    async (req, res) => {
        try {
            const result = await service.getLikedPosts(req);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    });

router.get('/getUsers',
    /* passport.authenticate('jwt', { session: false }), */
    async (req, res) => {
        try {
            const result = await service.getUsers(req);
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    });


router.post('/register', async (req, res) => {
    try {
        const result = await service.registerUser(req);
        //console.log("result is")
        //console.log(result);
        //console.log(res)
        if (result.status === 500) {
            res.status(500)
        }
        else {
            res.status(200)
        }
        res.json(result)
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: err });
    }
});

router.post('/changeUserStatus', async (req, res) => {
    try {
        console.log("The body")
        console.log(req.body)
        const result = await service.changeStatus(req);
        if (result.status == 500) {
            console.log("Error from the endpoint")
            res.status(500)
        }
        else {
            res.status(200)
        }
        res.json(result)
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: error })
    }
});

export default router;