import * as actions from '../actions';

export default function reducer(state = { image: null }, action) {
  switch (action.type) {
    case actions.SAVE_IMAGE:
      return { image: action.image };
    case actions.CLEAR_IMAGE:
      return { image: null };
    default:
      return state;
  }
}
