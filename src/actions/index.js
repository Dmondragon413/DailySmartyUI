import { 
    SET_RECENT_POSTS,
    SET_RESULTS_POSTS
} from './types';

import axios from 'axios';


export function fetchRecentPosts() {
    return function(dispatch) {
        axios.get('https://api.dailysmarty.com/posts')
        .then(response => {
            dispatch({
                type: SET_RECENT_POSTS,
                payload: response.data.posts
            })
        })
    }
}
// added perameter to the function below      vvv. a function being passed in from home.js
export function fetchPostsWithQuery(query, callback) { // why is it called callback? what is it?
    return function(dispatch) {
        axios.get(`https://api.dailysmarty.com/search?q=${query}`)
        .then(response => {
            dispatch({
                type: SET_RESULTS_POSTS,
                payload: response.data.posts
            })
            if (callback) { callback() } // call on function? and is this a short version of a ternary operator??
        })
    }
}