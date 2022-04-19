import React from "react";
import "./App.css";
import Forecast from "./components/Forecast";
import Form from "./components/Form";
import Header from "./components/Header";

// eslint-disable-next-line no-unused-vars
const api_key = "a1ddd7bd152cd4c1897171ca89a9c234";

class App extends React.Component {
  state = {
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    main: "",
    icon: "",
    description: "",
    error: "",
    background: "default-image",
  };

  getWeather = async (e) => {
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    e.preventDefault();
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}`
    );

    const response = await api_call.json();
    if (city && country && response.main) {
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        main: response.weather[0].main,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        error: "",
        background: response.weather[0].main,
      });
      console.log(this.state);
    } else {
      this.setState({
        error: "Please fill out the input fields",
      });
    }

    // eslint-disable-next-line default-case
  };

  render() {
    const {
      temperature,
      city,
      country,
      humidity,
      pressure,
      icon,
      description,
      error,
      main,
      background,
    } = this.state;

    return (
      <div className={`App ${background}`}>
        <Header temp={temperature} city={city} main={main} icon={icon} />
        <div className="descriptions">
          <Form loadWeather={this.getWeather} />
          <Forecast
            temperature={temperature}
            city={city}
            country={country}
            humidity={humidity}
            pressure={pressure}
            icon={icon}
            description={description}
            error={error}
          />
        </div>
      </div>
    );
  }
}

export default App;
