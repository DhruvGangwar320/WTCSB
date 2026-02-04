// Key Syntax Rules
// The structure relies on the "fat arrow" (=>) symbol. 
// Zero Parameters: Requires empty parentheses: () => { ... }.
// One Parameter: Parentheses are optional: x => { ... }.
// Multiple Parameters: Parentheses are required: (x, y) => { ... }.
// Implicit Return: If the function is a one-liner, you can omit the curly braces and return keyword: const add = (a, b) => a + b;. 
// Lexical this Binding
// The most critical difference from regular functions is that arrow functions do not have their own this. 
// In a regular function, this is dynamic and depends on how the function is called.
// In an arrow function, this is lexically scoped, meaning it inherits this from the surrounding context where it was defined. This is particularly useful for callbacks like setTimeout or array methods (e.g., .map()), where you want to keep the context of the parent object. 
// When NOT to Use Arrow Functions
// Object Methods: Because they don't bind their own this, using an arrow function as an object method often results in this pointing to the global window instead of the object itself.
// Constructors: Arrow functions cannot be used with the new keyword and will throw a TypeError if you try.
// Arguments Object: They do not have their own arguments object; if you need to access arguments dynamically, use a regular function or Rest Parameters.
// Hoisting: Unlike function declarations, arrow functions are not hoisted. You must define them before they are called. 
const show = () => {console.log("This i sarrow function.")};
//arrow function is anonymous function
show(); // calling declared arrow function
(() => {console.log('this is arrow function 2 . ')})(); // IIFE
// this is current instance 
// arrow function do not have its current instance , it borrows this from the surroundings
function person()
{
    this.age =25;
    setTimeout(()=>{
        console.log(this.age);
    },1000);

}
new person(); // new keyword helps to call the function as a constructor
// without new keyword there is no constructor
// js is not object oeriented  , it si object based language
function defaultArg(a = 'Shanu',b = 'India',c ='Dhruv')
{
    console.log(a + b + c);
}
defaultArg('DhruvGangwar','Shnatanu');
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
const sho =  () => {console.log("This is arrow function")};
sho()
// this show variable  carrying arrow function does not have its this  keyword it borrow from somewhere else 
// it does not have Hoisting feature as the function is stored in a literal so it will be treated as literal
console.log("Try programiz.pro");
