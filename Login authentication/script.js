function signIn() {
    let email = document.getElementById("box1").value;
    let password = document.getElementById("box2").value;

    if (email === "" || password === "") {
        alert("Please fill email and password!");
    } else {
        window.location.href = "dashboard.html";
    }
}

function OUT(){
    window.location.href="index.html";
}

function resume(){
    window.open("Aditya_Kanifnath_Mulay_Resume.pdf", " ")
}

function git(){
    window.open("https://github.com/AdityaMulay727",  " ");
}

function linkedin(){
    window.open("https://www.linkedin.com/in/aditya-kanifnath-mulay-49558734a/", " ");
}

function register() {
    var name = document.getElementById("box1").value;
    var email = document.getElementById("box2").value;
    var password = document.getElementById("box3").value;
    var confirm = document.getElementById("box4").value;

    if (name === "") {
        alert("Please enter your full name.");
        return;
    }
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }
    if (password !== confirm) {
        alert("Passwords do not match.");
        return;
    }

    alert("Account created successfully! Welcome, " + name + "!");
    window.location.href = "index.html";
}