function printError(elementId, errMessage) {
  document.getElementById(elementId).innerHTML = errMessage;
}

function checkForm() {
  var userName = document.frm.userName.value;
  var emailAddress = document.frm.emailAddress.value;
  var password = document.frm.password.value;

  var userNameErr = (emailAddressErr = passwordErr = true);

  // check userName
  if (userName == "") {
    printError("userNameErr", "please enter the userName");
  } else {
    var regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.\_])[a-zA-Z0-9\.\_]{4,8}$/;
    if (regex.test(userName) === false) {
      printError("userNameErr", "please enter a valid userEname");
    } else {
      printError("userNameErr", "");
      userNameErr = false;
    }
  }

  // check emailAddress
  if (emailAddress == "") {
    printError("emailAddressErr", "please enter the emailAddress");
  } else {
    var regex = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (regex.test(emailAddress) === false) {
      printError("emailAddressErr", "please enter a valid emailAddress");
    } else {
      printError("emailAddressErr", "");
      emailAddressErr = false;
    }
  }

  // check password
  if (password == "") {
    printError("passwordErr", "please enter the password");
  } else {
    var regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\.\_\@\#])[a-zA-Z0-9\.\_\@\#]{4,8}$/;
    if (regex.test(password) === false) {
      printError("passwordErr", "please enter a valid password");
    } else {
      printError("passwordErr", "");
      passwordErr = false;
    }
  }

  if ((userNameErr || emailAddressErr || passwordErr) === true) {
    return false;
  } else {
    var dataPreview = `
        The entered details are \n 
        -------------------------------------- \n 
        userName: ${userName} \n 
        emailAddress: ${emailAddress} \n 
        password: ${password}
    `;
    alert(dataPreview);
  }
}
