import { combineReducers } from 'redux';
import posts from './posts';
import isFetching from './isFetching';
import errorMessage from './errorMessage';

const rootReducers = combineReducers({
  posts,
  isFetching,
  errorMessage,
});

export default rootReducers;

export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;
