$(document).ready(function() {

  // Grab all input values from our form page...
  const firstName = $(".firstNameInput").val().trim();
  const lastName = $(".lastNameInput").val().trim();
  const email = $(".emailInput").val().trim();
  const freqDinerNum = $("freqDinerInput").val().trim();
  const phoneNum = $(".phoneNumInput").val().trim();
  const zipCode = $(".zipCodeInput").val().trim();
  const dateSelection = $(".dateSelection").val().trim();
  const partySize = $(".partySizeInput").val().trim();
  const allergy = $(".allergyInput").val().trim();
  const occasion = $(".occasionInput").val().trim();

  // Give the submit button life...
  $("#submitBtn").on("click", function(event) {
    event.preventDefault();

    if (firstName && lastName === "") {
      alert("Please ")
    }
  


}