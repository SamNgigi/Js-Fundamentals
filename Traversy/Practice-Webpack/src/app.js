import {
  groupBy
} from "lodash-es";
import people from "./scripts/people";

import './styles/app.scss';
import './styles/sub_app.scss';
import './scripts/happy';

if (module.hot) {
  module.hot.accept();
}


// * We create a div element and call it root.
const root = document.createElement("div");

// * We add a paragraph tag and its content to root
root.innerHTML = `<h1>Hello World of Webpack!</h1>`;

// * Using lodash to group people object by managers
const managerGroups = groupBy(people, "manager");
// * Creating div and populating it with json data from managerGroups
const peeps = document.createElement("div");
peeps.innerHTML = `<pre>${JSON.stringify(managerGroups, null, 2)}</pre>`

// * We finally add it to webpage by using appendChild. 
document.body.appendChild(root)
document.body.appendChild(peeps)


// * Code-Splitting and Lazy-Loading
const btn = document.createElement("button");
btn.textContent = "Open chat";

document.body.appendChild(btn);

btn.onclick = () => {
  import( /* webpackChunkName: "chat" */ "./scripts/chat")
  .then(chat => chat.init())
}


/*  
 * Note that while using development mode the size of our bundle increased to
 * 1.41 mb from around 2.92 Kib. This is because of the lodash-es
 * dependency.
 * 
 * When we use production mode the file size is 17.3 Kib. This is
 * because webpack removes all unused lodash modules in a process
 * called  tree-shaking
 */