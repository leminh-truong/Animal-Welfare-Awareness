import React, { useState } from 'react'
import { Box, Container, Typography, Grid, TextField, Button } from '@mui/material'
import { Dialog, DialogActions, DialogContent, DialogContentText, Alert } from '@mui/material'
import { FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox } from '@mui/material'
import Header from '../../components/Header'
import { useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';


const NewPost = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let navigate = useNavigate();
  const [postContents, setPostContents] = useState({ post: "" });
  const { post } = postContents;
  const [open, setOpen] = useState(false);
  const [state, setState] = React.useState({
    openAlert: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, openAlert } = state;

  const handleChangeTextField = event => {
    const { value, name } = event.target;
    setPostContents({ ...postContents, [name]: value })
  }

  const handleClickOpenButton = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
  };

  const onClickDialogYes = async () => {
    setOpen(false);
    const tagString = tagInfo.response.map((x) => `${x}`).join(',');
    const body = {
      "userID": userInfo.userInfo._id,
      "content": post,
      "tags": tagString
    }
    console.log(body)
    const response = await fetch(`/api/posts/createPost`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userInfo.token
      },
      method: 'POST',
      body: JSON.stringify(body)
    });
    const data = await response.json();
    console.log("data")
    console.log(data)
    if (data.status === 200) {
      setState({ openAlert: true, vertical: 'top', horizontal: 'center' });
    } else {
      alert("Error occurred while submitting the post, please try again later.")
    }
  };

  function refreshPage() {
    window.location.reload(false);
  }

  const handleCloseAlert = () => {
    setState({ ...state, openAlert: false });
    // refreshPage();
    navigate('/posts');
  };

  //Tag Code  
  //https://www.geeksforgeeks.org/how-to-get-multiple-checkbox-values-in-react-js/
  const [tagInfo, setTagInfo] = useState({ tags:[], response:[] });

  const handleChangeCheckBox = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { tags } = tagInfo;
      
    console.log(`${value} is ${checked}`);
     
    // Case 1 : The user checks the box
    if (checked) {
      setTagInfo({
        tags: [...tags, value],
        response: [...tags, value],
      });
    }
  
    // Case 2  : The user unchecks the box
    else {
      setTagInfo({
        tags: tags.filter((e) => e !== value),
        response: tags.filter((e) => e !== value),
      });
    }
  };

  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Grid item xs={12}>
          <Typography variant='h4'>Create a New Post</Typography>
        </Grid>
        <Grid item xs={12}>
        </Grid>
        {userInfo && userInfo.token ?
          <Grid container spacing={2}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="post"
                label="Write something..."
                name="post"
                value={post}
                multiline
                onChange={handleChangeTextField}
                variant="filled"
              />
            </Grid>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset" >
                <FormLabel component="legend">Select relevant tags:</FormLabel>
                <FormGroup row>
                  <FormControlLabel
                    control={<Checkbox value="panda" onChange={handleChangeCheckBox} name="panda" />}
                    label="#panda"
                  />
                  <FormControlLabel
                    control={<Checkbox value="mammal" onChange={handleChangeCheckBox} name="mammal" />}
                    label="#mammal"
                  />
                  <FormControlLabel
                    control={<Checkbox value="vulnerable" onChange={handleChangeCheckBox} name="vulnerable" />}
                    label="#vulnerable"
                  />
                  <FormControlLabel
                    control={<Checkbox value="protectGiantPandas" onChange={handleChangeCheckBox} name="protectGiantPandas" />}
                    label="#protectGiantPandas"
                  />
                </FormGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                type="tag"
                label="Selected tags"
                name="response"
                value={tagInfo.response}
                multiline
                onChange={handleChangeCheckBox}
              />
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" onClick={handleClickOpenButton}>Submit for review</Button>
              <Dialog
                open={open}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Are you sure you want to submit the post for review?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={onClickDialogYes} autoFocus>
                    Yes
                  </Button>
                  <Button onClick={handleCloseDialog}>Cancel</Button>
                </DialogActions>
              </Dialog>
              <Snackbar
                autoHideDuration={1500}
                anchorOrigin={{ vertical, horizontal }}
                open={openAlert}
                onClose={handleCloseAlert}
                key={vertical + horizontal}
              >
                <Alert onClose={handleCloseAlert} severity="success" sx={{ width: "100%" }}>
                  Post Submitted!
                </Alert>
              </Snackbar>
            </Grid>
          </Grid>
          :
          <Grid item xs={12}>
            <br />
            <Typography variant='h6'>Please login to post</Typography>
          </Grid>
        }
      </Container>
    </div>
  )
}

export default NewPost