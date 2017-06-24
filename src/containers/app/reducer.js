import { fromJS } from 'immutable';
import { DATE_PICK, TIME_PICK, INSTRUCTOR_PICK, LOCATION_PICK, RESERVE } from './constants';

const initialState = fromJS({
    selectedDate: null,
    selectedTime: 9,
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
    case TIME_PICK:
        return state.set('selectedTime', action.payload)
            .set('selectedInstructor', null)
            .set('selectedLocation', null);
    case INSTRUCTOR_PICK:
        return state.set('selectedInstructor', action.payload);
    case LOCATION_PICK:
        return state.set('selectedLocation', action.payload);
    case RESERVE:
        return state.set('reserved', true);
    default:
        return state;
  }
}
