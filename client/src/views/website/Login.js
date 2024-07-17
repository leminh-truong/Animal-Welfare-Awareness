import { Button, Container, Grid, Icon, IconButton, InputAdornment, Link, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from '../../components/Header.js';


const Login = () => {
    let navigate = useNavigate();
    const [userCredentials, setUserCredentials] = useState({ email: "", password: "" });
    const { email, password } = userCredentials;
    const [hiddenPassword, setHiddenPassword] = useState(true);

    const handleChange = event => {
        const { value, name } = event.target;
        setUserCredentials({ ...userCredentials, [name]: value })
    }

    const onClickLogin = async () => {

        /* Validaciones */
        let flag = true;
        if (email === "") {
            flag = false;
        }
        if (password === "") {
            flag = false;
        }

        const body = {
            "email": email,
            "password": password
        };

        if (flag) {
            /* now this is working */
            const response = await fetch(`/api/users/login`, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });
            const data = await response.json();
            console.log("data")
            console.log(data)
            if (data.token && data.userInfo.status) {
                localStorage.setItem('userInfo', JSON.stringify(data));
                alert("Login successful")
                navigate('/posts');
            }else{
                alert("Invalid credentials")
                window.location.reload();
            }
        }
    }

    return (
        <>
            <Header />
            <Container maxWidth="sm" style={{ paddingTop: "24px", paddingBottom: "90px" }}>
                <Box p={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            Login
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                type="email"
                                label="Email:"
                                name="email"
                                value={email}
                                onChange={handleChange}
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
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

                        <Grid item xs={12}>
                            <Button onClick={onClickLogin}
                                fullWidth
                                variant="contained"
                                color="primary">
                                Login
                            </Button>
                            <Box pt={2}>
                                <Link href="./register">👋 Sign up here</Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Login