import React, { Component } from 'react';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectLessonDate } from './selectors';
import { pickDate } from './actions';
import './app.css';
import { PropTypes } from 'prop-types';

import DatePicker from '../../components/date-picker/date-picker';

function renderStep1(date, pickDate) {
    return (
        <div className="app__step">
            <h1>{"Etape 1: Choisissez une date"}</h1>
            <DatePicker date={date} onDateChange={pickDate} />
        </div>
    );
}

function renderStep2() {
    return (
            <div className="app__step">
            <h1>{"Etape 2: Choisissez un moniteur"}</h1>
            </div>
    );
}


class App extends Component {

  render() {
      const { lessonDate, pickDate } = this.props;
      return (
        <div className="app">
            {renderStep1(lessonDate, pickDate)}
            {renderStep2()}
        </div>);
  }
}

App.propTypes = {
    lessonDate: PropTypes.object.isRequired
};

export default connect(
    createStructuredSelector({
        lessonDate: selectLessonDate
    }),
    {
        pickDate
    }
)(App);
