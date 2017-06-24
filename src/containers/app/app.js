import React, { Component } from 'react';
import classnames from 'classnames';
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

function renderInstructor(instructor, selectedInstructor, pickInstructor) {
    const className = classnames('app__instructor', {
        'app__instructor--selected': selectedInstructor === instructor
    });
    return (
        <button
            className={className}
            onClick={() => pickInstructor(instructor)}
            key={instructor}
        >
            {instructor}
        </button>
    );
}

function renderStep2(availableInstructors, selectedInstructor, pickInstructor) {
    if (!availableInstructors) return null;
    const noInstructor = <p>{"Pas de moniteur disponible à cette date"}</p>;
    const instructors = (
        <div className="app__instructors">
            {availableInstructors.map(instructor =>
                renderInstructor(instructor, selectedInstructor, pickInstructor)
            )}
        </div>
    );
    const els = availableInstructors.length !== 0 ? instructors : noInstructor;
    return (
            <div className="app__step">
            <h1>{"Etape 2: Choisissez un moniteur"}</h1>
                {els}
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
