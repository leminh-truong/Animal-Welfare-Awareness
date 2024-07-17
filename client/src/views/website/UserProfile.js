import React from 'react'
import { Box, Container, Typography, Button } from '@mui/material'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';

const UserProfile = props => {
    let navigate = useNavigate();

    const onClickNewPost = async () => {
        navigate('/newPost');
    }

    return (
        <div>
          <Header />
          <Container maxWidth="md">
            <Typography variant='h4'>Welcome User!</Typography>
            <Button onClick = {onClickNewPost} variant="contained">Create a new post</Button>
          </Container>
        </div>
    )
}


export default UserProfile