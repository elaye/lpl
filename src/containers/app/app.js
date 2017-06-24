import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
    selectSelectedDate,
    selectSelectedTime,
    selectSelectedInstructor,
    selectSelectedLocation,
    selectAvailableDates,
    selectAvailableInstructorsByDate,
    selectReserved
} from './selectors';
import { pickDate, pickTime, pickInstructor, pickLocation, reserve } from './actions';
import './app.css';
import { PropTypes } from 'prop-types';

import DatePicker from '../../components/date-picker/date-picker';
import TimePicker from '../../components/time-picker/time-picker';
import InstructorPicker from '../../components/instructor-picker/instructor-picker';
import LocationPicker from '../../components/location-picker/location-picker';

function renderStep1(availableDates, selectedDate, pickDate, selectedTime, pickTime) {
    return (
        <div className="app__step">
            <h2>{"Etape 1: Choisissez une date et une heure"}</h2>
            <div className="app__step-date">
                <DatePicker
                    selectedDate={selectedDate}
                    availableDates={availableDates}
                    onPickDate={pickDate}
                />
                <TimePicker
                    selectedTime={selectedTime}
                    onPickTime={pickTime}
                />
            </div>
        </div>
    );
}

function renderStep2(availableInstructors, selectedInstructor, pickInstructor) {
    if (!availableInstructors) return null;
    return (
            <div className="app__step">
            <h2>{"Etape 2: Choisissez un moniteur"}</h2>
            <InstructorPicker
                availableInstructors={availableInstructors}
                selectedInstructor={selectedInstructor}
                onPickInstructor={pickInstructor}
            />
            </div>
    );
}

function renderStep3(pickLocation) {
    return (
        <div className="app__step">
        <h2>{"Etape 3: Choisissez un lieu de départ"}</h2>
        <LocationPicker onPickLocation={pickLocation} />
        </div>
    );
}

function renderSubmit(submit, reserved, selectedDate, selectedInstructor, selectedLocation) {
    if (!reserved && (!selectedDate || !selectedInstructor || !selectedLocation)) return null;
    return <button onClick={submit}>{"Réserver"}</button>;
}

function renderSuccess(selectedDate, selectedTime, selectedLocation, selectedInstructor) {
    return (
        <div>
            <h1>{"Merci de votre réservation!"}</h1>
            <ul>
                <li><strong>{"Date : "}</strong>{selectedDate.format('DD/MM/YYYY')}</li>
                <li><strong>{"Heure : "}</strong>{`${selectedTime}:00`}</li>
                <li><strong>{"Lieu de départ : "}</strong>{selectedLocation.label}</li>
                <li><strong>{"Moniteur : "}</strong>{selectedInstructor}</li>
            </ul>
        </div>
    );
}

class App extends Component {

  render() {
      const {
          selectedDate,
          availableDates,
          pickDate,
          selectedTime,
          pickTime,
          selectedInstructor,
          availableInstructors,
          pickInstructor,
          selectedLocation,
          pickLocation,
          reserve,
          reserved
      } = this.props;
      if (reserved) return renderSuccess(selectedDate, selectedTime, selectedLocation, selectedInstructor);
      return (
        <div className="app">
            <h1>{"Réserver une heure de conduite"}</h1>
            {renderStep1(availableDates, selectedDate, pickDate, selectedTime, pickTime)}
            {renderStep2(availableInstructors, selectedInstructor, pickInstructor)}
            {selectedInstructor ? renderStep3(pickLocation) : null}
            {renderSubmit(reserve, reserved, selectedDate, selectedInstructor, selectedLocation)}
        </div>);
  }
}

App.propTypes = {
    selectedDate: PropTypes.object,
    selectedTime: PropTypes.number.isRequired,
    selectedInstructor: PropTypes.string,
    selectedLocation: PropTypes.object,
    availableDates: PropTypes.array.isRequired,
    availableInstructors: PropTypes.object,
    pickDate: PropTypes.func.isRequired,
    pickInstructor: PropTypes.func.isRequired,
    pickLocation: PropTypes.func.isRequired,
    reserved: PropTypes.bool.isRequired,
    reserve: PropTypes.func.isRequired
};

App.defaultProps = {
    selectedDate: null,
    selectedInstructor: null,
    selectedLocation: null,
    availableInstructors: null
};

export default connect(
    createStructuredSelector({
        availableDates: selectAvailableDates,
        availableInstructors: selectAvailableInstructorsByDate,
        selectedDate: selectSelectedDate,
        selectedTime: selectSelectedTime,
        selectedInstructor: selectSelectedInstructor,
        selectedLocation: selectSelectedLocation,
        reserved: selectReserved
    }),
    {
        pickDate,
        pickTime,
        pickInstructor,
        pickLocation,
        reserve
    }
)(App);
