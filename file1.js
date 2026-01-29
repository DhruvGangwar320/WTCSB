var user = "dhruv";
function hello()
{
    console.log(`Hello user ${user}`)
}
(() => {console.log("This is IIFEA")})();