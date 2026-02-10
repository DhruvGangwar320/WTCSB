function declaration(a,b)
{
    return a+b;
}
const myFunc = function name(x,y) {return x+y;};
//anonymous funciton
const mynF = function (x,y) {return x*y};

//arrow
const des = (x) => x**3;

const desf = new Function(34);

//
// Object Method
const obj = {
  myFunction(x, y) {
    return x * y;
  },
};

const df =  {
    'name': 'dhruv',
    'class': 'csb',
    func : () => {console.log(`this is ${this.name}`);}
}
df.func()

const df1 =  {
    'name': 'dhruv',
    'class': 'csb',
    func : function name(){console.log(`this is ${this.name}`);}
}
df1.func()
const df2 = ()=>{console.log(this);};
console.log(typeof(df2()));
df2();
function call()
{
    return this; // here this si global object
}
console.log(call());
"use strict";
console.log(call());
const f = {
    function : function person()
{
    return this.firstname + ' ' + this,lastname;
}}
const person1 = {
    'firstname' : 'dhruv',
    'lastname' : 'gangwar'
}

const person2 = {
    'firstname' : 'Aalu',
    'lastname' : 'badam'
} 
console.log(f.function(pearson1));