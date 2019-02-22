// $(window).load(function() {
//   $("#hidden-gif").fadeOut();
// });

$(function() {
  //  Hide all Error Messages
  $("#fNameErr").hide();
  $("#lNameErr").hide();
  $("#emailErr").hide();
  $("#partySizeErr").hide();
  $("#dateSelectErr").hide();

  let error_fName = false;
  let error_lName = false;
  let error_email = false;
  let error_partySize = false;
  let error_dateSelect = false;

  // When User Clicks Off the Input Field and Has Not Met the Criteria Trigger Function
  $("#firstNameInput").focusout(function() {
    check_firstName();
  });

  $("#lastNameInput").focusout(function() {
    check_lastName();
  });

  $("#emailInput").focusout(function() {
    check_email();
  });

  $("#partySize").focusout(function() {
    check_partySize();
  });

  $("#dateSelect").focusout(function() {
    check_dateSelect();
  });

  // Validate First Name Input
  function check_firstName() {
    const firstName = $("#firstNameInput").val();
    if (firstName == "") {
      $("#fNameErr").html("Please Enter Your First Name");
      $("#fNameErr").show();
      error_fName = true;
    } else {
      $("#fNameErr").hide();
    }
  }

  // Validate Last Name Input
  function check_lastName() {
    const lastName = $("#lastNameInput").val();
    if (lastName == "") {
      $("#lNameErr").html("Please Enter Your Last Name");
      $("#lNameErr").show();
      error_lName = true;
    } else {
      $("#lNameErr").hide();
    }
  }

  // Validate Email Address
  function check_email() {
    const pattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/;

    if (pattern.test($("#emailInput").val())) {
      $("#emailErr").html("Please Enter a Valid Email");
      $("#emailErr").show();
      error_email = true;
    } else {
      $("#emailErr").hide();
    }
  }

  // Validate Party Size Option
  function check_partySize() {
    const partySize = $("#partySize").val();

    if (partySize == "noValue") {
      $("#partySizeErr").html("Please Select the Number of Guests");
      $("#partySizeErr").show();
      error_partySize = true;
    } else {
      $("#partySizeErr").hide();
    }
  }

  // Validate Date Select Option
  function check_dateSelect() {
    const dateSelect = $("#dateSelect").val();

    if (dateSelect == "noValue") {
      $("#dateSelectErr").html("Please Select a Valid Date Option");
      $("#dateSelectErr").show();
      error_dateSelect = true;
    } else {
      $("#dateSelectErr").hide();
    }
  }

  // When User Clicks on the Submit Button
  $("#submit").on("click", function() {
    event.preventDefault();

    error_fName = false;
    error_lName = false;
    error_email = false;
    error_partySize = false;
    error_dateSelect = false;

    const firstName = $("#firstNameInput").val();
    const email = $("#emailInput").val();
    const partySize = $("#partySize").val();
    const dateSelect = $("#dateSelect").val();

    check_firstName();
    check_lastName();
    check_email();
    check_partySize();
    check_dateSelect();

    if (
      error_fName == false &&
      error_lName == false &&
      error_email == false &&
      error_dateSelect == false &&
      error_partySize == false
    ) {
      alert(
        `Thank you ${firstName} for booking your reservation for ${partySize} guests on ${dateSelect} at Intro_Chicago. A confirmation email has been sent to ${email}!`
      );
      $("#reservationForm")[0].reset();
      return true;
    } else {
      return false;
    }
  });
});
