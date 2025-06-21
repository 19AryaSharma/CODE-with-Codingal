function validate(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgbox = document.getElementById("message");

let message = "";

if (email === "") {
        message = "enter your email";
        msgbox.style.color = "red";
    } else if (pass === "") {
        message = "enter your password";
        msgbox.style.color = "red";
    } else if (age === "") {
        message = "enter your age";
        msgbox.style.color = "red";
    }else  {
        message = "login successful";
        msgbox.style.color = "green";
    }

    msgbox.innerHTML = message;

    
    
}