import { combineReducers } from 'redux';
import authedUsers from '../reducers/authedUser';
import users from '../reducers/users';
import tweets from '../reducers/tweets';

export default combineReducers({
  authedUsers,
  users,
  tweets
});
