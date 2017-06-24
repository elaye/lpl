import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
    selectSelectedDate,
    selectSelectedInstructor,
    selectAvailableDates,
    selectAvailableInstructorsByDate
} from './selectors';
import { pickDate, pickInstructor } from './actions';
import './app.css';
import { PropTypes } from 'prop-types';

import DatePicker from '../../components/date-picker/date-picker';
import InstructorPicker from '../../components/instructor-picker/instructor-picker';

function renderStep1(availableDates, selectedDate, pickDate) {
    return (
        <div className="app__step">
            <h1>{"Etape 1: Choisissez une date"}</h1>
            <DatePicker
                selectedDate={selectedDate}
                availableDates={availableDates}
                onPickDate={pickDate}
            />
        </div>
    );
}

function renderStep2(availableInstructors, selectedInstructor, pickInstructor) {
    if (!availableInstructors) return null;
    return (
            <div className="app__step">
            <h1>{"Etape 2: Choisissez un moniteur"}</h1>
            <InstructorPicker
                availableInstructors={availableInstructors}
                selectedInstructor={selectedInstructor}
                onPickInstructor={pickInstructor}
            />
            </div>
    );
}

class App extends Component {

  render() {
      const { selectedDate, availableDates, pickDate, selectedInstructor, availableInstructors, pickInstructor } = this.props;
      return (
        <div className="app">
            {renderStep1(availableDates, selectedDate, pickDate)}
            {renderStep2(availableInstructors, selectedInstructor, pickInstructor)}
        </div>);
  }
}

App.propTypes = {
    selectedDate: PropTypes.object,
    availableDates: PropTypes.array.isRequired
};

App.defaultProps = {
    selectedDate: null
};

export default connect(
    createStructuredSelector({
        availableDates: selectAvailableDates,
        availableInstructors: selectAvailableInstructorsByDate,
        selectedDate: selectSelectedDate,
        selectedInstructor: selectSelectedInstructor
    }),
    {
        pickDate,
        pickInstructor
    }
)(App);
