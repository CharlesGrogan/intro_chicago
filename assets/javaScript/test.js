// $(document).ready(function() {
//   $("#hidden-gif").hide();
//   //hide all divs
//   $(".toggle").hide();

//   $("#hidden-gif").show();
//   timer = 0;
//   const intervalId = setInterval(() => {
//     timer++;

//     //We know the gif takes ~5 sec to run
//     if (timer >= 6) {
//       $("#hidden-gif").hide();
//       $(".toggle").show();
//       clearInterval(intervalId);
//     }
//   }, 900);
// });
loadPage();

const loadPage = () => {
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
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValidEmail = pattern.test(
      $("#emailInput")
        .val()
        .toLowerCase()
    );
    if (!isValidEmail) {
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

    // All error flags set to false
    error_fName = false;
    error_lName = false;
    error_email = false;
    error_partySize = false;
    error_dateSelect = false;

    // Establish values from form input
    const firstName = $("#firstNameInput").val();
    const email = $("#emailInput").val();
    const partySize = $("#partySize").val();
    const dateSelect = $("#dateSelect").val();

    // Run Validation functions
    check_firstName();
    check_lastName();
    check_email();
    check_partySize();
    check_dateSelect();

    // If all error flags == false => form submits - alery guest of successful reservation => clear form - - else return false
    if (
      error_fName == false &&
      error_lName == false &&
      error_email == false &&
      error_dateSelect == false &&
      error_partySize == false
    ) {
      alert(
        `Thank you ${firstName} for booking your reservation for ${partySize} guests on ${dateSelect}. 
The Team at Intro Chicago is anticipating your arrival.
A confirmation email has been sent to ${email}.`
      );
      $("#reservationForm")[0].reset();
      return true;
    } else {
      return false;
    }
  });
};
