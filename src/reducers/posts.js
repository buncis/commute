const post = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return {
        id: action.id,
        title: action.title,
        content: action.content,
      };
    default:
      return state;
  }
};

const posts = (state = [], action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        post(undefined, action),
      ];
    default:
      return state;
  }
};

export default posts;
