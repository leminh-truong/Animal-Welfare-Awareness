import { Button, Container, Grid, Icon, IconButton, InputAdornment, TextField, Link, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';

import Header from '../../components/Header.js';

const Register = () => {
    let navigate = useNavigate();
    const [userRegistration, setUserRegistration] = useState({ firstName: "", lastName: "", email: "", password: "", age: "", location: "" });
    const { firstName, lastName, email, password, age, location } = userRegistration;
    const [gender, setGenderValue] = React.useState('n');
    const [codeOfConduct, setCodeOfConduct] = React.useState(false);
    const [hiddenPassword, setHiddenPassword] = React.useState(true);
    const [disabledRegister, setDisabledRegister] = React.useState(true);

    // Reference: https://dev.to/asimdahall/client-side-image-upload-in-react-5ffc
    const uploadedImage = React.useRef(null);
    const handleImageUpload = e => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const { current } = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
            }
            reader.readAsDataURL(file);
            uploadedImage.file = file;
        }
    };

    const handleChange = event => {
        const { value, name } = event.target;
        setUserRegistration({ ...userRegistration, [name]: value })
    };

    const handleGenderChange = (event) => {
        setGenderValue(event.target.value);
    };

    const handleCheckedCodeOfConduct = (event) => {
        setCodeOfConduct(event.target.checked);
        if (event.target.checked) {
            setDisabledRegister(false)
        } else {
            setDisabledRegister(true)
        }
    };

    const onClickRegister = async () => {
        /* Validation */
        let flag = true;
        if (firstName === "") {
            flag = false;
        }
        if (lastName === "") {
            flag = false;
        }
        if (email === "") {
            flag = false;
        }
        if (password === "") {
            flag = false;
        }

        const body = {
            "firstName": firstName,
            "lastName": lastName,
            "email": email,
            "password": password,
            "age": age,
            "location": location,
            "gender": gender
        };
        console.log(body);
        if (flag) {
            const response = await fetch(`/api/users/register`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });
            console.log("response is")
            console.log(response)
            //const data = await response.json();
            //console.log("data")
            //console.log(data)
            if (response.status === 200) {
                alert("Register successful")
                navigate('/login');
            } else {
                alert("Error occur while submitting registration form, please try again later.")
            }
        } else {
            // Error in the input form
            alert("Invalid input data, please check again")
        }
    };

    return (
        <>
            <Header />
            <Container maxWidth="sm" style={{ paddingTop: "24px", paddingBottom: "90px" }}>
                <Box p={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h6'>Register</Typography>
                        </Grid>

                        {/* Profile Picture 
                        <Grid item xs={12} md={6}>
                            Profile Picture:
                            <input type="file" accept="image/*" onChange={handleImageUpload} onLoad={handleImageUpload} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img
                                ref={uploadedImage}
                                style={{
                                    width: "90%",
                                    height: "90%",
                                }}
                            />
                        </Grid> */}

                        {/* First Name */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="First Name:"
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                                variant="filled"
                            />
                        </Grid>
                        {/* Last Name */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                required
                                label="Last Name:"
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                                variant="filled"
                            />
                        </Grid>

                        {/* Email */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                type="email"
                                label="Email:"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                variant="filled"
                            />
                        </Grid>

                        {/* Password */}
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                label="Password:"
                                variant="filled"
                                type={hiddenPassword ? 'password' : 'text'}
                                onChange={handleChange}
                                value={password}
                                name="password"
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment InputAdornment position="end" >
                                            <IconButton
                                                onClick={() => setHiddenPassword(!hiddenPassword)}
                                            >
                                                {hiddenPassword ? <Icon>visibility_off</Icon> : <Icon>visibility</Icon>}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>

                        {/* Age */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                type="number"
                                label="Age:"
                                name="age"
                                value={age}
                                onChange={handleChange}
                                variant="filled"
                            />
                        </Grid>
                        {/* Location */}
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                label="Location:"
                                name="location"
                                value={location}
                                onChange={handleChange}
                                variant="filled"
                            />
                        </Grid>

                        {/* Gender */}
                        <Grid item xs={12}>
                            <FormLabel id="genderLabel">Gender</FormLabel>
                            <RadioGroup
                                row
                                name="gender"
                                value={gender}
                                onChange={handleGenderChange}
                            >
                                <FormControlLabel value="n" control={<Radio />} label="Prefer not to tell" />
                                <FormControlLabel value="f" control={<Radio />} label="Female" />
                                <FormControlLabel value="m" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </Grid>

                        {/* Code of Conduct */}
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox
                                    checked={codeOfConduct}
                                    onChange={handleCheckedCodeOfConduct}
                                />}
                                label={
                                    <div>
                                        <span>I agree to the </span>
                                        <Link href="./codeOfConduct">Code of Conduct</Link>
                                    </div>
                                }
                            />
                        </Grid>

                        {/* Submit button */}
                        <Grid item xs={12}>
                            <Button onClick={onClickRegister}
                                fullWidth
                                disabled={disabledRegister}
                                variant="contained"
                                color="primary">
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Register