



function isValidCardNumber(cardNumber) {
    // Validate card number length
    if (cardNumber.length !== 16) {
      return false;
    }
  
    // Validate card number format
    if (!/^\d+$/.test(cardNumber)) {
      return false;
    }
  
    return true;
  }
  
  function isValidCVV(cvv) {
    // Validate CVV length
    if (cvv.length !== 3) {
      return false;
    }
  
    // Validate CVV format
    if (!/^\d+$/.test(cvv)) {
      return false;
    }
  
    return true;
  }
  
  function verifyOTP(enteredOTP) {
    // Simulate OTP verification logic
    var generatedOTP = "1234"; // Replace with the actual OTP sent to the user's mobile number
    return enteredOTP === generatedOTP;
  }
  
  
  document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Get form inputs
    var cardNumber = document.getElementById("cardNumber").value;
    var cardName = document.getElementById("cardName").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;
  
    // Perform validation
    if (!cardNumber || !cardName || !expiryDate || !cvv) {
      // Display error message if any field is empty
      alert("Please fill in all the payment details.");
      return;
    }
  
    // Validate card number
    if (!isValidCardNumber(cardNumber)) {
      // Display error message for invalid card number
      alert("Please enter a valid card number.");
      return;
    }
  
    // Validate CVV
    if (!isValidCVV(cvv)) {
      // Display error message for invalid CVV
      alert("Please enter a valid CVV.");
      return;
    }
  
    // Prompt for OTP
    var enteredOTP = prompt("Please enter the OTP sent to your mobile number.");
  
    // Verify OTP
    if (verifyOTP(enteredOTP)) {
      // OTP verification successful, redirect to payment success page
      window.location.href = "paymentsuccess.html";
    } else {
      // OTP verification failed, display error message
      alert("Invalid OTP. Please try again.");
    }
  });