import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { default as ReactDatePicker } from 'react-datepicker';

import './date-picker.css';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({ selectedDate, availableDates, onPickDate }) {
    return (
        <ReactDatePicker
            inline
            includeDates={availableDates}
            selected={selectedDate}
            onChange={onPickDate}
            dateFormat="DD/MM/YYYY"
        />
    );

}

DatePicker.propTypes = {
    selectedDate: PropTypes.object,
    availableDates: PropTypes.array.isRequired,
    onPickDate: PropTypes.func.isRequired
};

DatePicker.defaultProps = {
    selectedDate: null
};

export default DatePicker;
