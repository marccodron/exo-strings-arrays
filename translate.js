// Ecrivez d'une maniere différente ce programme:

let str =
  '\n\n\t\t    AlIcE eT bOb EsSaYeNt De CoMmUnIqUeR sEcReTeMeNt, MaIs EvE vEiLlE  \n\n '

  //str
//  .trim()
//  .toUpperCase()
//  .split(' ')
//  .forEach((elem) => console.log(`mot: ${elem}`))

let str2 = str.trim(" ");
let str3 = str2.toUpperCase()
let str4 = str3.split(' ')
//let str5 = str4.forEach((elem) => console.log(`mot: ${elem}`)
console.log(str4);