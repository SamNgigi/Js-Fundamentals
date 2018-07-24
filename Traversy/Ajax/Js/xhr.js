const oneCustomer_btn = document.getElementById("oneCustomer");
const manyCustomers_btn = document.getElementById("manyCustomers");
const customer = document.getElementById("customerOutput");
const customers = document.getElementById("customersOutput");

oneCustomer_btn.addEventListener("click", loadCustomer);

function loadCustomer(event) {
  event.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "customer.json", true);

  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);

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