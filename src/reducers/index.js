import { combineReducers } from 'redux';
import authedUser from '../reducers/authedUser';
import users from '../reducers/users';
import tweets from '../reducers/tweets';

export default combineReducers({
  authedUser,
  users,
  tweets
});
