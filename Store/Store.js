import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducer as form } from 'redux-form';
import createSagaMiddleware from 'redux-saga';
import allReducers from '.././reducers';
import funcMain from '../sagas/sagas';
// const initialReducer = (state = [], action) => state;

const reducers = combineReducers({
  // initialReducer
  allReducers,
  form
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(funcMain);

export default store;
