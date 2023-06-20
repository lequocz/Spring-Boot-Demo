document.getElementById("viewContentLink").addEventListener("click", function() {
    showLoading();
    setTimeout(function() {
        loadContent("/viewContent", "yourDiv");
    }, 5000);
});

document.getElementById("editProfileLink").addEventListener("click", function() {
    showLoading();
    setTimeout(function() {
        loadContent("/editProfile", "yourDiv");
    }, 5000);
});

document.getElementById("formContentLink").addEventListener("click", function() {
    showLoading();
    setTimeout(function() {
        loadContent("/addContent", "yourDiv");
    }, 5000);
});

function showLoading() {
    document.getElementById("yourDiv").innerHTML = "";
    document.getElementById("loading").classList.remove("d-none");
}

function hideLoading() {
    document.getElementById("loading").classList.add("d-none");
}

function loadContent(url, targetId) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById(targetId).innerHTML = this.responseText;
            hideLoading();
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}



function resetAddContent() {
    document.getElementById('title').style.border = '1px solid #D9D9D9';
    document.getElementById('titleError').innerHTML = '';
    document.getElementById('brief').style.border = '1px solid #D9D9D9';
    document.getElementById('briefError').innerHTML = '';
    document.getElementById('contentip').style.border = '1px solid #D9D9D9';
    document.getElementById('contentError').innerHTML = '';
}
function checkFormAddContent() {
    var title = document.getElementById("title").value;
    var brief = document.getElementById("brief").value;
    var content = document.getElementById("contentip").value;
    var check = true;
    if (title === ''|| title.length <10 || title.length >200) {
        document.getElementById('title').style.border = '1px solid red';
        document.getElementById('titleError').innerHTML = 'Title is invalid';
        document.getElementById('titleError').style.color = 'red';
        check = false;
    }
    if (brief === ''|| brief.length < 30 || brief.length > 150) {
        document.getElementById('brief').style.border = '1px solid red';
        document.getElementById('briefError').innerHTML = 'Brief is required';
        document.getElementById('briefError').style.color = 'red';
        check = false;
    }
    if (content === ''|| content.length <50 || content.length >1000) {
        document.getElementById('contentip').style.border = '1px solid red';
        document.getElementById('contentError').innerHTML = 'Content is required';
        document.getElementById('contentError').style.color = 'red';
        check = false;
    }
    return check;
}

function resetEditProfile() {
    document.getElementById('firstname').style.border = '1px solid #D9D9D9';
    document.getElementById('firstnameError').innerHTML = '';
    document.getElementById('lastname').style.border = '1px solid #D9D9D9';
    document.getElementById('lastnameError').innerHTML = '';
    document.getElementById('phone').style.border = '1px solid #D9D9D9';
    document.getElementById('phoneError').innerHTML = '';
}
function checkFormEditProfile() {
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;
    var phone = document.getElementById("phone").value;
    var phone = document.getElementById("phone").value;
    var check = true;
    if (firstName === ''|| firstName.length <3 || firstName.length >30 ) {
        document.getElementById('firstname').style.border = '1px solid red';
        document.getElementById('firstnameError').innerHTML = 'First Name is invalid';
        document.getElementById('firstnameError').style.color = 'red';
        check = false;
    }
    if (lastName === ''|| lastName.length <3 || lastName.length >30 ) {
        document.getElementById('lastname').style.border = '1px solid red';
        document.getElementById('lastnameError').innerHTML = 'Last Name is required';
        document.getElementById('lastnameError').style.color = 'red';
        check = false;
    }
    if (phone === ''|| phone.length <9 || phone.length >13 ) {
        document.getElementById('phone').style.border = '1px solid red';
        document.getElementById('phoneError').innerHTML = 'phone is invalid';
        document.getElementById('phoneError').style.color = 'red';
        check = false;
    }
    return check;
}


