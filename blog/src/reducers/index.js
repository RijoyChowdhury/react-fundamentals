import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
  // dummy stub needed during app initialisation
  dummy: () => 'dummy',
  posts: postsReducer,
  users: usersReducer,
});
