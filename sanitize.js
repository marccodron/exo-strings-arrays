// Afficher cette phrase en réglant les problèmes d'espaces 
// et passages à la ligne inutiles, et aussi de casse (Mettez tout en minuscule ou majuscule).

let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '
let trimmed = str.trim();
console.log(trimmed);
console.log(trimmed.toLowerCase());