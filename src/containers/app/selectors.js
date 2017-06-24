import { createSelector } from 'reselect';
import {
    availableDates,
    availableInstructorsByDate
} from './mock-data';

const selectApp = state => state.get('app');

const selectSelectedDate = createSelector(selectApp, app => app.get('selectedDate'));
const selectSelectedTime = createSelector(selectApp, app => app.get('selectedTime'));
const selectSelectedInstructor = createSelector(selectApp, app => app.get('selectedInstructor'));
const selectSelectedLocation = createSelector(selectApp, app => app.get('selectedLocation'));
const selectReserved = createSelector(selectApp, app => app.get('reserved'));

// API: /api/city/lyon/dates
const selectAvailableDates = () => availableDates;

// API: /api/city/lyon/instructors/available/dd-mm-yyyy
const selectAvailableInstructorsByDate = createSelector(selectSelectedDate, selectedDate => 
                                                        !!selectedDate ? availableInstructorsByDate.get(selectedDate.format('DD-MM-YYYY')) : null
);

export {
    selectAvailableDates,
    selectSelectedDate,
    selectSelectedTime,
    selectSelectedInstructor,
    selectAvailableInstructorsByDate,
    selectSelectedLocation,
    selectReserved
};
