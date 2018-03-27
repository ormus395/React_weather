import React, { Component } from "react";
import "./App.css";
import keys from "../config/keys";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: null,
      loaded: false,
      weatherData: {}
    };
  }

  componentDidMount() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(position => {
        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${
            position.coords.latitude
          }&lon=${position.coords.longitude}&units=imperial&APPID=${
            keys.weather_key
          }`
        )
          .then(response => response.json())
          .then(weatherData => {
            // console.log(weatherData.weather);
            this.setState({
              loaded: true,
              weatherData: weatherData
            });
          })
          .catch(err => console.log(err));
      });
    } else {
      alert("You cannot set location... Your browser is too old.");
    }
  }
  render() {
    if (this.state.loaded) {
      var { name } = this.state.weatherData;
      var time = DAYS[new Date(this.state.weatherData.dt).getDay()];
      var temp = this.state.weatherData.main.temp;
      var description = this.state.weatherData.weather[0].description;
      var icon = `http://openweathermap.org/img/w/${
        this.state.weatherData.weather[0].icon
      }.png`;
      console.log(this.state.weatherData);
    }
    return (
      <div className="App">
        {this.state.loaded ? (
          <div className="App__content">
            <div className="App__header">
              <h3>{name}</h3>
              <p>{time}</p>
              <p>{description}</p>
            </div>
            <div>
              <img className="icon" src={icon} alt="Would be weather icon" />
              <div style={{ paddingLeft: ":10px", float: "left" }}>
                <div>
                  <div
                    style={{
                      float: "left",
                      marginTop: "-3px",
                      fontSize: "25px"
                    }}
                  >
                    <span style={{ display: "inline" }}>
                      {temp + " \u2109"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="clearfix" />
          </div>
        ) : (
          "Loading..."
        )}
      </div>
    );
  }
}

export default App;
