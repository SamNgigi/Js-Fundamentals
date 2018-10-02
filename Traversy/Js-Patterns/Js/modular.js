// Basic Modular Structure
// Defining an IIFE
// *(()=>{
//   * // Declaring private vars and function
//   * return {
//    * // Declare public vars and function
//   *}
// *})();
// * So whatever we want to be declared public we define in within the return statement.


// An example STANDARD MODULE PATTERN
const UIController = (() => {
  let text = "Hello World";

  const changeText = () => {
    const element = document.querySelector('h1');
    element.textContent = text;
  }

  return {
    callChangeText: () => {
      changeText();
      console.log(text);
    }
  }
})();

UIController.callChangeText();