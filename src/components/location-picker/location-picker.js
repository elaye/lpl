/* global google */
import React from 'react';
import PropTypes from 'prop-types';

import Geosuggest from 'react-geosuggest';

import './location-picker.css';

const lyonBounds = (function() {
    // Lyon
    const center = new google.maps.LatLng(45.7640, 4.8357);
    const circle = new google.maps.Circle({ center, radius: 30000 });
    return circle.getBounds();
})();

// // Hide locations outside of Lyon
// function skipSuggest(suggest) {
//     return !lyonBounds.contains(suggest.location);
// }

function LocationPicker({ onPickLocation }) {
    return (
        <Geosuggest
            placeholder={"Entrez une adresse"}
            onSuggestSelect={suggest => onPickLocation(suggest.placeId, suggest.label)}
            bounds={lyonBounds}
        />
    );
}

LocationPicker.propTypes = {
    onPickLocation: PropTypes.func.isRequired
};

export default LocationPicker;
