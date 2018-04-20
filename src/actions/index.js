let nextPostId = 0;
export const addPost = (title, content) => {
  return {
    type: 'ADD_POST',
    id: (nextPostId++).toString(),
    title,
    content,
  };
};
