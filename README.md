# weather_front project
Using react as the front-end framework,

# Libraries that used:
react-google-places-autocomplete :  Autocomplete the location that user want to input  

Axios: call python api  

Ant-design : render some layout   

openweathermap: get the weather information  

flask: python api route  


# How it works
The application retrieves weather data in two ways. The first utilizes Google's autocomplete feature. As users enter a location, a dropdown list is generated allowing them to select a location. Once selected, the latitude and longitude of that location are sent to the backend to retrieve weather data from OpenWeatherMap. 
The second method uses the user's current location data, obtained at the click of a button, and passes it to the backend API.

The Weather Card then displays pertinent weather information such as conditions (cloudy, clear, snow, rain), represented by corresponding icons, along with temperature, humidity, and wind speed

