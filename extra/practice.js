/*let js = 'awesome';
console.log(js);
console.log(17-31+20*2);
let firstName ='Abu shaid ';
let lastName = 'Sabbir';
console.log(firstName + ' ' + lastName + 'is a student of computer techlnology.'
+ ' '+ lastName + ' is my nickname');
 let x = 'abushaid';
 console.log(typeof(x));
 let country = 'Bangladesh';
 let continent = 'asia';
 let population = 'twenty core';
 console.log(country + ' ' + continent +' ' + population);
 let isIsland = true;
 let language;

 console.log(typeof(isIsland));
 console.log(typeof(population));
 console.log(typeof(country));
 console.log(typeof(language));
 */
/*
let age = 19;
console.log(age);


const birthYear = 2002;
// birthYear = 2001;
console.log(birthYear);

let myName;
// const yourName;
var mySubject = 'CSE';
console.log(mySubject);
myName = 'Abu Shaid';
console.log(myName);
// mathmatical operator 

const now = 2021;
const abushaidAge = now - 2002;
 const royAge = now - 2005;

 console.log(abushaidAge , royAge);
 console.log(abushaidAge * 2 , abushaidAge /10 , 2 ** 4);

 const firstName = 'NBICT';
 const lastName = 'LAB';
 console.log(firstName + ' ' + lastName);
  

 // assignment operator

 let x = 7+5;
 x += 2;
 x -= 3;
 x++;
 x--;
 console.log(x);

 //comparison operator 

 console.log(abushaidAge > royAge);
 console.log(abushaidAge >= 20);

 const country = 'Bangladesh';
 const continent = 'Asia';
 let population = 180;
 console.log(country , continent , population);
  
 const isIsland = 'true';
 const language = 'Bangla';

 console.log(isIsland , language);
 console.log(typeof(country));
 console.log(typeof(isIsland));
 console.log(typeof(population));
 console.log(typeof(language));

 const firstHalf = population / 2;
 const secondHalf = population / 2;
  
 console.log(firstHalf , secondHalf);
 console.log(++population);

 let finpopulation = 6;
 console.log(population > finpopulation);

 let averagepopulation = 33;
 console.log(averagepopulation > population);

 let description = country + ' ' + 
 'is in ' + ' ' + continent + '  ' +' and it is ' + population + ' ' + 'people speak' + ' ' + language + '.';
 console.log(description);
 */
/*
 const now = 2037;
 const ageJonus = now - 1992;
 const ageSara = now - 1998;

 const average = (ageJonus + ageSara) / 2;

 console.log(ageJonus , ageSara , average);

console.log(now - 1992 > now - 1998);

const x = y = 25 - 10 + 5;
console.log(x);

const massMark = 78;
const massJohn = 92;
const heightMark = 1.69;
const heightJohn = 1.95;

console.log(massMark , massJohn , heightJohn , heightMark);

const Markbmi = massMark / (heightMark * heightMark);
const Johnbmi = massJohn / (heightJohn * heightJohn);

let markHigherBMI = Markbmi > Johnbmi;
console.log(Markbmi , Johnbmi , markHigherBMI);

*/

/*
const massMark = 95;
const massJohn = 85;
const heightMark = 1.88;
const heightJohn = 1.76;


console.log(massMark , massJohn , heightMark , heightJohn);

const MarkBMI = massMark / ( heightMark * heightMark);
const JohnBMI = massJohn / (heightJohn * heightJohn);


let markHigherBMI = MarkBMI > JohnBMI;


console.log(MarkBMI , JohnBMI , markHigherBMI);

*/
/*

const country = 'Bangladesh';
const continent = 'Asia';
const population =  180;

console.log(country , continent , population);

const isIsland = 'true';
const language = 'Bangla';

console.log(`typeof Country is ${typeof(country)}.`);

console.log(`typeof Continent is ${typeof(continent)}.`);

console.log(`typeof Population is ${typeof(population)}.`);

console.log(`typeof isIsland is ${typeof(isIsland)}.`);

console.log(`typeof Language is ${typeof(language)}.`);


const firstHalf = population / 2;
const secondHalf = population - firstHalf;

console.log(`Each half will contain ${secondHalf} million people.`);
 

const newpopulation = population + 1;

console.log(`If we add 1 to ${population} then we get ${newpopulation}.`);

let finpopulation = 6;
let condition = population > finpopulation;

if(condition){
    console.log(`Our population is greater than finland's population.`);
}
 else{
    console.log(`Our population is less than finland's population.`);
}

let averagepopulation = 33;
let condition1 = population > averagepopulation;

if(condition){
    console.log(`Our Population is greater than average population.`);
}else{
    console.log(`Our Population is less than average population.`);
}

console.log(`${country} is in ${continent}, and its ${population} million people speak ${language}.`);

let condition2 = population > averagepopulation;

if(condition2){
    console.log(`${country}es population is above average.`);
}else{
    console.log(`${country}es population is below average.`);
}

*/



let massMark = 95;
let massJohn = 85;
let heightMark = 1.88;
let heightJohn = 1.76;
 
let MarkBMI = massMark / ( heightMark * heightMark);
let JohnBMI = massJohn / (heightJohn * heightJohn);

console.log( MarkBMI , JohnBMI);

let markHigherBMI = MarkBMI > JohnBMI ;

console.log(markHigherBMI);

if(markHigherBMI){
    console.log(`Mark's BMI is higher than john's!`);
}else{
    console.log(`John's BMI is higher than Mark's!` );
}


console.log(`Mark's BMI ${MarkBMI} is lower than John's ${JohnBMI}`);
