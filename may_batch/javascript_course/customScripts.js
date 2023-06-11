function printError(elementId, errorMessage) {
  document.getElementById(elementId).innerHTML = errorMessage;
}

function checkForm() {
  var username = document.frm.username.value;
  var password = document.frm.password.value;

  var usernameErr = (passwordErr = true);

  if (username == "") {
    printError("usernameErr", "please enter the username!!");
  } else {
    var usernameRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{4,8}$/;
    if (usernameRegex.test(username) === false) {
      printError("usernameErr", "entered username is not a valid value!!");
    } else {
      printError("usernameErr", "");
      usernameErr = false;
    }
  }

  if (password == "") {
    printError("passwordErr", "please enter the password!!");
  } else {
    var passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.\_])[a-zA-Z0-9\.\_]{4,8}$/;
    if (passwordRegex.test(password) === false) {
      printError("passwordErr", "entered password is not a valid value!!");
    } else {
      printError("passwordErr", "");
      passwordErr = false;
    }
  }

  if (usernameErr || passwordErr === true) {
    return false;
  } else {
    var showData = `
        UserDetails \n 
        -------------------------- \n 
        Username: ${username} \n 
        Password: ${password} \n 
    `;
    alert(showData);
  }
}
