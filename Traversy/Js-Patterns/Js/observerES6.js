class Es6EventObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ES6 ${fn.name}`);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter(items => {
      if (items !== fn) {
        return items;
      }
    });
    console.clear();
    console.log(`You are now unsubscribed from ES6 ${fn.name}`);
  }

  fire() {
    this.observers.forEach(item => {
      item.call();
    });
  }

  static me() {
    return "I am a static static ecstatic method."
  }
}

const getCurrentSeconds = () => {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}


const
  sub_s = document.querySelector(".sub-s"),
  unsub_s = document.querySelector(".unsub-s"),
  fire = document.querySelector(".fire"),
  observe = new Es6EventObserver();

// The EventListeners and the Responses.
sub_s.addEventListener('click', () => {
  observe.subscribe(getCurrentSeconds);
})
unsub_s.addEventListener('click', () => {
  observe.unsubscribe(getCurrentSeconds);
})
fire.addEventListener('click', () => {
  observe.fire();
})

/*  
 * This works
 * console.log(Es6EventObserver.me());
 * This does not work.It returns TypeError: observe.me is not a
 * function
 * console.log(observe.me());
 */