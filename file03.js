// Strings are immutable.

// trim()

let firstName = "      harshit      ";
console.log(firstName.length);

let newName = firstName.trim();
console.log(newName);
console.log(newName.length);

// toUpperCase()

const upperCase = newName.toUpperCase();
console.log(upperCase);

// toLowerCase()

const lowerCase = upperCase.toLowerCase();
console.log(lowerCase);

// slice

// start index -- ind index

let newString = lowerCase.slice(1);
console.log(newString);