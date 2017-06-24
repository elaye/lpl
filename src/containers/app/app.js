import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import {
    selectSelectedDate,
    selectSelectedInstructor,
    selectSelectedLocation,
    selectAvailableDates,
    selectAvailableInstructorsByDate,
    selectReserved
} from './selectors';
import { pickDate, pickInstructor, pickLocation, reserve } from './actions';
import './app.css';
import { PropTypes } from 'prop-types';

import DatePicker from '../../components/date-picker/date-picker';
import InstructorPicker from '../../components/instructor-picker/instructor-picker';
import LocationPicker from '../../components/location-picker/location-picker';

function renderStep1(availableDates, selectedDate, pickDate) {
    return (
        <div className="app__step">
            <h2>{"Etape 1: Choisissez une date"}</h2>
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
            <h2>{"Etape 2: Choisissez un moniteur"}</h2>
            <InstructorPicker
                availableInstructors={availableInstructors}
                selectedInstructor={selectedInstructor}
                onPickInstructor={pickInstructor}
            />
            </div>
    );
}

function renderStep3(selectedLocation, pickLocation) {
    return (
        <div className="app__step">
        <h2>{"Etape 3: Choisissez un lieu de départ"}</h2>
        <LocationPicker
            selectedLocation={selectedLocation}
            onPickLocation={pickLocation}
        />
        </div>
    );
}

function renderSubmit(submit, reserved, selectedDate, selectedInstructor, selectedLocation) {
    if (!reserved && (!selectedDate || !selectedInstructor || !selectedLocation)) return null;
    return <button onClick={submit}>{"Réserver"}</button>;
}

function renderSuccess(selectedDate, selectedInstructor) {
    return (
        <div>
            <h1>{"Merci de votre réservation!"}</h1>
            <ul>
                <li>{`Date : ${selectedDate.format('DD/MM/YYYY')}`}</li>
                <li>{`Heure : ${selectedDate.format('DD/MM/YYYY')}`}</li>
                <li>{`Moniteur : ${selectedInstructor}`}</li>
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
          selectedInstructor,
          availableInstructors,
          pickInstructor,
          selectedLocation,
          pickLocation,
          reserve,
          reserved
      } = this.props;
      console.log(reserved);
      if (reserved) return renderSuccess(selectedDate, selectedInstructor);
      return (
        <div className="app">
              <h1>{"Réserver une heure de conduite"}</h1>
            {renderStep1(availableDates, selectedDate, pickDate)}
            {renderStep2(availableInstructors, selectedInstructor, pickInstructor)}
            {selectedInstructor ? renderStep3(selectedLocation, pickLocation) : null}
            {renderSubmit(reserve, reserved, selectedDate, selectedInstructor, selectedLocation)}
        </div>);
  }
}

App.propTypes = {
    selectedDate: PropTypes.object,
    selectedInstructor: PropTypes.string,
    selectedLocation: PropTypes.string,
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
        selectedInstructor: selectSelectedInstructor,
        selectedLocation: selectSelectedLocation,
        reserved: selectReserved
    }),
    {
        pickDate,
        pickInstructor,
        pickLocation,
        reserve
    }
)(App);
