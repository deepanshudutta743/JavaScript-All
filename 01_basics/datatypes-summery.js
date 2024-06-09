// Primitive

// 7 types : String,Number, Boolean, null , Symbol , BigInt

const score=100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id=Symbol('123');
const anotherId = Symbol('123');

console.log(id);
console.log(anotherId);

console.log(id===anotherId);
const bigNumber= 34667890123456n;


// Reference (Non Primitive)
// Array,  Objects , functions
// javascript is dynamically typed

const heros = ["shaktiman", "naagraj", "doga"];
let myObj=
{
    name:"Deepanshu",
    age: 24
}
const myFunction=function(){
  console.log("Hello world");
}

console.log(typeof myFunction);
console.log(typeof heros);
/*
Type and typeof return value
number - number
string -  String
boolean - boolean
symbol - symbol
bigint - bigint
undefined - undefined
null - object
array - object
object - object
function -object function
*/