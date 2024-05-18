import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';



const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (event) => {
    const newCelsius = event.target.value;
    setCelsius(newCelsius);
    setFahrenheit((newCelsius * 9/5) + 32);
  };

  const handleFahrenheitChange = (event) => {
    const newFahrenheit = event.target.value;
    setFahrenheit(newFahrenheit);
    setCelsius((newFahrenheit - 32) * 5/9);
  };

  return (
    <div>
       
      <TextField
        label="Temperature in Celsius"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <Button onClick={handleCelsiusChange} variant="contained">
        Submit
      </Button>
      <TextField
        label="Temperature in Fahrenheit"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
      <Button onClick={handleFahrenheitChange} variant="contained">
        Submit
      </Button>
    </div>
  );
};

export default TemperatureConverter;