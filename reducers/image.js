import * as actions from '../actions';

function saveImage(image) {
  console.log('image reducer', image);
  return { image };
}

export default function reducer(state = { image: null }, action) {
  switch (action.type) {
    case actions.SAVE_IMAGE:
      return saveImage(action.image);
    case actions.CLEAR_IMAGE:
      return { image: null };
    default:
      return state;
  }
}
