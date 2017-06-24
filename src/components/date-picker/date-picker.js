import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { default as ReactDatePicker } from 'react-datepicker';

import './date-picker.css';
import 'react-datepicker/dist/react-datepicker.css';

class CustomInput extends Component {
    render() {
        const { onClick, value } = this.props;
        return (
            <button
                className="date-picker__custom-input"
                onClick={onClick}
            >
                {value}
            </button>
        );
    }
}

CustomInput.propTypes = {
    onClick: PropTypes.func,
    value: PropTypes.string
};

function DatePicker({ date, onDateChange }) {
    console.log(date);
    return (
        <ReactDatePicker
            inline
            customInput={<CustomInput />}
            selected={date}
            onChange={onDateChange}
            dateFormat="DD/MM/YYYY"
        />
    );

}

DatePicker.propTypes = {
    date: PropTypes.object.isRequired,
    onDateChange: PropTypes.func.isRequired
};

export default DatePicker;
