import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button, Box } from '@material-ui/core';

const Home = () => {
    return (
        <div >
            <Box color="primary" p={3}>
                <Typography variant="h1" >Welcome to Assignment- 8</Typography>
                <Button variant="contained">
                    <Link style={{ textDecoration: "none", color: "black" }} to="/users">
                        See Our All Users
                </Link>
                </Button>
            </Box>



        </div>
    );
};

export default Home;