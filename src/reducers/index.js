import { combineReducers } from 'redux';
import authedUser from '../reducers/authedUser';
import users from '../reducers/users';
import tweets from '../reducers/tweets';
import { loadingBarReducer } from 'react-redux-loading';

export default combineReducers({
  authedUser,
  users,
  tweets,
  loadingBar: loadingBarReducer
});
