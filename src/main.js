/*document.getElementById("account-creation-form").addEventListener("submit", function(e) {

    e.preventDefault();

    const userData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value
};

localStorage.setItem("userData", JSON.stringify(userData));

alert("Account created successfully!");
window.location.href = "login.html";

window.location.href = "login.html";
});
*/

document.getElementById("login").onClick = function() {
    window.location.href = "login.html";
};