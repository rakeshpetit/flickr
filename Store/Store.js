import { createStore, combineReducers } from 'redux';

const initialReducer = (state = [], action) => state;

const reducers = combineReducers({
  initialReducer
});

const store = createStore(reducers);

export default store;
