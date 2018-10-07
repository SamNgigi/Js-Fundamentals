import people from "./people";

export function init() {
  const chat_test = document.createElement("div");
  chat_test.innerHTML = `<p>There are ${people.length} people in the room</p>`
  document.body.appendChild(chat_test);
}