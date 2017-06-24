import { fromJS } from 'immutable';
import { DATE_PICK, INSTRUCTOR_PICK, LOCATION_PICK, RESERVE } from './constants';

const initialState = fromJS({
    selectedDate: null,
    selectedInstructor: null,
    selectedLocation: null,
    reserved: false
});

export default function app(state = initialState, action) {
  switch (action.type) {
    case DATE_PICK:
        return state.set('selectedDate', action.payload)
            .set('selectedInstructor', null)
            .set('selectedLocation', null);
    case INSTRUCTOR_PICK:
        return state.set('selectedInstructor', action.payload);
    case LOCATION_PICK:
      console.log(action.payload);
        return state.set('selectedLocation', action.payload);
    case RESERVE:
      console.log('reserve');
        return state.set('reserved', true);
    default:
        return state;
  }
}
