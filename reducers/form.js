import * as actions from '../actions/form';

function setNewData(state) {
  return [...state, 1];
}

export default function reducer(state = [0], action) {
  switch (action.type) {
    case actions.NEW_ACTION:
      return setNewData(state);
    default:
      return state;
  }
}
