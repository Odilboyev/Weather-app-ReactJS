import React from 'react';

// import { Container } from './styles';

function Header(props) {
   return (
      <div className="main">
        <div className="titles">
          {props.temp ? <p>{props.temp}°</p> : <span>Weather App</span>}
          {props.city ? <h1>{props.city}</h1> : "" }
          {props.icon && <img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt="weather icon"/> }
          <h1>{props.main}</h1>
        </div>
      </div>
  )
}

export default Header;