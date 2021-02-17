// Replace the first instance of "How" with "Where"
const originalString = "How are you?"
const newString = originalString.replace("How", "Where");
console.log(newString);

// Search string for "javascript" and replace with "JavaScript"
const originalStr = "Javascript is a programming language. I'm learning javascript."
const newStr = originalStr.replace(/javascript/gi, "JavaScript");
console.log(newStr);

// Replace sun by moon
const String1 = `The Sun is a satellite of planet Earth`
const String2 = String1.replace(/sun/gi, 'Moon')
console.log(String2);

// Replace cat by dog
const StringA = 'My dog climbs trees'
const StringB = StringA.replace(/dog/gi, 'cat')
console.log(StringB)

// Replace last word by the word 'object'
const StringC = 'We learned the difference between the string primitive and String subject.'
const StringD = StringC.replace(/subject/gi, 'object')
console.log(StringD)