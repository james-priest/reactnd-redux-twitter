import { getInitialData } from '../utils/api';
import { receiveUsers } from '../actions/users';
import { receiveTweets } from '../actions/tweets';
import { setAuthedUser } from '../actions/authedUser';

const AUTHED_ID = 'sarah_edo';

export function handleInitialData() {
  return dispatch => {
    // return { data: 'my data' };
    // return getInitialData().then(data => {
    //   console.log(data);
    // });
    return getInitialData().then(({ users, tweets }) => {
      console.log(tweets, users);
      dispatch(receiveUsers(users));
      dispatch(receiveTweets(tweets));
      dispatch(setAuthedUser(AUTHED_ID));
    });
  };
}
