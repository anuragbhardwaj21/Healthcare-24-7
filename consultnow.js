import { navbar, footer } from "./components/components.js";

var consultNavbar = document.getElementById("navbar");
consultNavbar.innerHTML = navbar();

var consultFooter = document.getElementById("footer");
consultFooter.innerHTML = footer();

// ------------------------------------------>

var consultUsForm = document.getElementById("consultUsForm");
const submitButton = document.getElementById("consultUsSubmitButton");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("consultName");
  const emailInput = document.getElementById("consultEmail");
  const phoneInput = document.getElementById("consultPhone");
  const messageInput = document.getElementById("consultMessage");

  if (
    !nameInput.value ||
    !emailInput.value ||
    !phoneInput.value ||
    !messageInput.value
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const formData = {
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    message: messageInput.value,
  };

  const getName = (myString) => {
    const splitString = myString.split(" ");
    return splitString[0];
  };
  let storedData =
    JSON.parse(localStorage.getItem("consultUsFormDetails")) || [];

  storedData.push(formData);
  localStorage.setItem("consultUsFormDetails", JSON.stringify(storedData));
  alert("Form submitted successfully!");
  consultUsForm.innerHTML = `
  <p>Thanks for contacting us ${getName(nameInput.value)}.. Our team will reach you soon for consultation</p>
  `;
});
