const isFetching = (state = false, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_REQUEST':
      return true;
    case 'FETCH_POSTS_SUCCESS':
    case 'FETCH_POSTS_FAILURE':
      return false;
    default:
      return state;
  }
};

export default isFetching;