javascript
function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var message = document.getElementById("message");
    if (username === "" || email === "" || password === "") {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
        return false;
    }
    // Additional validation logic can be added here
    message.textContent = "Registration successful!";
    message.style.color = "green";
    return true;
}