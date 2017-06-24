import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './instructor-picker.css';

function renderInstructor(instructor, selectedInstructor, onPickInstructor) {
    const className = classnames('instructor-picker__instructor', {
        'instructor-picker__instructor--selected': selectedInstructor === instructor
    });
    return (
            <button
        className={className}
        onClick={() => onPickInstructor(instructor)}
        key={instructor}
            >
            {instructor}
        </button>
    );
}

function InstructorPicker({ availableInstructors, selectedInstructor, onPickInstructor }) {
    const noInstructor = <p>{"Pas de moniteur disponible à cette date"}</p>;
    const instructors = (
            <div className="instructor-picker__instructors">
            {availableInstructors.map(instructor =>
                                      renderInstructor(instructor, selectedInstructor, onPickInstructor)
                                     )}
        </div>
    );
    return availableInstructors.length !== 0 ? instructors : noInstructor;
}

InstructorPicker.propTypes = {
    availableInstructors: PropTypes.object.isRequired,
    selectedInstructor: PropTypes.string,
    onPickInstructor: PropTypes.func.isRequired
};

InstructorPicker.defaultProps = {
    selectedInstructor: null
};

export default InstructorPicker;
