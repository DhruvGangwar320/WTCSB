function hello()
{
    console.log("Hello");
}

// function showHello() {
//   document.getElementById("demo").innerHTML = hello();
// }
// showHello();
x = findMax(98,89,99,56,76);
function findMax()
{
    let max = -Infinity;
    for(let i =0 ; i < arguments.length ;i++ )
    {
        if(arguments[i] > max)
        {
            max = arguments[i];
        }
    }
    return max;
}
console.log(x)