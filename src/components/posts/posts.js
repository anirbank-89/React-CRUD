import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './post/post';

import useStyles from './styles';

const Posts = ()=>{
    const posts = useSelector((state)=>state.posts);
    const classes = useStyles();

    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (   // if posts.length is 0, the show CircularProgress
            <Grid></Grid>                          // if posts.length is >0, the show the posts
        )
    );
}

export default Posts;