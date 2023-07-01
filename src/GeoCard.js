import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';

class GeoCard extends React.Component {

    constructor(props) {  
      super(props);
      this.handleLocationSelect = this.handleLocationSelect.bind(this);
    }
    handleLocationSelect = (location) => {
      console.log('handleLocationSelect called');
      geocodeByPlaceId(location.value.place_id)
      .then(results => {
        const location = results[0].geometry.location;
        console.log("Latitude:", location.lat());
        console.log("Longitude:", location.lng());
      }
      )
      .catch(error => console.error(error));
    }

  render() {
    return (
      <div>
        <GooglePlacesAutocomplete
            selectProps={{
              onChange: this.handleLocationSelect,
            }}
        />
        <button onClick={this.handleButtonClick}>Use my current location</button>
      </div>
    );
  }
}

export default GeoCard;