function convertTemperature(){
    const inputTemp = parseFloat(document.getElementById('num').value);
    const unit = document.getElementById('unit').value;
    let convertedTemp;
    if(unit == 'Celsius'){
        // Convert to Fahrenheit
        convertedTemp = (inputTemp * 9/5) + 32;
        document.getElementById('result').textContent = `${inputTemp} degrees Celsius = ${convertedTemp} degrees Fahrenheit`;
    }
    else if (unit === 'Fahrenheit'){
        // Convert to Celsius
        convertedTemp = (inputTemp - 32) * 5/9;
        document.getElementById('result').textContent = `${inputTemp} degrees Fahrenheit = ${convertedTemp} degrees Celsius`;
    } 
    else{
        document.getElementById('result').textContent = 'Please Select a Valid Unit';
    }
}