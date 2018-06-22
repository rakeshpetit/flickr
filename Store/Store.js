import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import allReducers from '.././reducers';
// const initialReducer = (state = [], action) => state;

const reducers = combineReducers({
  // initialReducer
  allReducers,
  form
});

console.log('form', allReducers);

console.log('reducers', reducers);

const store = createStore(reducers);

export default store;
