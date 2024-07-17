import { Box, Button, Container, Grid, Icon, Paper, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Header';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useNavigate } from 'react-router-dom';

const Post = ({ item }) => {

    let navigate = useNavigate();
    const [postStatus, setpostStatus] = useState("");

    const handleChange = event => {
        setpostStatus(event.target.value)
    }

    function refreshPage() {
        window.location.reload(false);
    }

    const onClickSave = async () => {

        const body = {
            "id": item._id
        };
        console.log(body)
        const response = await fetch(`/api/posts/validatePost`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        });
        // if(postStatus === 'accept'){
        //     response = await fetch(`/api/posts/validatePost`, { 
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         method: 'POST',
        //         body: JSON.stringify(body)
        //     });
        // }
        // else{
        //     response = await fetch(`/api/posts/rejectPost`, { 
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         method: 'POST',
        //         body: JSON.stringify(body)
        //     });
        // }        

        const data = await response.json();
        console.log("data")
        console.log(data)
        if (data.status === 200) {
            alert("Post Approved!")
            refreshPage()
        } else {
            alert("Error in approval process.")
        }

    }

    return (
        <Grid item xs={12}>
            <br />
            <Paper /* variant='outlined' */ elevation={6}>
                <Box p={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant={"body1"}>{item.originalPoster.firstName + " " + item.originalPoster.lastName}</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <Typography variant={"body1"}>{item.content}</Typography>
                        </Grid>
                        <Grid item xs={12} >
                            {item.tags.length == 0 ?
                                (
                                    <br />
                                )
                                :
                                <Grid item xs={12}>
                                    #{item.tags.join(", #")}
                                </Grid>
                            }
                        </Grid>
                        <Grid item xs={12}>
                            {/* <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="postStatus"
                                value={postStatus}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="accept" control={<Radio />} label="Accept" />
                                <FormControlLabel value="reject" control={<Radio />} label="Reject" />
                                <Button variant="contained" onClick={onClickSave}>Save</Button>
                            </RadioGroup> */}

                            <Button variant="contained" onClick={onClickSave}>Approve</Button>
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

    useEffect(() => {

        getCandidatePosts();

    }, [])

    const getCandidatePosts = async () => {
        // const body = {
        //     status: "PENDING"
        // }
        const response = await fetch(`/api/posts/getFilteredPosts?status=PENDING`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
            // body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log("candidate posts data")
        console.log(data.result)
        setPosts(data.result)
    }
    console.log(posts);

    return (
        <>
            <Header />
            <Container maxWidth="md" sx={{ pt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h4'>Candidate Posts</Typography>
                    </Grid>
                </Grid>
                <br />

                <Grid item xs={12} sm={6}>
                    {userInfo && userInfo.token ?
                        <Typography variant='h6'>Posts pending for review</Typography>
                        :
                        <Typography variant='h6'>You don't have authorization to access this page.</Typography>
                    }
                </Grid>

                <Grid container spacing={2}>
                    {userInfo && userInfo.token ?
                        posts.map(item => (
                            <Post item={item} getPosts={getCandidatePosts} />
                        ))
                        :
                        <Grid item xs={12}>
                            <Typography variant='h6'>Please login as an administrator.</Typography>
                        </Grid>
                    }
                </Grid>
                <br />
            </Container>
        </>
    )
}

export default Posts