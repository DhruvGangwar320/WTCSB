// HOW TO TAKE JAVA INPUT FIRST FROM BROWSER AND FROM USER
const name = prompt("Enter you name : ");
const age = prompt("Enter you age : ");
const info = `My name is ${name} and age is  ${age}`
console.log(info);
document.write(info); // it '
// Great question. While these all sound like "alphabet soup," they actually represent three very different stages of how JavaScript interacts with your code and the browser.

// Think of it this way: **BOM** is the house you're in, **DOM** is the furniture inside, and **AST** is the blueprint showing how the furniture was built.

// ---

// ## 1. BOM (Browser Object Model)

// The **BOM** is everything the browser provides *outside* of the actual webpage content. It allows JavaScript to "talk" to the browser itself. It doesn't have a strict official standard, but all browsers support it.

// * **Key Object:** `window`
// * **What it controls:** Popups, the back button, the URL in the address bar, and your screen resolution.
// * **Examples:**
// * `window.location.href` (The current URL)
// * `window.history.back()` (Going back a page)
// * `window.alert("Hello!")` (That annoying popup)



// ## 2. DOM (Document Object Model)

// The **DOM** is a representation of your HTML document. When the browser loads your HTML, it turns it into a "tree" of objects that JavaScript can manipulate.

// * **Key Object:** `document` (which is actually a property of `window`)
// * **What it controls:** HTML elements, CSS styles, and text content.
// * **Examples:**
// * `document.getElementById("btn")`
// * `document.body.style.backgroundColor = "red"`
// * Adding a new paragraph to a page.



// ## 3. AST (Abstract Syntax Tree)

// The **AST** is much more "low-level." It has nothing to do with the browser or the UI. Instead, it's how the **JavaScript Engine** (like V8 in Chrome) understands your code.

// Before your code runs, the engine "parses" your text and turns it into a tree structure so the computer knows what you're trying to do.

// * **Used by:** Compilers (Babel), Linters (ESLint), and Minifiers.
// * **What it represents:** The logic and structure of your source code.
// * **Example:**
// If you write `const x = 5 + 2;`, the AST breaks it down into:
// 1. **VariableDeclaration**: `const`
// 2. **Identifier**: `x`
// 3. **Assignment**: `=`
// 4. **BinaryExpression**: `5`, `+`, `2`



// ---

// ### Comparison at a Glance

// | Feature | BOM | DOM | AST |
// | --- | --- | --- | --- |
// | **Full Name** | Browser Object Model | Document Object Model | Abstract Syntax Tree |
// | **Focus** | The Browser (tabs, history) | The Content (HTML/CSS) | The Code Logic (syntax) |
// | **Level** | High-level (Interface) | Mid-level (Webpage) | Low-level (Compiler) |
// | **Analogy** | The Window frame | The View inside the window | The Physics of the glass |

// ---

// ### Why this matters to you right now

// * You use **BOM/DOM** every day to build features (making things move, respond to clicks).
// * You rarely "use" **AST** directly, but you use tools that rely on it. For example, when **Prettier** fixes your code formatting, it's reading your **AST** to understand your intent before rewriting the text.

// Would you like to see a quick code example where we use the **BOM** to redirect a user and the **DOM** to change a heading?
