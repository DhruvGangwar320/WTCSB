/**
 * Creates a readline interface for reading input from standard input (stdin)
 * and writing output to standard output (stdout).
 * 
 * The readline module provides an interface for reading data from a readable stream
 * (in this case, process.stdin) one line at a time. This allows interactive command-line
 * input from the user.
 * 
 * @type {readline.Interface}
 * @property {stream.Readable} input - The input stream (process.stdin) where user input comes from
 * @property {stream.Writable} output - The output stream (process.stdout) where prompts and output are written
 * 
 * @description
 * This interface can be used to prompt users for input and read their responses line by line.
 * Common methods include:
 * - r1.question(prompt, callback) - Displays a prompt and waits for user input
 * - r1.close() - Closes the interface and ends the input stream
 */
// Import the readline module
// const readline = require("readline");

// const r1 = require("readline").createInterface({
//    input : process.stdin ,
//     output : process.stdout
// })
// r1.question("Enter something : ",
//     (answer) => {
//         console.log("You entered :" , answer);
//         r1.close();
//     } // we need to close the instance also
// )
// r1.close(); --> we will use this inside the function to ignore asynchonus programming
const calculator = ({
    add: (a,b) => a+b,
    sub: (a,b) => a-b,
    div: (a,b) => (b!=0)? a/b: "Error",
    mul: (a,b) => a*b 
});
console.log(calculator.add(2,3));
console.log(calculator.sub(2,3));
console.log(calculator.mul(3,5));
console.log(calculator.div(2,3));
let sc = (a,b,d) => {switch(d)
{
    case 'add':
        return a+b;
    case 'sub':
        return a-b;
    case 'mul':
        return a*b;
    case 'div':
        return (b==0)?"Error": a/b;
    default:
        return "No calculation exists."
}}
console.log(sc(2,30,'add'));
function Eval(a,b,d)
{
    switch(d)
{
    case 'add':
        return a+b;
    case 'sub':
        return a-b;
    case 'mul':
        return a*b;
    case 'div':
        return (b==0)?"Error": a/b;
    default:
        return "No calculation exists."
}
}
let de = Eval(23,32,'mul');
console.log(de);