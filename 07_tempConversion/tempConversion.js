const convertToCelsius = function(num) {
  let conversion = (5/9)*(num-32);
  return parseFloat(conversion.toFixed(1));
};

const convertToFahrenheit = function(num) {
  let conversion = (9/5)*num+32;
  return parseFloat(conversion.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
