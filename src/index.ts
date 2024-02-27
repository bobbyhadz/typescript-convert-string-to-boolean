export {};

// EXAMPLE 1 - Convert a String to a Boolean in TypeScript

// ✅ if the string is equal to "true" or "false"
const str1 = 'true';
const bool1 = str1 === 'true'; // 👉️ true

// ✅ if the string might be Uppercase or Title Case
const str2 = 'False';
const bool2 = str2.toLowerCase() === 'true'; // 👉️ false

// ---------------------------------------------------

// // EXAMPLE 2 - With reusable function

// function strToBool(str: string) {
//   return str.toLowerCase() === 'true';
// }

// console.log(strToBool('true')); // 👉️ true
// console.log(strToBool('True')); // 👉️ true
// console.log(strToBool('false')); // 👉️ false
// console.log(strToBool('abc')); // 👉️ false

// ---------------------------------------------------

// // EXAMPLE 3 - Convert a String to a Boolean using regex

// function strToBool(str: string) {
//   return /true/.test(str);
// }

// console.log(strToBool('true')); // 👉️ true
// console.log(strToBool('True')); // 👉️ false
// console.log(strToBool('false')); // 👉️ false
// console.log(strToBool('abc')); // 👉️ false
// console.log(strToBool('is true')); // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 4 - Convert a String to a Boolean using the Boolean() constructor

// const bool1 = Boolean('test'); // 👉️ true
// const bool2 = Boolean(''); // 👉️ false
// const bool3 = Boolean('false'); // 👉️ true
// const bool4 = Boolean('true'); // 👉️ true
// const bool5 = Boolean(' '); // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 5 - Convert a String to a Boolean using double NOT (!!)

// const bool1 = !!'test'; // 👉️ true
// const bool2 = !!''; // 👉️ false
// const bool3 = !!'false'; // 👉️ true
// const bool4 = !!'true'; // 👉️ true
// const bool5 = !!' '; // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 6 - Convert a Boolean to a String in TypeScript

// // 👇️ const bool: true
// const bool = true;

// // 👇️ const str: string
// const str = String(bool);

// console.log(str); // 👉️ "true"
// console.log(typeof str); // 👉️ "string"

// ---------------------------------------------------

// // EXAMPLE 7 - Convert a Boolean to a String using toString()

// const bool = true;

// console.log(bool.toString()); // 👉️ "true"
// console.log(typeof bool.toString()); // 👉️ "string"

// ---------------------------------------------------

// // EXAMPLE 8 - Convert a Boolean to a String using a template literal

// const bool = true;

// console.log(`${bool}`); // 👉️ "true"

// console.log(typeof `${bool}`); // 👉️ "string"

// ---------------------------------------------------

// // EXAMPLE 9 - Convert a boolean to a string using the ternary operator

// const bool = true;

// const str2 = bool ? 'true' : 'false';

// console.log(str2); // 👉️ "true"
// console.log(typeof str2); // 👉️ "string"
