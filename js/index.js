function convertCelciusToFahrenheit() {
    const celsiusInput = document.getElementById("celcius");
    const fahrenheitOutput = document.getElementById("fehrenheit");

    // Validate input
    if (isNaN(parseFloat(celsiusInput.value))) {
        alert("Please enter a valid number for Celsius.");
        return; // Early exit to prevent further execution
    }

    const celsiusValue = parseFloat(celsiusInput.value);
    const fahrenheitValue = (celsiusValue * 9/5) + 32;

    fahrenheitOutput.value = fahrenheitValue.toFixed(2);
}

function convertFahrenheitToCelsius() {
    const fahrenheitInput = document.getElementById("fehrenheit");
    const celsiusOutput = document.getElementById("celcius");

    // Validate input
    if (isNaN(parseFloat(fahrenheitInput.value))) {
        alert("Please enter a valid number for Fahrenheit.");
        return;
    }

    const fahrenheitValue = parseFloat(fahrenheitInput.value);
    const celsiusValue = (fahrenheitValue - 32) * 5/9;

    celsiusOutput.value = celsiusValue.toFixed(2);
}

function clearField() {
    const celsiusInput = document.getElementById("celcius");
    const fahrenheitInput = document.getElementById("fehrenheit");

    celsiusInput.value = "";
    fahrenheitInput.value = "";
}

function reverseConversion() {
    // Check which field has a value and call the appropriate conversion function
    const celsiusInput = document.getElementById("celcius");
    const fahrenheitInput = document.getElementById("fehrenheit");

    if (celsiusInput.value !== "") {
        convertCelciusToFahrenheit();
    } else if (fahrenheitInput.value !== "") {
        convertFahrenheitToCelsius();
    } else {
        alert("maaf ka masih belum bisa:(");
    }
}

// Add event listeners for input changes
celsiusInput.addEventListener("input", convertCelciusToFahrenheit);
fahrenheitInput.addEventListener("input", convertFahrenheitToCelsius);