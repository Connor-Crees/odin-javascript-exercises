const convertToCelsius = function(tempF) {
  let tempC = 5/9*(tempF-32);
  tempC = Math.round(tempC * 10) / 10; // round to 1 dp
  return tempC;
};

const convertToFahrenheit = function(tempC) {
  let tempF = (tempC * 9/5) + 32;
  tempF = Math.round(tempF * 10) / 10; // round to 1 dp
  return tempF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
