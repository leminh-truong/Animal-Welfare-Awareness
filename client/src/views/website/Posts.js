import { Avatar, Box, Button, Container, Divider, Grid, Icon, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState, useRef } from 'react'
import Header from '../../components/Header';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import { borderRadius } from '@mui/system';
import profile from '../../assets/img/profile_img.png'
const Post = ({ item, getPosts, likedPosts }) => {

    const userData = JSON.parse(localStorage.getItem("userInfo"));
    const [showComments, setShowComments] = useState(true);
    const [newComment, setNewComment] = useState("");
    const refComment = useRef();
    useEffect(() => {
    }, [])

    const toogleComments = () => {
        setShowComments(!showComments);
    }

    const likePost = async () => {
        console.log(item._id)
        const body = {
            id: item._id
        }
        const response = await fetch(`/api/posts/likePost`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userData.token
            },
            method: 'POST',
            body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log("data")
        console.log(data)
        getPosts()
    }

    const unlikePost = async () => {
        console.log(item._id)
        const body = {
            id: item._id
        }
        const response = await fetch(`/api/posts/unlikePost`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userData.token
            },
            method: 'POST',
            body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log("data")
        console.log(data)
        getPosts()
    }


    const handleChange = (e) => {
        const { name, value } = e.target
        setNewComment(value)
    }
    const addNewComment = async () => {
        console.log(item._id)
        console.log(userData.token)
        if (newComment === "") {
            alert("Write a cooment");
            return;
        }
        const body = {
            id: item._id,
            firstName: userData.userInfo.firstName,
            lastName: userData.userInfo.lastName,
            dateCreated: new Date(),
            text: newComment
        }

        const response = await fetch(`/api/posts/commentPost/`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userData.token
            },
            method: 'POST',
            body: JSON.stringify(body)
        });
        const data = await response.json();
        setNewComment("")
        console.log("data")
        console.log(data)
        getPosts()
    }

    const renderLikeButton = (item) => {
        let flagLiked = false;
        console.log("item.originalPoster.likedPosts")
        console.log(likedPosts)
        if (likedPosts) {
            console.log("post => post._id === item._id")
            const text = item._id.toString();
            console.log(text)
            let index = likedPosts.findIndex(post => post == text)
            console.log("index", index)
            if (index >= 0) {
                flagLiked = true;
            }
        }


        return (
            <Button variant='outlined'
                color={flagLiked ? "primary" : "inherit"}
                onClick={flagLiked ? unlikePost : likePost}
                fullWidth
                startIcon={<Icon>thumb_up</Icon>}>{item.likes} likes {flagLiked ? "" : ""}</Button>
        )
    }

    const onClickComment = () => {
        refComment.current.focus();
        console.log() 
    }

    return (
        <Grid item xs={12}>
            <Paper variant='outlined'>
                <Box p={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Box display="flex" alignItems="center">
                                <Avatar src={profile} />
                                <Box pl={2}>
                                    <Typography variant="h6">{item.originalPoster.firstName + " " + item.originalPoster.lastName} </Typography>
                                    <Typography variant={"subtitle2"}> {format(new Date(item.dateCreated), "dd MMMM")}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography variant={"body1"}>{item.content}</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Divider />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            {renderLikeButton(item)}
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button variant='outlined'
                                color="inherit" fullWidth onClick={onClickComment} startIcon={<Icon>chat</Icon>}>comment</Button>
                        </Grid>
                        {/*  <Grid item container xs={12} sm={6} justifyContent="flex-end">
                            <Button variant='contained' onClick={toogleComments}
                                startIcon={<Icon>chat</Icon>}>{showComments ? " Hide" : "Show"} comments</Button>
                        </Grid> */}
                        <Grid item xs={12} sm={12} container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant='subtitle2'>Comments</Typography>
                            </Grid>
                            {item.comments.length == 0 ?
                                (
                                    <Grid item xs={12}>
                                        No comments
                                    </Grid>
                                )
                                :
                                (item.comments.map(comment => (
                                    <Grid item xs={12}>
                                        <Box p={2}
                                            sx={{
                                                backgroundColor: theme => theme.palette.action.selected,
                                                borderRadius: "25px"
                                            }}>

                                            {/* <Typography variant="body2">{format(new Date(comment.dateCreated), "dd/MM/yyyy")}</Typography> */}
                                            {/* <br /> */}
                                            <Typography variant="body1" fontWeight={"fontWeightBold"}>{comment.firstName + " " + comment.lastName} </Typography>
                                            <Typography variant="body1">{comment.text}</Typography>

                                        </Box>
                                    </Grid>
                                )))
                            }
                            <Grid item container xs={12} sm={12} justifyContent="flex-end">

                                <TextField
                                    inputRef={refComment}
                                    rows="3"
                                    name='addComment'
                                    variant='filled'
                                    fullWidth
                                    placeholder='Write a comment'
                                    hiddenLabel
                                    onChange={handleChange}
                                    value={newComment}
                                />
                                <Button onClick={addNewComment}>add Comment</Button>
                            </Grid>

                        </Grid>
                    </Grid>
                </Box>
            </Paper>
        </Grid>
    )
}
const Posts = () => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const [posts, setPosts] = useState([]);
    const [likedPosts, setLikedPosts] = useState([]);

    useEffect(() => {

        getPosts();


    }, [])

    const getLikedPosts = async () => {

        console.log("getLikedPosts")
        const response = await fetch(`/api/users/getLikedPosts`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userInfo.token
            },
            method: 'GET'
        });
        const data = await response.json();
        console.log("getLikedPosts data")
        console.log(data)
        setLikedPosts(data.likedPosts)
    }

    const getPosts = async () => {
        getLikedPosts();
        const body = {}
        const response = await fetch(`/api/posts/getFilteredPosts/?status=VALID`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            /* body: JSON.stringify(body) */
        });
        const data = await response.json();
        console.log("data")
        console.log(data)
        setPosts(data.result)
    }

    return (
        <>
            <Header />
            <Container maxWidth="md" sx={{ pt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h4'>Posts</Typography>
                    </Grid>

                    <Grid item xs={12} md={6} >
                        {userInfo && userInfo.token ?
                            <Typography variant='h6'>Welcome {userInfo.userInfo.firstName}  {userInfo.userInfo.lastName}</Typography>
                            :
                            <Typography variant='h6'>Please login to post</Typography>
                        }
                    </Grid>
                    <Grid item xs={12} md={6} container justifyContent="flex-end">
                        <Button variant='contained' disabled={userInfo && userInfo.token ? false : true}
                            startIcon={<Icon>add</Icon>}
                            href="./newPost">create a new post</Button>
                    </Grid>
                </Grid>
                <br />

                <Grid container spacing={2}>
                    {posts.map(item => (
                        <Post item={item} getPosts={getPosts} likedPosts={likedPosts} />
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default Posts