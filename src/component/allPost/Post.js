import React, { useEffect, useState } from 'react';
import "./Post.css"
import { useParams, Link } from 'react-router-dom';
import { Box, IconButton, Typography, Card, CardContent, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';


const Post = (props) => {
    const { userId } = useParams()
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (

        <div style={{ position: "relative" }}>
            <Typography variant="h4">Posts of userId: {userId}</Typography>

            {!props.remove &&

                <Box position="absolute" top={-65} right="2%">
                    <Link to="/users">
                        <IconButton
                            color="secondary"
                            aria-label="delete" size="large">
                            <ArrowBackIcon fontSize="inherit" />
                        </IconButton>
                    </Link>
                </Box>

            }
            {
                posts.map(post =>
                    <Card style={{ textAlign: "left", margin: "15px auto", width: "90%", border: "2px solid grey", borderRadius: "15px" }} key={post.id}>
                        <CardContent>
                            <Typography variant="h6">Post id : {post.id}</Typography>
                            <Typography variant="h5">Title : {post.title}</Typography>
                            <Typography variant="p">{post.body}</Typography>
                            <br /> <br />
                            {!props.remove &&
                                < Link to={`/users/${userId}/${post.id}`}><Button variant="contained" color="primary">Details</Button></Link>
                            }
                        </CardContent>


                    </Card>)
            }
        </div >
    );
};

export default Post;