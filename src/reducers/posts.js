const posts = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_TODOS_SUCCESS':
      return action.response
    default: 
      return state;
  }
}

export default posts;