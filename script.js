import {
  navbar,
  footer,
  commentData,
  data,
  reviewCard,
  greenCard,
  contactFormRender,
} from "./components/components.js";

// -----------------------------------------------------------------------------navbar,footer ↓

var navbarArea = document.getElementById("navbar");
navbarArea.innerHTML = navbar();

var footerArea = document.getElementById("footer");
footerArea.innerHTML = footer();

// -----------------------------------------------------------------------------cards section ↓

var cardsection = document.getElementById("cardsection");

for (let i = 0; i < data.length; i++) {
  var card = document.createElement("div");
  card.setAttribute("id", "m-b-card");

  card.innerHTML = `
    <img src="${data[i].link}" alt="">
    <p>${data[i].name}</p>
    `;
  cardsection.append(card);
}

// -----------------------------------------------------------------------------green banner section ↓

var greenbanner1 = document.getElementById("greenbanner1");

for (let i = 0; i < 4; i++) {
  var greenBannerCard = document.createElement("div");
  greenBannerCard.setAttribute("id", "greenbanner1-card");
  greenBannerCard.innerHTML = greenCard(i);
  greenbanner1.append(greenBannerCard);
}

// -----------------------------------------------------------------------------story section ↓

var storiesCardSection = document.getElementById("stories-card-section");

let currentCard = null;

function renderCard(card, cardContent) {
  if (card === currentCard) {
    card.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
    cardContent.style.display = "none";
    card.style.width = "2%";

    setTimeout(() => {
      cardContent.style.display = "none";
    }, 300);

    currentCard = null;
  } else {
    if (currentCard) {
      card.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
      currentCard.querySelector(".card-content").style.display = "none";
      currentCard.style.width = "2%";
      currentCard.querySelector(".card-content").style.opacity = "0";
    }

    card.style.width = "18%";

    setTimeout(() => {
      cardContent.style.display = "block";
      cardContent.style.opacity = "1";
    }, 700);

    currentCard = card;
  }
}

for (let i = 0; i < 12; i++) {
  (function (index) {
    var card = document.createElement("div");
    card.setAttribute("id", `stories-card-${index}`);
    var cardContent = document.createElement("div");
    cardContent.setAttribute("id", `card-content-${index}`);
    card.append(cardContent);

    card.addEventListener("click", function () {
      renderCard(card, cardContent);
    });

    card.classList.add(`stories-card`);
    cardContent.classList.add(`card-content`);

    cardContent.innerHTML = reviewCard(i);
    storiesCardSection.append(card);

    if (index === 0) {
      card.style.width = "18%";
      cardContent.style.opacity = "1";
      currentCard = card;
    }
  })(i);
}

// -----------------------------------------------------------------------navbar search implimentation

var searchInputNav = document.getElementById("searchInputNav");
var searchNavButton = document.getElementById("searchNavButton");
searchNavButton.addEventListener("click", function () {
  var dataToBeSearched = searchInputNav.value;
  searchInputNav.value = "";
  fetch(
    `https://chiragajmeraapi.onrender.com/api/products?name=${dataToBeSearched}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("An error occurred:", error);
    });
});

// ------------------------------------------------------------------------contact us form

const contactForm = document.getElementById("contact-form");
contactForm.innerHTML = contactFormRender();
const submitButton = document.getElementById("contact-form-submitButton");
submitButton.addEventListener("click", function (event) {
  event.preventDefault();

  const chooseDepartment = document.getElementById("chooseDepartment").value;
  const chooseSpecialist = document.getElementById("ChooseSpecialist").value;
  const nameInput = document.getElementById("yourName");
  const emailInput = document.getElementById("yourEmail");
  const phoneInput = document
    .getElementById("contact-form-third-div")
    .querySelector('input[placeholder="Your Phone"]');
  const dateInput = document
    .getElementById("contact-form-third-div")
    .querySelector('input[placeholder="Select Date"]');
  const timeInput = document
    .getElementById("contact-form-third-div")
    .querySelector('input[placeholder="Select Time"]');

  if (
    !chooseDepartment ||
    !chooseSpecialist ||
    !nameInput.value ||
    !emailInput.value ||
    !phoneInput.value ||
    !dateInput.value ||
    !timeInput.value
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  const formData = {
    chooseDepartment,
    chooseSpecialist,
    name: nameInput.value,
    email: emailInput.value,
    phone: phoneInput.value,
    date: dateInput.value,
    time: timeInput.value,
  };

  const getName = (myString) => {
    const splitString = myString.split(" ");
    return splitString[0];
  };
  let storedData =
    JSON.parse(localStorage.getItem("contactUsFormDetails")) || [];

  storedData.push(formData);

  localStorage.setItem("contactUsFormDetails", JSON.stringify(storedData));
  alert("Form submitted successfully!");
  contactForm.innerHTML = `
  <p>Thanks for contacting us ${getName(
    nameInput.value
  )}.. Our team will reach you soon</p>
  `;
});

// -----------------------------------------------------------------------------logout button ↓

const logoutButton = document.getElementById("logout-button");

logoutButton.addEventListener("click", () => {
  localStorage.removeItem("current-login-username");
  window.location.href = "index.html";
});
 