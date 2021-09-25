import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './post/post';

import useStyles from './styles';

const Posts = ({ setCurrentId})=>{
    const posts = useSelector((state)=>state.posts);
    const classes = useStyles();

    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (   // if posts.length is 0, the show CircularProgress
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map(post=>(                 // if posts.length is >0, the show the posts
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;