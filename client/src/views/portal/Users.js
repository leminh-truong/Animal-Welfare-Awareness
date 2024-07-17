import { Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'

const Users = () => {

  const [users, setUsers] = useState([]);

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
    console.log("getting Users")
    console.log(data)
    setUsers(data);

  }

  return (
    <div>
      <Typography variant='h4'>Users</Typography>
      {users.map(item => (
        <div>{item.firstName}</div>
      ))}
    </div>
  )

}

export default Users