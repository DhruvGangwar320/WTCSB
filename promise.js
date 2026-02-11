// Promises are the "I owe you" of the JavaScript world. They represent a value that you don’t have yet but expect to get eventually (like data from an API or a file loading).

// Here is a quick breakdown to get us started.
const p1 = new Promise((resolve,reject) => {
    const success = true;
    if(success)
        resolve("Done")
    else 
        reject("Error is there")
});
// Once a promise is created, it will be in one of three states: Pending, Fulfilled, or Rejected. We use .then() and .catch() to handle the results.

// The .then() Method
// This runs when the promise is resolved. It receives the data passed into resolve().

// The .catch() Method
// This runs when the promise is rejected. It’s your safety net for error handling.

// const p = new Promise((resolve, reject) => {
//   reject("Big Block error");
//   resolve("sab theek hai");
// });
// p.then((value) => {
//   console.log(value);
// }).catch((error) => {
//   console.log("error hai", error);
// });

// This code is a perfect demonstration of the Asynchronous Event Loop in JavaScript.
// Even though the code looks like it should run top-to-bottom, JavaScript prioritizes
// "immediate" tasks over "waiting" tasks.
console.log("1) Start");

const p = new Promise((resolve, reject) => {
  console.log("2) Promise created ");
  setTimeout(() => {
    resolve("3) Work finished");
//     resolve() does not print anything to the console. Its only job is to:

// Change the status of the Promise from "pending" to "fulfilled."

// Ship the data out of the internal Promise code and "inject" it into the .then() function.
  }, 1000);
});
console.log("4) After creating promise");
// 1. The "Handshake"
// Think of resolve as a delivery truck and .then() as the receiving dock.

// JavaScript
// const p = new Promise((resolve) => { // 'resolve' is a function provided by JS
//     setTimeout(() => {
//         resolve("C"); // <--- 1. You put the string "C" into the truck
//     }, 0); 
// });

// p.then((res) => {    // <--- 2. 'res' is just a variable name for whatever is in the truck
//     console.log(res); // <--- 3. It prints "C"
// });
// 2. How res gets its value
// When you write (res) => ... inside the .then(), you are defining a function that waits.

// The variable res is like a placeholder (a parameter).

// It stays empty until the code inside the Promise calls resolve("C").

// The moment resolve("C") is executed, JavaScript takes that "C", jumps over to the .then(), and plugs it into the res variable.

// 3. You can name it anything
// res isn't a special keyword. It’s just a name you chose. This would work exactly the same way:

// JavaScript
// p.then((pizza) => {
//     console.log(pizza); // Still prints "C"
// });
p.then((value) => {
  console.log(value); // runs AFTER resolve(...)
  console.log("5) then() runs only when promise is resolved");
});

console.log("6) End (JS keeps running; then will run later)");
function roll(num, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num); // pass value to next step
    }, delay);
  });
}
roll(12212, 1000)
  .then(() => {
    console.log("wait its getting downloaded");
    return roll(12312, 2000);
  })
  .then(() => {
    console.log("wait its getting downloaded");
    return roll(12412, 3000);
  })
  .then(() => {
    console.log("wait its almost over");
    return roll(12512, 4000);
  })
  .catch((err) => {
    console.log("Error:", err);
  })
  .finally(() => {
    console.log("Done with viva)");
  });


roll(12212, 1000)
  .then(() => (console.log("downloading..."), roll(12312, 2000)))
  .then(() => (console.log("downloading..."), roll(12412, 3000)))
  .then(() => (console.log("almost over..."), roll(12512, 4000)))
  .catch(console.log)
  .finally(() => console.log("Done with viva)"));
  function roll(num, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Roll. no. is " + num);
      resolve(num);
    }, delay);
  });
}

async function run() {
  try {
    await roll(12212, 1000);
    console.log("wait its getting downloaded");

    await roll(12312, 2000);
    console.log("wait its getting downloaded");

    await roll(12412, 3000);
    console.log("wait its almost over");

    await roll(12512, 4000);
    console.log("Finished download flow");
  } catch (err) {
    console.log("Error:", err);
  } finally {
    console.log("Done with viva");
  }
}

run();
const fetchUser = (id) => {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject("Error: No ID provided!");
        }
        resolve({ id: id, name: "Alex" });
    });
};
// you wrote .catch(err) and then a console.log on a new line. In JavaScript, .catch() is a method that needs its own callback function, just like .then().

// The Correct Syntax
// HOW DO YOU FIX THIS?
fetchUser().then((user) => {
        console.log(user.name);
    })
    .catch((err)=>{
    console.log("error hai");}) 