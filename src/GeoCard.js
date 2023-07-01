import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { geocodeByPlaceId } from 'react-google-places-autocomplete';
import { Button, Row, Col } from "antd";
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

  callApi = (lat, lng) => {
    console.log("lat: ",lat)
    console.log("lng: ",lng)
    axios.get(`${process.env.REACT_APP_API_URL}/api/weather/get_weather_data?lat=${lat}&lng=${lng}`)
      .then(response => {
        const items = response.data;
        if (items) {
          console.log(items.main)
          this.setState({ weatherData: items });
        }
      });
  }
  handleLocationSelect = (location) => {
    geocodeByPlaceId(location.value.place_id)
      .then(results => {
        const location = results[0].geometry.location;
        console.log("Latitude:", location.lat());
        console.log("Longitude:", location.lng());
        let lat = location.lat();
        let lng = location.lng();
        this.callApi(lat, lng)
      }
      )
      .catch(error => console.error(error));
  }

  handleButtonClick = () => {
    if (navigator.geolocation) {
      this.setState({ inputValue: null });

      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position)
        const { latitude, longitude } = position.coords;
        if(!latitude || !longitude){
          alert("Geolocation is not supported by this browser.");
        }
        this.callApi(latitude, longitude)

      }, (error) => {
        console.error("Error Code = " + error.code + " - " + error.message);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <Row>
          <Col span={48} style={{ textAlign: "center", width: '300px' }}>
            <GooglePlacesAutocomplete
              selectProps={{
                value: this.state.inputValue,
                onChange: this.handleLocationSelect,
              }}

            />
            <Button onClick={this.handleButtonClick} style={{ marginTop: '15px', marginBottom: '30px' }}>Use current location</Button>
            <WeatherCard weatherData={this.state.weatherData} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default GeoCard;