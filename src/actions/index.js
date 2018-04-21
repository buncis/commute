import { normalize } from 'nomalizr';
import * as schema from './schema';
import axios from 'axios';
import { getIsFetching } from '../reducers';

export const fetchTodos = (dispatch, getState) => {
  if (getIsFetching(getState())) {
    return Promise.resolve();
  }
  
  dispatch({
    type: 'FETCH_POSTS_REQUEST'
  });

  return axios.get('http://localhost:3000/posts.json').then(
    response => {
      dispatch({
        type: 'FETCH_POSTS_SUCCESS',
        response: normalize(response, schema.arrayOfPosts),
      });
    },
    error => {
      dispatch({
        type: 'FETCH_POSTS_FAILURE',
        message: error.message || 'Something went wrong.',
      });
    }
  );
};