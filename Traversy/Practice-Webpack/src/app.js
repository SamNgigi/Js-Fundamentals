// * We create a div element and call it root.
const root = document.createElement("div");

// * We add a paragraph tag and its content to root
root.innerHTML = `<h1>Hello World of Webpack!</h1>`

// * We finally add it to webpage by using appendChild 
document.body.appendChild(root)