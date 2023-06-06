let valueToBeConverted = document.getElementById('myNumberInput');
let conversionSelect = document.getElementById('conversionSelect');
let convertBtn = document.getElementById('calcBtn');
let outputDisplay = document.getElementById('resultDisplay');

convertBtn.addEventListener('click', calculate);

function calculate(){
    print('Hello world');
 let result = 0;
 if(conversionSelect.value === 'fahrenheit'){
 result = (parseFloat(valueToBeConverted.value) * 9/5) + 32;
 outputDisplay.innerHTML = result.toFixed(2);
    } else {
 result = (parseFloat(valueToBeConverted.value) - 32) * 5/9;
 outputDisplay.innerHTML = result.toFixed(2);
    }
}

//Question 1: Create a function that will be able to convert figures from Fahrenheit to Celsius.

function fahrenheitToCelsius(fahrenheit) {
    var celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
  }
  
  var fahrenheit = 77;
  var celsius = fahrenheitToCelsius(fahrenheit);
  console.log(fahrenheit + " degrees Fahrenheit is " + celsius + " degrees Celsius.");

  // TEST CASE:
  
const { test, expect } = require('jest');

const fahrenheitToCelsius = require('./your-file.js');

test('Converts Fahrenheit to Celsius correctly', () => {
 
  const fahrenheit = 77;

  const expectedCelsius = (fahrenheit - 32) * 5 / 9;
  
  const actualCelsius = fahrenheitToCelsius(fahrenheit);
  
  expect(actualCelsius).toBeCloseTo(expectedCelsius);
});

  

// Question 2: Create a function that will calculate the average of numbers in an array.

function avg (arr){
    var sum = 0;

    for (let i = 0; i < arr.length; i++){
        sum += arr[i];

    }return sum / arr.length;
}

// TEST CASE:


//Question 3: Create a function that checks if a number, n is divisible by two numbers x and y. All inputs are positive, non-zero digits.

function isDivisible(n, x, y) {
    if (n % x === 0 && n % y === 0) {
      return true;
    } else {
      return false;
    }
  }
  var n = 12;
var x = 3;
var y = 4;

if (isDivisible(n, x, y)) {
  console.log(n + " is divisible by both " + x + " and " + y + ".");
} else {
  console.log(n + " is not divisible by both " + x + " and " + y + ".");
}

// Question 4: Create a function that will output the first 100 prime numbers.

function generatePrimeNumbers(n) {
    var primes = [];
    var num = 2;
    
    while (primes.length < n) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    
    return primes;
  }
  
  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  var first100Primes = generatePrimeNumbers(100);
  console.log(first100Primes);

  //TEST CASE:
  
const { test, expect } = require('jest');

const { generatePrimeNumbers } = require('./your-file.js');

// Test case
test('Generates the correct number of prime numbers', () => {
  const n = 100;
  
  const actualPrimes = generatePrimeNumbers(n);
  
  expect(actualPrimes.length).toBe(n);
  
  for (let i = 0; i < actualPrimes.length; i++) {
    expect(isPrime(actualPrimes[i])).toBe(true);
  }
});


  // Question 5: Create a function that will return a boolean specifying if a number is a prime number.

  function isPrime(num) {
    if (num < 2) {
      return false;
    }
    
    for (var i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  
  var number = 17;
  
  if (isPrime(number)) {
    console.log(number + " is a prime number.");
  } else {
    console.log(number + " is not a prime number.");
  }

  // TEST CASE:
  
const { test, expect } = require('jest');

const { isPrime } = require('./your-file.js');

// Test case
test('Checks if a number is prime', () => {
  // Prime number
  expect(isPrime(17)).toBe(true);
  
  // Non-prime number
  expect(isPrime(12)).toBe(false);
  
  // Edge cases
  expect(isPrime(0)).toBe(false);
  expect(isPrime(1)).toBe(false);
});


  //Question 6: Create a function that receives an array of numbers of diverse numbers and returns an array containing only positive numbers.

  function getPositiveNumbers(numbers) {
    var positiveNumbers = [];
    
    for (var i = 0; i < numbers.length; i++) {
      if (numbers[i] > 0) {
        positiveNumbers.push(numbers[i]);
      }
    }
    
    return positiveNumbers;
  }
  
  var numbers = [-2, 5, 0, -8, 10, -3, 7];
  var positiveNumbers = getPositiveNumbers(numbers);
  
  console.log(positiveNumbers);

  //TEST CASE:
  // Import the necessary dependencies
const { test, expect } = require('jest');

// Import the function to be tested
const { getPositiveNumbers } = require('./your-file.js');

// Test case
test('Filters an array and returns positive numbers', () => {
  // Input array
  const numbers = [-2, 5, 0, -8, 10, -3, 7];

  const actualPositiveNumbers = getPositiveNumbers(numbers);

  const expectedPositiveNumbers = [5, 10, 7];

  expect(actualPositiveNumbers).toEqual(expectedPositiveNumbers);
});


  //Question 7: Write a program that prints the numbers from 1 to 100. But for multiples of 3 prints "Fizz" instead of the number and for the multiples of 5 prints "Buzz". For numbers which are multiples of both 3 and 5 prints "FizzBuzz".

  for (var i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  // TEST CASE:
  
  
  //Question 8: The marketing team is spending way too much time typing in hashtags. Let’s create a hashtag generator for them

  function generateHashtag(str) {
    if (str === "" || str.trim() === "") {
      return false;
    }
    
    var words = str.split(" ");
    var hashtag = "#";
    
    for (var i = 0; i < words.length; i++) {
      var word = words[i];
      if (word !== "") {
        hashtag += word.charAt(0).toUpperCase() + word.slice(1);
      }
    }
    
    if (hashtag.length > 140) {
      return false;
    }
    
    return hashtag;
  }
  
  var input = "Hello   world  how    are  you";
  var hashtag = generateHashtag(input);
  
  if (hashtag) {
    console.log(hashtag);
  } else {
    console.log("Invalid input or resulting hashtag is too long.");
  }
  


  
