// Step 1: create array called ages
const ages = [3, 9, 23, 64, 2, 8, 28, 93];

// calculate difference between last and first elements
const ageDifference = ages[ages.length - 1] - ages[0]; // using ages.length to find the last element
console.log("Difference between last and first age:", ageDifference);

// add a new age to the array
ages.push(45); // Adding a new age
const newAgeDifference = ages[ages.length - 1] - ages[0]; // recalculate the difference
console.log("New difference after adding an age:", newAgeDifference);

// calculate the average age
let totalAge = 0;
for (let age of ages) {
    totalAge += age; // Sum all ages
}
const averageAge = totalAge / ages.length; // calculate average
console.log("Average age:", averageAge);

// Step 2: create an array called names
const names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// calculate the average number of letters per name
let totalLetters = 0;
for (let name of names) {
    totalLetters += name.length; // sum the lengths of each name
}
const averageLetters = totalLetters / names.length; // calculate average
console.log("Average number of letters per name:", averageLetters);

// concatenate all names together, separated by spaces
let concatenatedNames = '';
for (let name of names) {
    concatenatedNames += name + ' '; // add each name followed by a space
}
console.log("Concatenated names:", concatenatedNames.trim()); // trim to remove the trailing space

// Step 3: access the last element of any array
// you can access the last element using: array[array.length - 1]

// Step 4: access the first element of any array
// you can access the first element using: array[0]

// Step 5: create a new array called nameLengths
const nameLengths = [];
for (let name of names) {
    nameLengths.push(name.length); // push the length of each name into nameLengths
}
console.log("Name lengths:", nameLengths);

// Step 6: calculate the sum of all elements in the nameLengths array
let totalNameLengths = 0;
for (let length of nameLengths) {
    totalNameLengths += length; // sum all lengths
}
console.log("Total length of all names:", totalNameLengths);

// Step 7: function to concatenate a word n times
function concatenateWord(word, n) {
    return word.repeat(n); // use repeat method to concatenate
}
console.log("Concatenated word:", concatenateWord('Hello', 3));

// Step 8: function to return full name
function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`; // template literals for concatenation
}
console.log("Full name:", getFullName('John', 'Doe'));

// Step 9: function to check if sum of numbers is greater than 100
function isSumGreaterThan100(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0); // sum using reduce
    return sum > 100; // return true if sum is greater than 100
}
console.log("Is sum greater than 100?", isSumGreaterThan100([50, 60, 10]));

// Step 10: function to calculate average of an array
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0); // sum using reduce
    return sum / numbers.length; // return average
}
console.log("Average of numbers:", calculateAverage([10, 20, 30]));

// Step 11: function to compare averages of two arrays
function isFirstArrayAverageGreater(arr1, arr2) {
    const avg1 = calculateAverage(arr1);
    const avg2 = calculateAverage(arr2);
    return avg1 > avg2; // return true if first array's average is greater
}
console.log("Is first array's average greater than second?", isFirstArrayAverageGreater([10, 20], [5, 15]));

// Step 12: function to determine if a drink will be bought
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50; // return true if conditions are met
}
console.log("Will buy drink?", willBuyDrink(true, 15));

// Step 13: custom function to find the maximum number in an array
// this function takes an array of numbers and returns the maximum value.
function findMaxNumber(numbers) {
    return Math.max(...numbers); // use Math.max with spread operator
}
console.log("Maximum number in array:", findMaxNumber([1, 5, 3, 9, 2]));