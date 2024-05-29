function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9 / 5) + 32;
    return fahrenheit;
  }

  function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }

  function convertTemperature() {
    var inputTemp = document.getElementById("inputTemp").value;
    var conversionType = document.getElementById("conversionType").value;
    var result;

    if (conversionType === "celsiusToFahrenheit") {
      result = celsiusToFahrenheit(inputTemp) + " Fahrenheit";
    } else if (conversionType === "fahrenheitToCelsius") {
      result = fahrenheitToCelsius(inputTemp) + " Celsius";
    }

    document.getElementById("result").innerText = result;
  }