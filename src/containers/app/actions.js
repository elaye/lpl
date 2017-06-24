import { DATE_PICK } from './constants'

export function pickDate(date) {
    return {
        type: DATE_PICK,
        payload: date
    };
}
