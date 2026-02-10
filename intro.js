/*The let keyword was introduced in ES6 (2015)

Variables declared with let have Block Scope

Variables declared with let must be Declared before use

Variables declared with let cannot be Redeclared in the same scope
*/
/*
The const keyword was introduced in ES6 (2015)

Variables defined with const cannot be Redeclared

Variables defined with const cannot be Reassigned

Variables defined with const have Block Scope
*/
/*

*/ 

var a =23;
const d =34;
function greet(){
    if(true) // let is having block scope  and var is not block scope 
        {
        const d = 4;
        let a = 32;
        console.log(a);
        console.log(d);
    }

    console.log(a);
}
console.log(d);
greet();
console.log(a);
Document.console.write(a);