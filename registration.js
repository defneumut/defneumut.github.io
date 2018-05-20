

function check(){


	var textReg = /^[A-Za-z]+$/;
	var firstname = document.getElementById('firstname').value;
    var lastname = document.getElementById('lastname').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if(firstname.trim() == "" )
        alert("Please fill the First name fields.");
     else if(lastname.trim() == "")
         alert("Please fill the Last name field.");
    else if(dob.trim() == "")
        alert("Please choose your birth of date.");
    else if(email.trim() == "")
        alert("Please fill the e-mail field.");
    else if(password.trim() == "")
        alert("Please fill the password field.");
    else if(!firstname.match(textReg))
        alert("Please enter only letters to the name fields.");
    else if(!lastname.match(textReg))
        alert("Please enter only letters to the surname field.");
    else if(!checkEmail(email))
        alert("Please enter a valid e-mail address.");
    else if(!checkPassword(password))
        alert("Password is invalid. Your password should contain between 6 and 15 characters including at least one uppercase [A-Z] letter, one numeric digit [0-9], one special character.");
    else return true;
    return false;
}

function checkEmail(email) {
                 if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
                     return false;
                return true;
            }
            
function checkPassword(password) {
        if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.])[A-Za-z\d$@$!%*?&.]/.test(password))
        return true;
        return false;
            }