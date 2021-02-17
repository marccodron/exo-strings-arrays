// Removes white space from both ends of a string, but not anywhere in between
const tooMuchWhitespace = "     How are you?     ";
const trimmed = tooMuchWhitespace.trim();
console.log(trimmed);

// Removes excess white space
const longestString = "     The trim method is quite simple.      ";
const shortestString = longestString.trim();
console.log(shortestString);