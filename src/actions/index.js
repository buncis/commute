import axios from 'axios';

export const fetchPosts = (dispatch, getState) => {
  return dispatch => {
    axios.get('http://localhost:3000/posts.json').then(
      response => {
        dispatch({
          type: 'FETCH_TODOS_SUCCESS',
          response: response.data,
        });
      },
    );
  }
};
