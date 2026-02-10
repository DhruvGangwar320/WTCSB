/*
if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if the condition1 is false and condition2 is true
} else {
  // code to execute if the condition1 is false and condition2 is false
}
*/
let a = 2;
switch(a)
{
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    default :
        console.log("Stop!")
}
console.log("Switch over");

// Ternary Operator
// condition ? expression1 : expression2
let name = null;
let text = "missing";
let result = name ?? text;