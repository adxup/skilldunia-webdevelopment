function printError(elementId, errorMessage) {
  document.getElementById(elementId).innerHTML = errorMessage;
}

function checkForm() {
  var userName = document.frm.userName.value;
  var emailAddress = document.frm.emailAddress.value;
  var mobileNumber = document.frm.mobileNumber.value;
  var password = document.frm.password.value;
  var gender = document.frm.gender.value;

  var checkboxes = document.getElementsByName("skills[]");
  var skills = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      skills.push(checkboxes[i].value);
    }
  }

  var country = document.frm.country.value;
  var description = document.frm.description.value;

  var userNameErr =
    (emailAddressErr =
    mobileNumberErr =
    passwordErr =
    genderErr =
    countryErr =
      true);

  if (userName == "") {
    printError("userNameErr", "please enter userName");
  } else {
    var regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_.])[a-zA-Z0-9._]{4,8}$/;
    if (regex.test(userName) === false) {
      printError("userNameErr", "invalid input, please try");
    } else {
      printError("userNameErr", "");
      userNameErr = false;
    }
  }

  if (emailAddress == "") {
    printError("emailAddressErr", "please enter emailAddress");
  } else {
    var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (regex.test(emailAddress) === false) {
      printError("emailAddressErr", "invalid input, please try");
    } else {
      printError("emailAddressErr", "");
      emailAddressErr = false;
    }
  }

  if (mobileNumber == "") {
    printError("mobileNumberErr", "please enter mobileNumber");
  } else {
    var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (regex.test(mobileNumber) === false) {
      printError("mobileNumberErr", "invalid input, please try");
    } else {
      printError("mobileNumberErr", "");
      mobileNumberErr = false;
    }
  }

  if (password == "") {
    printError("passwordErr", "please enter password");
  } else {
    var regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[_@#$.])[a-zA-Z0-9.@#$_]{4,8}$/;
    if (regex.test(password) === false) {
      printError("passwordErr", "invalid input, please try");
    } else {
      printError("passwordErr", "");
      passwordErr = false;
    }
  }

  if (gender == "") {
    printError("genderErr", "please select gender");
  } else {
    printError("genderErr", "");
    genderErr = false;
  }

  if (country == "") {
    printError("countryErr", "please select country");
  } else {
    printError("countryErr", "");
    countryErr = false;
  }

  if (
    userNameErr ||
    emailAddressErr ||
    mobileNumberErr ||
    passwordErr ||
    genderErr ||
    countryErr === true
  ) {
    return false;
  } else {
    var dataPreview = `
        Details you have entered \n
        userName: ${userName} \n 
        emailAddress: ${emailAddress} \n 
        mobileNumber: ${mobileNumber} \n 
        password: ${password} \n 
        gender: ${gender} \n 
        country: ${country} \n 
        description: ${description} \n 
    `;

    if (skills.length) {
      dataPreview += `
            skills: ${skills.join(", ")} \n 
        `;
    }
    alert(dataPreview);
  }
}
