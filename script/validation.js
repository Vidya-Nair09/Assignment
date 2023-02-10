function formValidation() {
  var fname = document.registration.fname;
  var lname = document.registration.lname;
  var phno = document.registration.phonenumber;
  var uemail = document.registration.emailid;
  var passwd = document.registration.password;
  var cnfrmdpasswd = document.registration.ConfirmpassWord;

  if (allLetter(fname)) {
        if (allLetterLast(lname)) {
            if (ValidateEmail(uemail)) {
                if (allnumeric(phno)) {
                    if (validatePassword(passwd, cnfrmdpasswd)) {
                        // if(onclick()){

                        // }                       
                    }
                }
            }
        }
    }
  return false;
}

function allLetter(fname) {
  if (fname.value.length != 0) {
    var letters = /^[A-Za-z]+$/;
    if (fname.value.match(letters)) {
      return true;
    } else {
      alert("first name must have alphabet characters only");
      fname.focus();
      return false;
    }
  } else {
    alert("first name should not be empty");
    fname.focus();
    return false;
  }
}

function allLetterLast(lname) {
  if (lname.value.length != 0) {
    var letters = /^[A-Za-z]+$/;
    if (lname.value.match(letters)) {
      return true;
    } else {
      alert("last name must have alphabet characters only");
      lname.focus();
      return false;
    }
  } else {
    alert("last name should not be empty");
    lname.focus();
    return false;
  }
}

function allnumeric(phno) {
  if (phno.value.length != 0 && phno.value.length == 10) {
    var numbers = /^[0-9]+$/;
    if (phno.value.match(numbers)) {
      return true;
    } else {
      alert("phone number must be numeric characters only");
      phno.focus();
      return false;
    }
  } else {
    alert("phone number should not be empty/ more or less than 10 digits");
    phno.focus();
    return false;
  }
}

function ValidateEmail(uemail) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (uemail.value.match(mailformat)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    uemail.focus();
    return false;
  }
}

function validatePassword(passwd, cnfrmdpasswd) {
    if(passwd.value != cnfrmdpasswd.value){
        alert("Password mismatch");
        passwd.focus();
        return false;
    }
}




// function hrefFunction(){
//     windows.location.href ="http://127.0.0.1:5500/page.html";
// }
