import { combineReducers } from 'redux-immutable';

import app from './containers/app/reducer';

export default function createReducer() {
    return combineReducers({
        app
    });
}
