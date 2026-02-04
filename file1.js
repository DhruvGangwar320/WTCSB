var users = "dhruv";
function hello()
{
    console.log(`Hello user ${users}`)
}
(() => {console.log("This is IIFEA")})();

const aa = () => ({user : "name"});
const user={
    name : 'dg' , age:22 ,
    welcome : function()
    {
        console.log(`hello ${this.name}`);
        console.log(this);
    }
}
// in lexical analysis , dynamically calling objectw will not make it work 
user.welcome();
console.log('Here we have this (defined) since we have\'nt stored the value of welcome in another variable  :  ' );
user.name= 'Dhruv Gangwar';
user.welcome();
const refer = user.welcome
console.log('This is  : ');
console.log(refer)
const refer2 = user.welcome();
console.log(refer2);
// do practice of arrow function
var user = "dhruv";
function hello()
{
    console.log(`Hello user ${user}`)
}
(() => {console.log("This is IIFEA")})();
