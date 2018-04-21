import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import PostsList from './components/PostsList'
import AddPost from './components/AddPost';

const persistedState = {
  posts: [{
    id: 0,
    title: 'Welcome Back!',
    content: 'false'
  }]
}
const store = createStore(
  rootReducer, persistedState,
  composeWithDevTools(
    applyMiddleware(thunk)
  ), 
);

const App = () => {
  return (
    <Provider store={store}>
      <AddPost />
    </Provider>
  )
}

export default App;
