const posts = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_POSTS_SUCCESS':
      return action.response
    case 'ADD_POST_SUCCESS':
      return [...state, action.response]
    case 'UPDATE_POST_SUCCESS':
      return state.map(item => {
        if (item.id === action.response.id) return action.response;
        return item;
      });
    case 'DELETE_POST_SUCCESS':
      return state.filter(item => item.id !== action.id)
    default: 
      return state;
  }
}

export default posts;