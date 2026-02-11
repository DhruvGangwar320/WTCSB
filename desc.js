const student = 
{
    name :"Abhishek",
    age : 33,
    address : {
        city : 'Gzb',
        state : 'UP'
    }
}
function display({name , age})
{
    console.log(`My name is ${name} and my age is ${age} .` )
}
display(student);
// const {name : stuname = 'Amit', age ,address : {city}} = student;//stuname ='Amit'
// const name = student.name;
// console.log(stuname , age , city);
// let numbers = [10,20,30];
// let  [a,b,c] = numbers;
// console.log(a);
// console.log(b);
// console.log(c);

let data =[1,32];
let [a = 10 ,b =30] =data; // a = 10 and b = 30 a,ṁre default values
console.log(a,b);
let p = 2;
let q ;
[p =90, q ] = [q ,p ];
console.log(p , q);

let color = ['red','green' ,'blue'];
let [,c] = color;
console.log(c);