import { combineReducers } from 'redux';
import form from './form';
import session from './session';
import image from './image';

export default combineReducers({
  form,
  session,
  image
});
