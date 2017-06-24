import { DATE_PICK, TIME_PICK, INSTRUCTOR_PICK, LOCATION_PICK, RESERVE } from './constants'

export function pickDate(date) {
    return {
        type: DATE_PICK,
        payload: date
    };
}

export function pickTime(time) {
    return {
        type: TIME_PICK,
        payload: time
    };
}

export function pickInstructor(instructor) {
    return {
        type: INSTRUCTOR_PICK,
        payload: instructor
    };
}

export function pickLocation(locationId, label) {
    return {
        type: LOCATION_PICK,
        payload: { locationId, label }
    };
}

export function reserve() {
    return {
        type: RESERVE,
        payload: null
    };
}
