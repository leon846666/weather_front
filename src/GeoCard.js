import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import axios from 'axios';
import WeatherCard from './WeatherCard';

class GeoCard extends React.Component {

    constructor(props) {  

      super(props);
      this.handleLocationSelect = this.handleLocationSelect.bind(this);
      this.state = {
        weatherData: null,
      };
    }
    handleLocationSelect = (location) => {
      geocodeByPlaceId(location.value.place_id)
      .then(results => {
        const location = results[0].geometry.location;
        console.log("Latitude:", location.lat());
        console.log("Longitude:", location.lng());
        let lat =  location.lat();
        let lng =  location.lng();

        axios.get(`${process.env.REACT_APP_API_URL}/api/weather/get_weather_data?lat=${lat}&lng=${lng}`)
        .then(response => {
          const items = response.data;
          console.log("items:", items);
          if(items){
            console.log(items.main)
            this.setState({ weatherData: items });
          }
        });

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

      <WeatherCard weatherData={this.state.weatherData} />

    </div>
     );
    }
}

export default GeoCard;