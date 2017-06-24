import { fromJS } from 'immutable';
import { DATE_PICK, INSTRUCTOR_PICK } from './constants';
import { today } from '../../utils/date';
import moment from 'moment';

const initialState = fromJS({
    // TODO: fetch first available day for a lesson
    selectedDate: null,
    selectedInstructor: null
});

export default function app(state = initialState, action) {
  switch (action.type) {
    case DATE_PICK:
      return state.set('selectedDate', action.payload).set('selectedInstructor', null);
    case INSTRUCTOR_PICK:
      return state.set('selectedInstructor', action.payload);
    default:
      return state;
  }
}
