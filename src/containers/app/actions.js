import { DATE_PICK, INSTRUCTOR_PICK, LOCATION_PICK, RESERVE } from './constants'

export function pickDate(date) {
    return {
        type: DATE_PICK,
        payload: date
    };
}

export function pickInstructor(instructor) {
    return {
        type: INSTRUCTOR_PICK,
        payload: instructor
    };
}

export function pickLocation(location) {
    return {
        type: LOCATION_PICK,
        payload: location
    };
}

export function reserve() {
    return {
        type: RESERVE,
        payload: null
    };
}
