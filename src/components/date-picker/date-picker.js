import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { default as ReactDatePicker } from 'react-datepicker';

import './date-picker.css';
import 'react-datepicker/dist/react-datepicker.css';

function DatePicker({ selectedDate, availableDates, onDateChange }) {
    return (
        <ReactDatePicker
            inline
            includeDates={availableDates}
            selected={selectedDate}
            onChange={onDateChange}
            dateFormat="DD/MM/YYYY"
        />
    );

}

DatePicker.propTypes = {
    selectedDate: PropTypes.object,
    availableDates: PropTypes.array.isRequired,
    onDateChange: PropTypes.func.isRequired
};

DatePicker.defaultProps = {
    selectedDate: null
};

export default DatePicker;
