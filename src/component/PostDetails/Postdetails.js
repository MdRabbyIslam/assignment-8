import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./PostDetails.css"
// import '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core';

const Postdetails = (match) => {
    const { userId, postId } = useParams();

    const [comments, setComments] = useState([]);
    console.log(comments)
    const [post, setPost] = useState([]);
    const [showComment, setShowComment] = useState(false);

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setComments(data));

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    return (
        <div className="posts">
            <h2 color="primary">this is post details of post Id no : {postId}</h2>
            <Link to={`/users/${userId}`} className="back"><button>back</button></Link>
            <div className="post-details">
                <h4>User Id : {post.userId}</h4>
                <h5>Post Id :{post.id}</h5>

                <h3 color="secondary">Title: {post.title}</h3>

                <p>{post.body}</p>


                <hr />

                <Button color="danger" onClick={() => setShowComment(!showComment)}>
                    {showComment ? "hide comment" : 'show comment'}
                </Button>



                <hr />
                {showComment &&
                    comments.map(singleComment =>
                        <div className="comment-details" key={singleComment.id} >

                            <div className="img-container">
                                <img className="img" src={`https://picsum.photos/200/300?random=${singleComment.id}`} alt="" />
                            </div>

                            <div className="commentor-info">


                                <h4 className="mui--text-display4" color="secondary">{singleComment.name}</h4>
                                <h5>{singleComment.email}</h5>
                                <p>{singleComment.body}</p>

                            </div>



                        </div>
                    )
                }
            </div>

        </div>
    );
};

export default Postdetails;