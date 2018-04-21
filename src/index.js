import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import PostsList from './components/PostsList'
import { composeWithDevTools } from 'redux-devtools-extension';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  ), 
)

ReactDOM.render(
  <Provider store={store}>
    <PostsList />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
