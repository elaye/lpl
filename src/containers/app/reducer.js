import { fromJS } from 'immutable';
import { DATE_PICK } from './constants';
import { today } from '../../utils/date';
import moment from 'moment';

const initialState = fromJS({
    // TODO: fetch first available day for a lesson
    lessonDate: moment()
});

export default function app(state = initialState, action) {
  switch (action.type) {
    case DATE_PICK:
      return state.set('lessonDate', action.payload);
    default:
      return state;
  }
}
