function add(...number){
    let total = 0;
    for(let i in number)
        {
            total= total + number[i];
        }
        return total;
    }
console.log(add(1,2,3,4,5,6,7,8,9,10))
    
let first = [10,20,30,40]
let sec = [1,2,3,4,5,6,]
let comb = [...first,...sec]
console.log("first :" ,first,"second :" ,sec,"combination  :" ,comb)

// Even function
const even = (val) => val%2==0;
console.log(even(24));

// reverse string
function reverseString(val)
{
    let re = "";
    for(let i = val.length - 1 ;i >= 0;i-- )
    {
        re+=val[i];
    }
    return re;
}

console.log(reverseString("Dhruv Gangwar"));

// Promise
const p = new Promise((resolve,reject)=>{
    const success =true;
    if(success)
        resolve("This is resolved.");
    else 
        reject("There is handmade error.")
}, delay = 4000)

