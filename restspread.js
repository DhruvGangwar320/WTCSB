//Spread unpacks the array in individual values 
// function add(numbers)
// {
//     let total = 0;
//     for(let i = 0 ; i < numbers.length ; i++ ){
//         total = total +  numbers[i];
//     }
//     return total;
// }
// console.log(add([1,2,3,34,32]));
function add1(...numbers)
{
    let total = 0;
    for(let i in numbers ){
        total = total +  numbers[i];
    }
    return total;
}
// console.log(add1(1,2,3,4,5,6));
// function add2(...numbers)
// {
//     let total = 0;
//     for(let i of numbers ){
//         total = total +  i;
//     }
//     return total;
// }
// console.log(add2(1,2,3,4,5,6));

let a = [1 , 2, 3, 4, 34, 35];
let [first , sec , last] =a;
console.log(first,sec,last) // output : 1 2 3
let [first1 ,sec1, ...last1] = a;
console.log(first1,sec1,last1) // o/p : 1 2 [ 3, 4, 34, 35 ]
console.log(first1 , sec1 ,...last1) ; // o/p : 1 2 3 4 34 35
let a_ = [1,2,3,4]
let b_ = [5,6,7,8]
let c = [...a_ , ...b_]
console.log(c)
// how spread and rest works
// Write an arrow function to check even numbers 
const isEven = (x) =>  x%2==0;
console.log(isEven(2)) // o/p :  true

// reverse the string
const reverseString = (str) => {
    let str1 = "";
    for(let i = str.length-1 ; i>=0 ;i--)
        str1 += str[i];
    return str1;
};
console.log(reverseString("happy and sad"));

// pass or fail
const averageMarks = (...ele) => (add1(...ele) / ele.length >= 40 ) ? "Pass" : "Fail";
console.log(averageMarks(40,41,42,41));
console.log(averageMarks(40,1,2,1));