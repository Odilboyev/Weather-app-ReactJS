import React, { Component } from 'react';

class Weather extends Component {
    state = {
        city: ''
    }
    setCity = (e) =>{
        const {value} = e.target;
        this.setState({city:value})
    }
    render() {
        const {city} = this.state
        return (
            <div>
                <input type="text" name="value" onChange={this.setCity} value={city}/>
                <h1>{city}</h1>
            </div>
        );
    }
}

export default Weather;