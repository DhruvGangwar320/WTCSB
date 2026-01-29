var x = 10;
// var allows redeclaration
// var global scope
// in let reassignment is possible and it is block specific
function hello()
{
    if(true)
    {
        var x = -10;
        console.log(x);
    }
    console.log(x);
}
hello();
console.log(x);
console.log('first');
// document.write('From JS ')
// tutorial point -- do course
// console.log(a);
// console.log(5**2);
// where is console of js
// browser has the console 
// js scops  and window scope
// var defines the property in window object
//let  defines the property in javascript
// Key Differences 
// Scope:
// var: Function-scoped. A variable declared with var inside a function is available everywhere within that function. If declared outside, it becomes global.
// let: Block-scoped. It is only accessible within the immediate curly braces {} (like in an if statement or a for loop) where it was defined.
// Redeclaration:
// var: Allows you to redeclare the same variable name within the same scope without error.
// let: Does not allow redeclaration in the same scope; doing so throws a SyntaxError.
// Hoisting:
// var: Declarations are hoisted to the top of their scope and initialized as undefined. You can reference them before they are declared in the code.
// let: Declarations are hoisted but not initialized. Accessing them before declaration results in a ReferenceError because they stay in a "Temporal Dead Zone". 