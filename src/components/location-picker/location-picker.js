/* global google */
import React from 'react';
import PropTypes from 'prop-types';

import Geosuggest from 'react-geosuggest';

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

function LocationPicker({ selectedLocation, onPickLocation }) {
    return (
        <Geosuggest
            placeholder={"Entrez une adresse"}
            onSuggestSelect={suggest => onPickLocation(suggest.placeId)}
            bounds={lyonBounds}
        />
    );
}

LocationPicker.propTypes = {
    selectedLocation: PropTypes.string,
    onPickLocation: PropTypes.func.isRequired
};

LocationPicker.defaultProps = {
    selectedLocation: null
};

export default LocationPicker;
