import React, { useEffect, useState } from 'react'
import { Box, Container, Typography, Grid, Paper, Button, TextField, Icon } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'

const Admin = ({ user }) => {
    let navigate = useNavigate();

    const onClickUpdateUserStatus = async (idValue, enabledFlag) => {
        let enabledStatus = true;
        if (enabledFlag) {
            enabledStatus = false;
        }

        // Prepare value for sending to DB
        const body = {
            "id": idValue,
            "status": enabledStatus
        };
        console.log(body);

        const response = await fetch(`/api/users/changeUserStatus`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        });
        
        if (response.status === 200) {
            alert("Update user's registration successful")
            window.location.reload(); // Reference: https://stackoverflow.com/questions/44991656/no-restricted-globals
            navigate('/admin');
        }else{
            alert("Error occur while updating user's registration, please try again later.")
        }
    }

    return (
        <Grid item xs={12}>
            <Paper variant='outlined'>
                <Box p={2}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant={"h6"}>{user.firstName} {user.lastName}</Typography>
                        </Grid>
                        <Grid item xs={12} sm={8} >
                            <Typography variant={"body1"}>Email: {user.email}</Typography>
                            <br />
                            {user.gender && user.gender === "m" ? 
                                <Typography variant={"body1"}>Gender: Male</Typography>
                                :
                                user.gender === "w" ?
                                    <Typography variant={"body1"}>Gender: Female</Typography>
                                    :
                                    <Typography variant={"body1"}>Gender: Prefer not to tell</Typography>
                            }
                            <br />
                            {user.age ? 
                                <Typography variant={"body1"}>Age: {user.age}</Typography>
                                :
                                <Typography variant={"body1"}>Age: -</Typography>
                            }
                            <br />
                            {user.location ? 
                                <Typography variant={"body1"}>Location: {user.location}</Typography>
                                :
                                <Typography variant={"body1"}>Location: -</Typography>
                            }
                        </Grid>

                        {/* Submit button */}
                        <Grid item container xs={12} sm={4} justifyContent="flex-end">
                            {user.status ? 
                                <Button variant='contained' color="error" onClick={() => onClickUpdateUserStatus(user._id, user.status)}> Disable This User</Button> 
                                :
                                <Button variant='contained' color="success" onClick={() => onClickUpdateUserStatus(user._id, user.status)}> Enable This User</Button>
                            }
                        </Grid>
                    </Grid>
                </ Box>
            </Paper>
        </Grid>
    )
}

const Admins = () => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const [userList, setUserList] = useState([]);
    const [dataFiltered, setDataFiltered] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // This useEffect will as soon as the client open the url
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () => {
        const response = await fetch(`/api/users/getUsers`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'GET',
        });
        const data = await response.json();
        setUserList(data);
        setDataFiltered(data);
    }
  
    const handleChange = event => {
        setSearchQuery(event.target.value);
    };

    // Reference: https://dev.to/marianna13/create-a-search-bar-with-react-and-material-ui-4he
    const filterUser = (query, data) => {
        if (!query) {
            return data;
        } else {
            query = query.toLowerCase();
            return data.filter(
                (d) => d.firstName.toLowerCase().includes(query) || d.lastName.toLowerCase().includes(query)
            );
        }
    };

    const onClickSearchUser = () => {
        setDataFiltered(filterUser(searchQuery, userList));
    };

    /*
    useEffect(() => {
        setUserList([
            {
                id: "1",
                firstName: "Jhon",
                lastName: "Doe",
                email: "jhonDoe@email.com",
                age: 28,
                location: "VIC",
                gender: "m",
                enabled: true
            },
            {
                id: "2",
                firstName: "Alicia",
                lastName: "Holme",
                email: "aliciaHlm@email.com",
                age: 32,
                location: "NSW",
                gender: "w",
                enabled: true
            },
            {
                id: "3",
                firstName: "Jessica",
                lastName: "Gardner",
                email: "jessieGR@email.com",
                age: 25,
                location: "VIC",
                gender: "n",
                enabled: true
            },
            {
                id: "4",
                firstName: "Tommy",
                lastName: "Byden",
                email: "tommyByd@email.com",
                age: 23,
                location: "NSW",
                gender: "n",
                enabled: false
            },
            {
                id: "5",
                firstName: "Jean",
                lastName: "Vera",
                email: "jeanVera@email.com",
                age: 29,
                location: "VIC",
                gender: "m",
                enabled: true
            },
        ])
        console.log("getting Users")
    }, [])
    */

    return (
        <>
            <Header />
            <Container maxWidth="md" sx={{ pt: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant='h4'>Manage User's Registration</Typography>
                    </Grid>

                    {userInfo && userInfo.token && userInfo.role == 'admin' ?
                        <Grid item xs={12} sm={6}>
                            <Typography variant='h6'>List of users in the system.</Typography>
                        </Grid>
                        :
                        <Grid item xs={11}>
                            <Typography variant='h6'>You don't have authorization to access this page.</Typography>
                        </Grid>
                    }
                    
                    {userInfo && userInfo.token && userInfo.role == 'admin' ?
                        <Grid item container xs={12} sm={6} justifyContent="flex-end">
                            <form>
                                <TextField
                                    id="searchBar"
                                    className="text"
                                    variant="outlined"
                                    label="Search users from name"
                                    placeholder="Search..."
                                    size="small"
                                    onChange={handleChange}
                                /> 
                                <Button 
                                    variant='text' 
                                    startIcon={<Icon>search</Icon>} 
                                    onClick={onClickSearchUser}
                                >
                                    Search
                                </Button>
                            </form>
                        </Grid>
                        :
                        <Grid item xs={1}>
                            <Typography variant='h6'></Typography>
                        </Grid>
                    }
                </Grid>
                <br />
                
                {/* List all users */}
                <Grid container spacing={2}>
                        {userInfo && userInfo.token && userInfo.role == 'admin' ?
                            dataFiltered.map(user => (
                                <Admin user={user} />
                            ))
                            :
                            <Grid item xs={12}>
                                <Typography variant='h6'>Please login as an administrator.</Typography>
                            </Grid>
                        }   
                </Grid>
            </Container>
        </>    
    ); 
}

export default Admins