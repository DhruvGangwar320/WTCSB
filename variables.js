/*A JavaScript variable can hold 8 types of data:

Type	Description
String	A text of characters enclosed in quotes
Number	A number representing a mathematical value
Bigint	A number representing a large integer
Boolean	A data type representing true or false
Object	A collection of key-value pairs of data
Undefined	A primitive variable with no assigned value
Null	A primitive value representing object absence
Symbol	A unique and primitive identifier */

// string
let str = 'This is single quote';
let str2 = "This is double quote";

//Number
let num = 23;
let num2 = 7.5;
console.log(num,num2)

//BigInt
let bigInt = 9007199254740991n; // Number.MAX_SAFE_INTEGER
let biggerInt = 9007199254740992n; // Beyond MAX_SAFE_INTEGER
console.log(bigInt, biggerInt);

//Boolean
let x = true;
let y = false;

//Object
const person = {'name':'Dhruv' , 'class': 'CS4B' ,'RollNo': 97};

// Date Object
const date = new Date("2026-02-04"); // YYYY-MM-DD
console.log(date);

//Undefined
let a;
let b;

//Null
let at = true;
let bt =false;

//Symbol
const xa = Symbol();
const yb = Symbol();
