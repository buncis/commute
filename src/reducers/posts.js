const posts = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return action.response
    case 'ADD_POST_SUCCESS':
      return [...state, action.response]
    default: 
      return state;
  }
}

export default posts;