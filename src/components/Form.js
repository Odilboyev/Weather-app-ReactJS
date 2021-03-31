import React from 'react';

// import { Container } from './styles';

function Form(props) {
  return (
      <form onSubmit={props.loadWeather}>
          <input type="text" name="city" placeholder="choose a City"/>
          <input type="text" name="country" placeholder="choose a Country"/>
          <button>get a Weather</button>
      </form>
  )
}

export default Form;