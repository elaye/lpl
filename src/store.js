import { createStore } from 'redux';
import { fromJS } from 'immutable';
import createReducer from './reducer';

export default function configureStore(initialState = {}) {
  const store = createStore(createReducer(), fromJS(initialState));
  return store;
}
