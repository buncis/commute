const errorMessage = (state = null, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_FAILURE':
      return action.message;
    case 'FETCH_POSTS_REQUEST':
    case 'FETCH_POSTS_SUCCESS':
      return null;
    default:
      return state;
  }
};

export default errorMessage;