import React from 'react';

import PropTypes from 'prop-types';

import './time-picker.css';

// [9..19]
const hours = Array(11).fill(0).map((el, i) => 9 + i);

function TimePicker({ selectedTime, onPickTime }) {
    return (
        <div className="time-picker">
            <h3>{"Heure :"}&nbsp;</h3>
            <select onChange={e => onPickTime(Number(e.target.value))} >
                {hours.map(i => (<option value={i} key={`h${i}`}>{i}</option>))}
            </select>
            {":00"}
        </div>
    );
}

TimePicker.propTypes = {
    selectedTime: PropTypes.number.isRequired,
    onPickTime: PropTypes.func.isRequired
};

export default TimePicker;
