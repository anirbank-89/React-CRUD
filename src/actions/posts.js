import * as api from '../api';

// Action creators
export const getPosts = ()=>async (dispatch)=>{
    try {
        const { data } = await api.fetchPosts();

        const action = {type: 'FETCH_ALL', payload: data}
        
        dispatch(action);
    }
    catch (err) {
        console.log(err.message);
    }
}

export const createPost = (post)=>async (dispatch)=>{
    try {
        const { data } = api.createPost(post);

        const action = {type: 'CREATE', payload: data}

        dispatch(action);
    } catch (err) {
        console.log(err);
    }
}

export const updatePost = (id,post)=>async (dispatch)=>{
    try {
        const { data } = await api.updatePost(id,post);

        dispatch({ type: 'UPDATE', payload: data });
    }
    catch (error) {
        console.log(error);
    }
}