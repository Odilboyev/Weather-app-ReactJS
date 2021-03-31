import React from 'react';

// import { Container } from './styles';

class Forecast extends React.Component {

  render() {
  const {country, city, temperature, humidity,pressure,description, error} = this.props  
   return (
      <div className="all-info">
          {country && city &&  <p>Location: <span> {city}, {country}</span></p>}
          {temperature && <p>Temparature: <span>{temperature}</span></p>}
          {humidity && <p>Humidity: <span> {humidity}</span></p>}
          {pressure && <p>Pressure: <span> {pressure}</span></p>}
          {description && <p>Conditions: <span>{description}</span></p>}
          {error && <p>{error}</p>}
    
      </div>
  )}

}
export default Forecast;