const nav_button = document.querySelector('button[aria-expanded]')

function toggleNav({
  target
}) {
  /* 
    Dont know exactly what this button is doing but it has something
    to do with converting the expanded string value to either true
    or false.
  */
  const expanded = target.getAttribute('aria-expanded') === 'true' || false;
  nav_button.setAttribute('aria-expanded', !expanded);
  console.log(expanded);
}

nav_button.addEventListener('click', toggleNav)