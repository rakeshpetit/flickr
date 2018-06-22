import { createStore, combineReducers } from 'redux';
import allReducers from '.././reducers';
// const initialReducer = (state = [], action) => state;

const reducers = combineReducers({
  // initialReducer
  allReducers
});

console.log('form', allReducers);

console.log('reducers', reducers);

const store = createStore(reducers);

export default store;
