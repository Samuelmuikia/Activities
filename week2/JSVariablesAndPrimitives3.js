// create a variable "timeOfDay" and assign it a string
let timeOfDay = "night";

// create a variable "greeting" that references a template literal

// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = `Good ${timeOfDay}!`;

// print "greeting"
console.log("This is the greeting ... ", greeting);

// create a new variable, but do not assign it a value
let newVariable;

// print the variable and its type
console.log("\nThis is the new variable ... ", newVariable);
console.log("This is the type of the new variable ... ", typeof newVariable);

// assign the variable a value that indicates the variable is purposely blank
newVariable = null;

// print the variable and its type again
console.log("\nThis is the new variable again ... ",newVariable);
console.log("This is the type of the new variable now ... ",typeof newVariable, "\n");

// try to print a variable that does not exist
// What should we expect to print in the CLI?

console.log("This undefined variable will cause an error ...", thisVariableDoesntExist);

// print "greeting" again
// Will this line run?
console.log("\nThis is the greeting ... ", greeting);cd ..
