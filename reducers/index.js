import { combineReducers } from 'redux';
import form from './form';
import session from './session';

export default combineReducers({
  form,
  session
});
