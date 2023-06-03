import { navbar, footer } from "./components/components.js";

var nav = document.getElementById("navbar");
nav.innerHTML = navbar();

var foot = document.getElementById("footer");
foot.innerHTML = footer();

const login = document.getElementById("login");
const signup = document.getElementById("signup");
const registerHereBtn = document.getElementById("register-here");
const backToLogin = document.getElementById("backtologin");

registerHereBtn.addEventListener("click", function (event) {
  event.preventDefault();

  login.style.display = "none";

  signup.style.display = "flex";
});

backToLogin.addEventListener("click", function (event) {
  event.preventDefault();

  login.style.display = "flex";

  signup.style.display = "none";
});


// --------------------------------------------------------------->

const signupButton = document.getElementById("signup-button");
signupButton.addEventListener("click", () => {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const cpassword = document.getElementById("signup-cpassword").value;

  if (!name || !email || !password || !cpassword) {
    alert("Please fill all the details.");
    return;
  }

  if (password !== cpassword) {
    alert("Passwords do not match.");
    return;
  }

  const user = {
    name: name,
    email: email,
    password: password,
  };

  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  existingUsers.push(user);

  localStorage.setItem("users", JSON.stringify(existingUsers));

  alert("Signup successful!");

  document.getElementById("signup-name").style.display="none"
  document.getElementById("signup-email").style.display="none"
  document.getElementById("signup-password").style.display="none"
  document.getElementById("signup-cpassword").style.display="none"
  document.getElementById("signup-button").style.display="none"
});


// -------------------------------------------------------------------->

const loginButton = document.getElementById("login-button");
loginButton.addEventListener("click", () => {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const currentusername=document.getElementById("login-name").value
  const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

  const user = existingUsers.find(
    (user) => user.email === email && user.password === password
  );

  if (!user) {
    alert("Invalid email or password. Please try again.");
    return;
  }


  alert("Login successful!");
  localStorage.setItem("current-login-username", currentusername);
  window.location.href = "index.html";
});
