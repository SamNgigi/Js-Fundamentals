const oneCustomer_btn = document.getElementById("oneCustomer");
const manyCustomers_btn = document.getElementById("manyCustomers");
const customer = document.getElementById("customerOutput");
const customers = document.getElementById("customersOutput");

// Load single customer.
oneCustomer_btn.addEventListener("click", loadCustomer);

function loadCustomer(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      /* 
        Because the response comes as a JSON STRING object, to get
        the individual object properties we have to convert to json
        object.
      */
      const customer_obj = JSON.parse(this.responseText)

      const output = `
        <ul>
          <li>ID: ${customer_obj.id}</li>
          <li>Name: ${customer_obj.name}</li>
          <li>Company: ${customer_obj.company}</li>
          <li>Phone: ${customer_obj.number}</li>
        </ul> 
      `
      customer.innerHTML = output;
    }
  }
  xhr.send();
}

// Load multiple customers.
manyCustomers_btn.addEventListener("click", loadCustomers);

function loadCustomers(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();
  e

  /* 
     True is a boolean representing that we want this to be performed
     asynchronously.
  */
  xhr.open("GET", "customers.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      // console.log(this.responseText);

      /* 
        Because the response comes as a JSON STRING object, to get
        the individual object properties we have to convert to json
        object.
      */
      const customer_objs = JSON.parse(this.responseText);

      /* 
         Setting output to an empty string deal with the undefined
         that is at the top of our dynamic list .
      */
      let output = "";

      customer_objs.forEach(function (c) {
        output += `
        <ul>
          <li>ID: ${c.id}</li>
          <li>Name: ${c.name}</li>
          <li>Company: ${c.company}</li>
          <li>Phone: ${c.number}</li>
        </ul> 
      `
      })

      customers.innerHTML = output;
    }
  }
  xhr.send();
}