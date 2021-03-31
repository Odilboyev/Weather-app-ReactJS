import React from 'react';
import './App.css';
import Forecast from './components/Forecast';
import Form from './components/Form';
import Header from './components/Header';

// eslint-disable-next-line no-unused-vars
const api_key = "4af0fa285f871c8daed6c84406bb7a26"

class App extends React.Component {
  state={
    temperature: "",
    city: "",
    country: "",
    humidity: "",
    pressure: "",
    main:"",
    icon: "",
    description: "",
    error: "",
  }

  getWeather = async (e) => {
    const app = document.getElementsByClassName("App")[0]
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    e.preventDefault()
    const api_call = await
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${api_key}`);

    const response = await api_call.json()
    if(city && country){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        country: response.sys.country,
        main: response.weather[0].main,
        humidity: response.main.humidity,
        pressure: response.main.pressure,
        icon: response.weather[0].icon,
        description: response.weather[0].description,
        error: ""
      })
      app.classList.remove("default-image")

    console.log(this.state)
    } else{
      this.setState({
        error: "Please fill out the input fields"
      })
    }

    // if(this.state.main ==="Thunderstorm"){
    //   app.style.backgroundImage = "url(./images/thunder.jpg)"
    // }
    // eslint-disable-next-line default-case
      // eslint-disable-next-line default-case
      switch(this.state.main){
        case "Thunderstorm":
        app.classList.toggle("thunder")
        // app.style.backgroundImage = "url(./images/thunder.jpg)"
        break;
      // eslint-disable-next-line no-duplicate-case
      case "Drizzle":
        app.classList.toggle("rain")
          // app.style.backgroundImage = "url(./images/drizzle.jpg)"
        break;
      case "Rain":
        app.classList.toggle("Rain")
        // app.style.backgroundImage = "url(./images/rain.jpg)"
        break;
      case "Snow":
        app.classList.toggle("snow")
        // app.style.backgroundImage = "url(./images/snow.jpg)"
        break
      case "Mist":
        app.classList.toggle("mist")
        // app.style.backgroundImage = "url(./images/mist.jpg)"
        break;
      case "Clouds":
        app.classList.toggle("cloud")
        break;
      case "Clear":
        app.classList.toggle("clear")
        break;
    }

    
    // eslint-disable-next-line default-case
    
  }
  
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
    main
  } = this.state

    return (
    <div className="App default-image">
     <Header temp={temperature} city={city} main={main} icon={icon}/>
     <div className="descriptions">
     <Form loadWeather={this.getWeather}/>
     <Forecast 
          temperature = {temperature}
          city ={city}
          country ={country}
          humidity = {humidity}
          pressure = {pressure}
          icon = {icon}
          description = {description}
          error = {error}
     />
     </div>
     
    </div>
  ); }
}

export default App;
