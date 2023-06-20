function checkFormValidate() {
    var inputUserName = document.getElementById("userName").value;
    var inputEmail = document.getElementById("e-mail").value;
    var inputPassword = document.getElementById("password").value;
    var inputRePassword = document.getElementById("re-password").value;
    var check = true;
    if(inputUserName === '' || inputUserName.length <3 || inputUserName.length >30 ){
        document.getElementById('userName').style.border = '1px solid red'
        document.getElementById('userNameError').innerHTML = 'Username is invalid'
        document.getElementById('userNameError').style.color = 'red'
        check = false;
    }
    if (inputEmail === '' || inputEmail.length <5 ) {
        document.getElementById('e-mail').style.border = '1px solid red'
        document.getElementById('e-mailError').innerHTML = 'Email is invalid'
        document.getElementById('e-mailError').style.color = 'red'
        check = false;
    }
    if (inputPassword === '' || inputPassword.length <8 || inputPassword.length >30 ) {
        document.getElementById('password').style.border = '1px solid red'
        document.getElementById('passwordError').innerHTML = 'Password is not match with rule'
        document.getElementById('passwordError').style.color = 'red'
        check = false;
    }
    if (inputRePassword === '' ||inputRePassword !== inputPassword  || inputRePassword.length <8 || inputRePassword.length >30 ) {
        document.getElementById('re-password').style.border = '1px solid red'
        document.getElementById('re-passwordError').innerHTML = 'Re-password is incorrect'
        document.getElementById('re-passwordError').style.color = 'red'
        check = false;
    }
    return check;
}