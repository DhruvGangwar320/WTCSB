// function show()
// {
//     console.log("Showing classes of CSB");
// }
// show();
(function show()
{
    console.log("Showing classes of CSB");
})();
//IIFE Immediately invoked function
// Immediately Invoked Function Expressions (IIFE) in JavaScript
// (function (){ 
// // Function Logic Here. 
// })();
// account no. == const1

let c = 10;
(() => {let c = 20 ; console.log(c)})();//redlacaration is done
c = 23;
console.log(c);
// var are meant for gloabl scope or function scope , can be redeclared and reassigned .
// let are meant for block scope , can't be redeclared but can be reassigned .
