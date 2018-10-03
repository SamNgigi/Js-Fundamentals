const
  heading = document.querySelector("#heading"),
  content = document.querySelector("#content"),
  home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");



const PageState = function () {
  let currentState = new HomeState(this);

  this.index = function () {
    this.change(new HomeState);
  }

  this.change = function (state) {
    currentState = state;
  }
}

// Home State
const HomeState = function (page) {
  heading.textContent = null;
  content.innerHTML = `
    <div class="jumbotron">
      <h1 class="display-3">Jumbo heading</h1>
      <p class="lead">Jumbo helper text</p>
      <hr class="my-2">
      <p>More info</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
      </p>
    </div>
  `;
};

// About State
const AboutState = function (page) {
  heading.textContent = "About Us";
  content.innerHTML = `
    <p>This is the about page.</p>
  `;
};

// Contact State
const ContactState = function (page) {
  heading.textContent = "Contact Us";
  content.innerHTML = `
    <div class="container mb-4">
      <form>
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" placeholder="Name" aria-describedby="helpId">
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="text" class="form-control" placeholder="Email" aria-describedby="helpId">
          <small id="helpId" class="text-muted">Enter a valid email address</small>
        </div>
        <button type="button" class="btn btn-outline-primary">Submit</button>
      </form>
    </div>
  `
}


// Instantiate PageState
const page = new PageState();

// Initialize the first state
page.index()

// Renders home page on home link click
home.addEventListener("click", (event) => {
  event.preventDefault();
  // Renders home page content
  page.change(new HomeState)
})
// Renders about page on about link click
about.addEventListener("click", (event) => {
  event.preventDefault();
  // Renders about page content
  page.change(new AboutState)
})
// Renders contact page on contact link click
contact.addEventListener("click", (event) => {
  event.preventDefault();
  // Renders contact page content
  page.change(new ContactState)
})