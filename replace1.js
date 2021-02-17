// Replace the first instance of "How" with "Where"
const String1 = "Bonjour, je suis Sofiane."
const String2 = String1.replace("Sofiane", "Marc");
console.log(String2);

// Replace the first instance of "How" with "Where"
const StringA = "Bonjour, mon nom est Sofiane."
const StringB = StringA.replace(/Sofiane/gi, 'Marc');
console.log(StringB);