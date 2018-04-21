import axios from 'axios';
import { getIsFetching } from '../reducers';

export const fetchPosts = () => (dispatch, getState) => {
  if (getIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: 'FETCH_POSTS_REQUEST',
  });

  return axios.get('http://localhost:3000/posts.json').then(
    response => {
      dispatch({
        type: 'FETCH_POSTS_SUCCESS',
        response: response.data,
      });
    },
    error => {
      dispatch({
        type: 'FETCH_POSTS_FAILURE',
        message: error.message || 'Something went wrong.'
      });
    }
  );
};

export const addPost = (title, content) => (dispatch) =>
  axios.post('http://localhost:3000/posts.json', {
    post: {
      title: title,
      content: content
    }
  }).then(response => {
    dispatch({
      type: 'ADD_POST_SUCCESS',
      response: response.data
    });
  });