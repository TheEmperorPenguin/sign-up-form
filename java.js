var password = document.getElementById("psswd")
  , confirm_password = document.getElementById("psswd-confirm");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    confirm_password.style.border = "solid red 1px";
    password.style.border = "solid red 1px";
  } else {
    confirm_password.setCustomValidity('');
    confirm_password.style.border = "none";
    password.style.border = "none";
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;