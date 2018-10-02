// REVEALING MODULAR PATTERN
const ItemController = (() => {
  /*  
   * The convention for naming private variables is by using an _. ie.
   * _data = []
   */
  let _data = [];

  const add = (item) => {
    _data.push(item);
    // * returned [object Object]
    // * console.log(`${JSON.stringify(item)} added ...`);
    // returns the object {"id":1,"name":"Mshindi"} added ...
    console.log(`${JSON.stringify(item)} added ...`);
    // console.log(_data)
  }

  const get = (id) => {
    return _data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get,
    _data
  }

})();

// Calling the methods that have been made public through return

ItemController.add({
  id: 1,
  name: "Mshindi"
})
ItemController.add({
  id: 3,
  name: "Neema"
})
ItemController.add({
  id: 2,
  name: "Pendo"
})
// Returns Mshindi.
console.log(ItemController.get(1));
console.log(ItemController._data);


// Modular Pattern done the Revealing way.
const RevealingUIController = (() => {
  let _text = "Hello World";

  const changeText = () => {
    const element = document.querySelector('h1');
    element.textContent = _text;
  }

  return {
    changeText,
    _text
  }
})();

RevealingUIController.changeText();