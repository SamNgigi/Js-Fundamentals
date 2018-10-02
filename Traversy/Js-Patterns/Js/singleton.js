// SINGLETON PATTERN

const Singleton = (() => {
  let instance;

  const createInstance = () => {
    const object = {
      name: "Jasiri"
    };
    return object
  }

  return {
    getInstance: () => {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }

})();

const firstInstance = Singleton.getInstance();
const secondInstance = Singleton.getInstance();

console.log(firstInstance);

// * The Singleton pattern allows us to create only one instance
console.log(firstInstance === secondInstance);