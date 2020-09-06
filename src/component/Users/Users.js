import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, IconButton, Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Users = () => {
    const users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    return (
        <Typography style={{ position: "relative" }}>
            <Typography variant="h5">
                See our User List
            </Typography>
            {/* <Link to="./"><Button variant="outlined" color="primary">back</Button></Link> */}
            <Box position="absolute" top={-65} right="2%">
                <Link to="./">
                    <IconButton
                        color="secondary"
                        aria-label="delete" size="large">
                        <ArrowBackIcon fontSize="inherit" />
                    </IconButton>
                </Link>
            </Box>
            {
                users.map(userId =>
                    <div key={userId}>
                        <Typography variant="h6">
                            <Link style={{ textAlign: "left" }} to={`/users/${userId}`}>
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <AccountCircleIcon fontSize="medium" /> <span> UserId : {userId}</span>
                                </div>
                            </Link>
                        </Typography>
                    </div>)
            }
        </Typography >
    );
};

export default Users;