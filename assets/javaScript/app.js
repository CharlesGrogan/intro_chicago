$(function() {
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

  $("dateSelect").focusout(function() {
    check_dateSelect();
  });

  function check_firstName() {
    const firstName_length = $("#firstNameInput").val.length;

    if (firstName_length < 1) {
      $("#fNameErr").html("Please Enter Your First Name");
      $("#fNameErr").show();
      error_fName = true;
    } else {
      $("fNameErr").hide();
    }
  }

  function check_lastName() {
    const lastName_length = $("#lastNameInput").val.length;

    if (lastName_length < 1) {
      $("#lNameErr").html("Please Enter Your Last Name");
      $("#lNameErr").show();
      error_lName = true;
    } else {
      $("lNameErr").hide();
    }
  }

  function check_email() {
    const pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.{2,4}$/i);

    if (pattern.test($("#emailInput").val())) {
      $("#emailErr").html("Please Enter a Valid Email");
      $("#emailErr").show();
      error_email = true;
    } else {
      $("emailErr").hide();
    }
  }

  function check_partySize() {
    const partySize = $("#partySize").val;

    if (partySize == "noValue") {
      $("#partySizeErr").html("Please Select the Number of Guests");
      $("#partySizeErr").show();
      error_partySize = true;
    } else {
      $("#partySizeErr").hide();
    }
  }

  function check_dateSelect() {
    const dateSelect = $("#dateSelect").val;

    if (dateSelect == "noValue") {
      $("#dateSelectErr").html("Please Select a Valid Date Option");
      $("#dateSelectErr").show();
      error_dateSelect = true;
    } else {
      $("#dateSelectErr").hide();
    }
  }

  $("#submit").submit(function() {
    error_fName = false;
    error_lName = false;
    error_email = false;
    error_partySize = false;
    error_dateSelect = false;

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
      return true;
    } else {
      return false;
    }
  });
});
