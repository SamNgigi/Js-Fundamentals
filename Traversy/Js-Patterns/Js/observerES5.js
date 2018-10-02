function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },

  unsubscribe: function (fn) {
    this.observers = this.observers.filter(item => {
      if (item !== fn) {
        return item;
      }
    });
    console.clear();
    console.log(`You are now unsubscribed from ${fn.name}`);
  },

  fire: function () {
    this.observers.forEach(item => {
      item.call();

    });
  }
}

const observe = new EventObserver();

// Click handler represented by fn
const getCurrentMillisecs = function () {
  console.log(`
  Current Milliseconds: ${new Date().getMilliseconds()
  }`);
};

// Listening for events
const
  sub_ms = document.querySelector('.sub-ms'),
  unsub_ms = document.querySelector('.unsub-ms'),
  fire = document.querySelector('.fire');

sub_ms.addEventListener("click", function () {
  observe.subscribe(getCurrentMillisecs);
})

unsub_ms.addEventListener("click", function () {
  observe.unsubscribe(getCurrentMillisecs);
})

fire.addEventListener('click', function () {
  observe.fire();
})