function checkFormValidate(){
    var inputEmail = document.getElementById("e-mail").value;
    var inputPassword = document.getElementById("password").value;
    var check = true;
    if(inputEmail === '' || inputEmail.length <5 || inputEmail.length >50 ){
        document.getElementById('e-mail').style.border ='1px solid red';
       document.getElementById('e-mailError').innerHTML = 'Email is invalid';
       document.getElementById('e-mailError').style.color = 'red';
       check = false;
    }
    if(inputPassword === ''|| inputPassword.length <8 || inputPassword.length >30){
        document.getElementById('password').style.border ='1px solid red';
        document.getElementById('passwordError').innerHTML = 'Password is incorrect';
        document.getElementById('passwordError').style.color = 'red';
        check = false;
    }
    return check;
}
window.onload = function() {
    var rememberMeCheckbox = document.getElementById("rememberMe");
    var storedUsername = localStorage.getItem("email");
    var storedPassword = localStorage.getItem("password");
    var storedRememberMe = localStorage.getItem("rememberMe");

    if (storedRememberMe && storedRememberMe === "true") {
        rememberMeCheckbox.checked = true;
        if (storedUsername) {
            document.getElementById("e-mail").value = storedUsername;
            document.getElementById("password").value = storedPassword;
        }
    }
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    var rememberMeCheckbox = document.getElementById("rememberMe");
    var emailInput = document.getElementById("e-mail");
    var passwordInput = document.getElementById("password");

    if (rememberMeCheckbox.checked) {
        localStorage.setItem("email", emailInput.value);
        localStorage.setItem("password", passwordInput.value);
        localStorage.setItem("rememberMe", true);
    } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
    }
});
