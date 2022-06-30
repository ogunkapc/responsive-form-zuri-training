// validating the form input

let fName = document.forms["form"]["firstname"];
let lName = document.forms["form"]["lastname"];
let email = document.forms["form"]["email"];
let password = document.forms["form"]["password"];

let fName_error = document.getElementById("fName_error");
let lName_error = document.getElementById("lName_error");
let email_error = document.getElementById("email_error");
let password_error = document.getElementById("password_error");

let error_icon1 = document.getElementById("error_icon1");
let error_icon2 = document.getElementById("error_icon2");
let error_icon3 = document.getElementById("error_icon3");
let error_icon4 = document.getElementById("error_icon4");

function validate() {
  if (fName.value.length < 3) {
    fName.style.border = "1px solid hsl(0, 100%, 74%)";
    fName_error.style.display = "block";
    error_icon1.style.display = "block";
    fName.focus();
    return false;
  }
  if (lName.value.length < 3) {
    lName.style.border = "1px solid hsl(0, 100%, 74%)";
    lName_error.style.display = "block";
    error_icon2.style.display = "inline";
    lName.focus();
    return false;
  }
  if (email.value.length < 6) {
    email.style.border = "1px solid hsl(0, 100%, 74%)";
    email_error.style.display = "block";
    error_icon3.style.display = "inline";
    email.focus();
    return false;
  }
  if (password.value.length < 4) {
    password.style.border = "1px solid hsl(0, 100%, 74%)";
    password_error.style.display = "block";
    error_icon4.style.display = "inline";
    password.focus();
    return false;
  }
}

fName.addEventListener("input", fName_verify);
lName.addEventListener("input", lName_verify);
email.addEventListener("input", email_verify);
password.addEventListener("input", password_verify);

function fName_verify() {
  if (fName.value.length >= 3) {
    fName.style.border = "1px solid hsl(246, 25%, 77%)";
    fName_error.style.display = "none";
    error_icon1.style.display = "none";
    return true;
  }
}
function lName_verify() {
  if (lName.value.length >= 3) {
    lName.style.border = "1px solid hsl(246, 25%, 77%)";
    lName_error.style.display = "none";
    error_icon2.style.display = "none";
    return true;
  }
}
function email_verify() {
  if (email.value.length >= 6) {
    email.style.border = "1px solid hsl(246, 25%, 77%)";
    email_error.style.display = "none";
    error_icon3.style.display = "none";
    return true;
  }
}
function password_verify() {
  if (password.value.length >= 4) {
    password.style.border = "1px solid hsl(246, 25%, 77%)";
    password_error.style.display = "none";
    error_icon4.style.display = "none";
    return true;
  }
}
