// ES6 Classes

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  // Adding book
  addBookList(book) {

  }

  // Clear input
  clearField() {

  }

  // Deleting book
  deleteBook(target) {

  }

  // Showing alerts.
  showAlert(message, className) {
    // Create alert message div
    const alert_div = document.createElement("div");
    alert_div.className = `alert ${className}`;
    alert_div.appendChild(document.createTextNode(message));

    // Get parent
    const container = document.querySelector(".container");
    const form = document.querySelector("#bookForm");

    // Insert alert before form
    container.insertBefore(alert_div, form);

    // Display alert for 3 seconds
    setTimeout(function () {
      document.querySelector(".alert").remove()
    }, 3000);
  }
}

// UI SvG icons
const deleteSVG = `<svg class="delete" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z"/></svg>`;

const trashSVG = `<svg class="delete" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path class="delete" d="M17.573 1.848c.083.699-.476 1.152-1.182 1.152h-8.774c-.704 0-1.266-.452-1.182-1.156-1.329.281-4.435 1.159-4.435 2.516 0 .303.103.7.235 1.361 3.175 2.953 15.758 3.088 19.476.244.159-.824.289-1.278.289-1.611 0-1.333-3.091-2.223-4.427-2.506zm3.113 6.897c-.868 4.587-2.184 10.54-2.709 13.287-1.079 1.312-3.545 1.968-6.013 1.968s-4.935-.656-6.013-1.968c-.529-2.884-1.834-8.868-2.684-13.414 3.154 1.274 7.398 1.401 8.895 1.401 1.771 0 5.561-.151 8.524-1.274zm-13.069-6.763c.922 0 1.669-1.08 1.669-1.982h5.437c0 .902.747 1.982 1.668 1.982h-8.774z"/></svg>`;


// Add Book Event Listener
document.getElementById('bookForm').addEventListener(
  'submit',
  function (event) {
    event.preventDefault();
    // console.log("Form working");

    const title = document.getElementById("title").value,
      author = document.getElementById("author").value,
      isbn = document.getElementById("isbn").value;

    // console.log(title, author, isbn);

    const book = new Book(title, author, isbn);
    // console.log(book);

    const ui = new UI();

    // Validate forms.
    if (title === "" || author === '' || isbn === '') {
      // console.log("Empty");
      ui.showAlert("Please fill in all empty fields", "error");
    }

    // console.log(ui);

  })