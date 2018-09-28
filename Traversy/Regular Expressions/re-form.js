const
  name_input = document.getElementById("name"),
  email_input = document.getElementById("email"),
  phone_input = document.getElementById("phone"),
  zip_input = document.getElementById("zip"),
  form = document.querySelector("form")



/*  
 * With fat arrow notation we have to define the functions first before
 * calling because of hoisting.
 */
// * Validate Name
validateName = () => {
  // console.log(name_input.value);
  const user_name = name_input.value;
  // * Name regex pattern
  // * Any alphabetical character 2 - 10 characters long.
  const re = /^[a-z]{2,10}/i;

  if (!re.test(user_name)) {
    name_input.classList.add("is-invalid");
  } else {
    name_input.classList.remove("is-invalid");
  }

}

// * Validate Email
validateEmail = () => {
  // console.log(email_input.value);
  const user_mail = email_input.value

  /*  
   *Email Regex
   */
  const re = /^([a-z0-9\.\-_]+)@([a-z0-9_\-\.]+)\.([a-z]){2,5}$/i;

  if (!re.test(user_mail)) {
    email_input.classList.add("is-invalid");
  } else {
    email_input.classList.remove("is-invalid");
  }


}

// * Validate Phone
validatePhone = () => {
  console.log(phone_input.value);
  const user_phone = phone_input.value;

  /*  
   * Phone regex pattern
   * Must start with either + 254 or 0 followed by 7 then 8 other
   * numbers, with optional spaces.
   */

  const re = /^(\+254|0)([- ])?7[0-9]{2}([- ])?[0-9]{3}([- ])?[0-9]{3}$/

  if (!re.test(user_phone)) {
    phone_input.classList.add("is-invalid");
  } else {
    phone_input.classList.remove("is-invalid");
  }
}

// * Validate Zip
validateZip = () => {
  console.log(zip_input.value);
  const user_zip = zip_input.value

  /*  
   * Zip regex
   * Must have first 5 char between 0-9 with a - and addition digits
   * optional
   */
  const re = /^[0-9]{5}(-[0-9]{5})?$/

  if (!re.test(user_zip)) {
    zip_input.classList.add("is-invalid");
  } else {
    zip_input.classList.remove("is-invalid");
  }

}

submitForm = (event) => {
  event.preventDefault()
}

name_input.addEventListener('blur', validateName);
email_input.addEventListener('blur', validateEmail);
phone_input.addEventListener('blur', validatePhone);
zip_input.addEventListener('blur', validateZip);
form.addEventListener("submit", submitForm)