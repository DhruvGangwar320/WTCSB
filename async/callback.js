// console.log("first")
// console.log("sec")
// /// ---> Async
// console.log("3rd")
// function aa()
// {
//     console.log("first")
// }
// setTimeout(aa,4000); // 1 s == 1000ms
// // wherever there is delay , asynchronous part will come

// setInterval
// (aa , 2000); // after every 2 s function will infinitely call it self
// let count =0;
// let id = setInterval(()=>{
//     console.log("arrow f");
//     if(count==5) clearInterval(id);
//     count++;
// },2000);
let count = 2;
function roll(num , next)
{
    setTimeout(() => {
    console.log("ROll no. is ",num);
    if(next) next();
} , 1000*(count++))
}
// callback hell
roll(1221 , () => {
    console.log("Wait it is getting downloaded . ");
    roll(1222,()=>{console.log("Wait it is getting downloaded . ");
    roll(1224,() => {console.log("Wait it is getting downloaded . ");
    roll(1225);})
    });
});
function showMenu(a,b)
{
    for(let i of a)
        console.log("UI Team : ", i);
    
    for(let i of b)
        console.log("Flutter Team : ", i);
    let c = [...a,...b]
    return c;
}
  // Arrays for teams
const uiTeam = ["HTML", "CSS", "JavaScript"];
const flutterTeam = ["Dart", "Flutter", "Firebase"];

// Function to display team based on type
const display = (teamType, option) => {
    switch (teamType) {
        case "UI":
            console.log("UI Team:", uiTeam);
            break;

        case "FLUTTER":
            console.log("Flutter Team:", flutterTeam);
            break;

        case "ALL":
            const mergedTeam = [...uiTeam, ...flutterTeam]; // spread operator
            console.log("All Teams:", mergedTeam);
            break;

        default:
            console.log("Invalid team type");
    }
};

// Function to show menu and teams
const showMenu = () => {
    console.log("UI Team Members:");
    console.log(uiTeam);

    console.log("\nFlutter Team Members:");
    console.log(flutterTeam);

    console.log("\nMerged Team Members:");
    const merged = [...uiTeam, ...flutterTeam];
    console.log(merged);
};

// Function calls
showMenu();
display("UI");
display("FLUTTER");
display("ALL");