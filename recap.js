// 1. Print 'Hello, World!' to the console.
console.log("Hello, World!");

// 2. Declare a variable and assign it a number.
let myNumber = 42;

// 3. Create a function that adds two numbers.
function add(a, b) {
  return a + b;
}

// 4. Write a program that checks if a number is even or odd.
function checkEvenOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is Even`);
  } else {
    console.log(`${num} is Odd`);
  }
}
checkEvenOdd(7);

// 5. Loop through numbers 1 to 10 and print them.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 6. Create an array of fruits and print each fruit.
const fruits = ["apple", "banana", "cherry", "mango"];
fruits.forEach(fruit => console.log(fruit));

// 7. Write a function that reverses a string.
function reverseString(str) {
  return str.split('').reverse().join('');
}
console.log(reverseString("hello"));

// 8. Find the largest number in an array.
const numbers = [3, 7, 2, 9, 4];
const maxNumber = Math.max(...numbers);
console.log("Largest number:", maxNumber);

// 9. Check if a word is a palindrome.
function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}
console.log("Is 'racecar' a palindrome?", isPalindrome("racecar"));

// 10. Generate a random number between 1 and 100.
const randomNum = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", randomNum);

// 11. Write a function that converts Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
console.log("25°C in Fahrenheit is", celsiusToFahrenheit(25));

// 12. Create an object with properties: name, age, and city.
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
console.log(person);

// 13. Use a for loop to sum numbers 1 to 100.
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("Sum from 1 to 100 is", sum);

// 14. Write a function that counts vowels in a string.
function countVowels(str) {
  return str.match(/[aeiou]/gi)?.length || 0;
}
console.log("Vowel count in 'hello world':", countVowels("hello world"));

// 15. Check if a number is prime.
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Is 17 prime?", isPrime(17));

// 16. Sort an array in ascending order.
const unsorted = [5, 2, 8, 1, 3];
const sorted = unsorted.slice().sort((a, b) => a - b);
console.log("Sorted array:", sorted);

// 17. Filter an array to remove duplicates.
const dupArray = [1, 2, 2, 3, 4, 4, 5];
const uniqueArray = [...new Set(dupArray)];
console.log("Array without duplicates:", uniqueArray);

// 18. Write a program that prints a multiplication table.
function printMultiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}
printMultiplicationTable(5);

// 19. Use switch case to print days of the week.
function getDayName(dayNumber) {
  switch (dayNumber) {
    case 1: console.log("Sunday"); break;
    case 2: console.log("Monday"); break;
    case 3: console.log("Tuesday"); break;
    case 4: console.log("Wednesday"); break;
    case 5: console.log("Thursday"); break;
    case 6: console.log("Friday"); break;
    case 7: console.log("Saturday"); break;
    default: console.log("Invalid day number");
  }
}
getDayName(3);

// 20. Create a function that capitalizes the first letter of each word.
function capitalizeWords(str) {
  return str.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ");
}
console.log(capitalizeWords("hello world from javascript"));

// 21. Find the factorial of a number.
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
console.log("Factorial of 5 is", factorial(5));

// 22. Write a program that merges two arrays.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = arr1.concat(arr2);
console.log("Merged array:", mergedArray);

// 23. Check if an element exists in an array.
const colors = ["red", "green", "blue"];
console.log("Does 'green' exist?", colors.includes("green"));

// 24. Create a countdown timer from 10 to 1.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 25. Write a function that finds the minimum value in an array.
function findMin(arr) {
  return Math.min(...arr);
}
console.log("Minimum value:", findMin([5, 1, 8, -3, 2]));
