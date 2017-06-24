import moment from 'moment';
import { fromJS } from 'immutable';

export const availableDates = [
    moment(),
    moment().add(1, 'days'),
    moment().add(3, 'days'),
];

const instructors = [
    'Pierre Dupont',
    'Paul Dulac',
    'Jaques Dumoulin'
];

export const availableInstructorsByDate = fromJS({
    [availableDates[0].format('DD-MM-YYYY')]: [
        instructors[0],
        instructors[1]
    ],
    [availableDates[1].format('DD-MM-YYYY')]: [
        instructors[2]
    ],
    [availableDates[2].format('DD-MM-YYYY')]: [
        instructors[0],
        instructors[1],
        instructors[2]
    ]
});
