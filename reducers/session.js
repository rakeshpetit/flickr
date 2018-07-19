import * as actions from '../actions/session';

export default function reducer(state = null, action) {
  switch (action.type) {
    case actions.CREATE_SESSION:
      return action.user;
    case actions.CLEAR_SESSION:
      return null;
    default:
      return state;
  }
}
