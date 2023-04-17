function printError(elementId, errMessage) {
  document.getElementById(elementId).innerHTML = errMessage;
}

function formValidation() {
  let userName = document.frm.userName.value;
  let emailAddress = document.frm.emailAddress.value;
  let mobileNumber = document.frm.mobileNumber.value;

  let userNameErr = (emailAddressErr = mobileNumberErr = true);

  // check userName
  if (userName == "") {
    printError("userNameErr", "please enter any userName");
  } else {
    let userNameRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{5,9}$/;
    if (userNameRegExp.test(userName) === false) {
      printError(
        "userNameErr",
        "its an invalid value, please try to enter correct userName"
      );
    } else {
      printError("userNameErr", "");
      userNameErr = false;
    }
  }

  // check emailAddress
  if (emailAddress == "") {
    printError("emailAddressErr", "please enter any emailAddress");
  } else {
    let emailAddressRegExp =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailAddressRegExp.test(emailAddress) === false) {
      printError(
        "emailAddressErr",
        "its an invalid value, please try to enter correct emailAddress"
      );
    } else {
      printError("emailAddressErr", "");
      emailAddressErr = false;
    }
  }

  // check mobileNumber
  if (mobileNumber == "") {
    printError("mobileNumberErr", "please enter any mobileNumber");
  } else {
    let mobileNumberRegExp =
      /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (mobileNumberRegExp.test(mobileNumber) === false) {
      printError(
        "mobileNumberErr",
        "its an invalid value, please try to enter correct mobileNumber"
      );
    } else {
      printError("mobileNumberErr", "");
      mobileNumberErr = false;
    }
  }

  if ((userNameErr || emailAddressErr || mobileNumberErr) === true) {
    return false;
  } else {
    let dataPreview = `
        The Entered Details are: \n 
        userName: ${userName} \n 
        emailAddress : ${emailAddress} \n 
        mobileNumber: ${mobileNumber} \n 
    `;

    alert(dataPreview);
  }
}
