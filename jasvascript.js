let valueToBeConverted = document.getElementById('myNumberInput');
let conversionSelect = document.getElementById('conversionSelect');
let convertBtn = document.getElementById('calcBtn');
let outputDisplay = document.getElementById('resultDisplay');

convertBtn.addEventListener('click', calculate);

function calculate(){
 let result = 0;
 if(conversionSelect.value === 'fahrenheit'){
 result = (parseFloat(valueToBeConverted.value) * 9/5) + 32;
 outputDisplay.innerHTML = result.toFixed(2);
    } else {
 result = (parseFloat(valueToBeConverted.value) - 32) * 5/9;
 outputDisplay.innerHTML = result.toFixed(2);
    }
}