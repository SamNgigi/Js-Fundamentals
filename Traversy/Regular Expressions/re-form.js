const
  name_input = document.getElementById("name"),
  email_input = document.getElementById("email"),
  phone_input = document.getElementById("phone"),
  zip_input = document.getElementById("zip")


/*  
 * With fat arrow notation we have to define the functions first before
 * calling because of hoisting.
 */
validateName = () => {
  console.log(name_input.value);
}
validateEmail = () => {
  console.log(email_input.value);
}
validatePhone = () => {
  console.log(phone_input.value);
}
validateZip = () => {
  console.log(zip_input.value);
}

name_input.addEventListener('blur', validateName);
email_input.addEventListener('blur', validateEmail);
phone_input.addEventListener('blur', validatePhone);
zip_input.addEventListener('blur', validateZip);