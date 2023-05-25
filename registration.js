

  document.querySelector("form").addEventListener("submit", registration)
  var userArr = JSON.parse(localStorage.getItem("userInfo")) || [];
  //  console.log(userDetails)
  function registration(event) {
    event.preventDefault();
    var fullname = document.querySelector("#name").value
    var email = document.querySelector("#email").value
    var confirm_email = document.querySelector("#cemail").value
    var password = document.querySelector("#password").value
    var confirm_password1 = document.querySelector("#psw-repeat").value
    var phone_num1 = document.querySelector("#number").value
    // console.log(fullname,email,confirm_email,password,cofirm_password,phone_num)
    var userInfo = {
      name: fullname,
      email: email,
      confirm_email: confirm_email,
      password: password,
      confirm_password: confirm_password1,
      phone_num: phone_num1,
    }
    userArr.push(userInfo);
    localStorage.setItem("userInfo", JSON.stringify(userArr))
      alert("Registration Successfully Done")
      window.location.href = "login.html"
  }


