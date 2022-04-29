// create a variable called "name" that references a string
let name = "Ryan";

// create a variable called "favoriteSong" that references a string
let favoriteSong = "Everlong";

// create a variable called "wage" that references a number
let wage = 10;

// create a variable called "age" that references a number
let age = 31;

// create a variable called "onlyChild" that references a boolean
let onlyChild = false;

// create a variable called "satisfied" that references a boolean
let satisfied = false;

// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "Taco";

// print the data type of "favoriteThing"
console.log("favoriteThing is ... ", favoriteThing);
console.log("\nThe typeof favoriteThing is ... ", typeof favoriteThing);

// ! You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Paralyzed"; // string

// ! You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 2; // number
console.log("New typeof favoriteThing is ... ", typeof favoriteThing);

// ! Happy Birthday!
// Reassign "age" to a new value
age = 32;

// ! You got a big raise at work.
// Reassign "wage" to a new value
wage = 12;

// ! Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;

// use "console.log()" and "+" to print a sentence that includes two variables
console.log("\n\nI am " + age + " and I make " + wage + " dollars per hour");
