import { navbar, footer } from "./components/components.js";

var productPageNavbar = document.getElementById("navbar");
productPageNavbar.innerHTML = navbar();

var productPageFooter = document.getElementById("footer");
productPageFooter.innerHTML = footer();

// ------------------------------------------------------->

// Fetch data from a source
// fetch("https://chiragapi.onrender.com/arr")
//   .then((response) => response.json()) // Assuming the response is in JSON format
//   .then((data) => {
//     // Save data to local storage
//     localStorage.setItem("myData", JSON.stringify(data));
//     // console.log("Data saved to local storage:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });

// Retrieve data from local storage
const storedData = localStorage.getItem("myData");

// ------------------------------------------------------->

const parsedData = JSON.parse(storedData);
console.log(parsedData);

var rightProductsArea = document.getElementById("right-products");

function renderProducts(parsedData) {
  rightProductsArea.innerHTML = "";
  for (let i = 0; i < parsedData.length; i++) {
    const productCard = document.createElement("div");
    productCard.setAttribute("id", "product-card");
    productCard.innerHTML = `
          <div id="product-card-imageDiv">
              <img src="${parsedData[i].img}" alt="">
          </div>
          <div id="product-card-belowDiv">
              <p>${parsedData[i].name}</p>
              <p><span>₹ ${parsedData[i].mrp + 13.9}</span> ₹ ${
      parsedData[i].mrp
    }</p>
              <div id="product-card-buttons">
                  <button id="add-to-cart">Add to cart</button>
                  <button id="wishlistButton${i}" class="wishlistButton"><img id="wislist-heartImage" src="./images/heart.png" alt=""></w=button>
              </div>  
          </div>
      `;
    rightProductsArea.append(productCard);
  }
}
renderProducts(parsedData);

// ------------------------------------------------------->

var selectElement = document.getElementById("sort-by-price");

selectElement.addEventListener("change", function () {
  var selectedValue = selectElement.value;
  if (selectedValue === "-mrp") {
    var newData = parsedData.sort(function (a, b) {
      return b.mrp - a.mrp;
    });
  } else if (selectedValue === "mrp") {
    var newData = parsedData.sort(function (a, b) {
      return a.mrp - b.mrp;
    });
  } else if (selectedValue === "default") {
    var newData = parsedData;
  }

  renderProducts(newData);
});

// ------------------------------------------------------->

var selectElement2 = document.getElementById("sort-by-disease");

selectElement2.addEventListener("change", function () {
  var selectedValue = selectElement2.value;
  var filteredData = [];
  if (selectedValue === "default") {
    filteredData = parsedData;
  } else {
    filteredData = parsedData.filter(function (obj) {
      return obj.usesof === selectedValue;
    });
  }

  renderProducts(filteredData);
});

// ------------------------------------------------------->

var selectElement3 = document.getElementById("sort-by-brand");

selectElement3.addEventListener("change", function () {
  var selectedValue = selectElement3.value;
  var filteredData = [];
  if (selectedValue === "default") {
    filteredData = parsedData;
  } else {
    filteredData = parsedData.filter(function (obj) {
      return obj.brand === selectedValue;
    });
  }

  renderProducts(filteredData);
});

//--------------------------------------------------------->

const selectElement4 = document.getElementById("sort-by-name");

selectElement4.addEventListener("change", function () {
  const selectedOption = selectElement4.value;
  var filteredData = [];
  if (selectedOption === "name") {
    filteredData=parsedData.sort((a, b) => a.name.localeCompare(b.name)); // Ascending order
  } else if (selectedOption === "-name") {
    filteredData=parsedData.sort((a, b) => b.name.localeCompare(a.name)); // Descending order
  } else if (selectedOption === "default") {
    filteredData = parsedData;
  }
  renderProducts(filteredData);
});
