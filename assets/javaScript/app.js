$(function() {
  $("#fNameErr").hide();
  $("#lNameErr").hide();
  $("#emailErr").hide();
  $("#zipCodeErr").hide();
  $("#partySizeErr").hide();
  $("#dateSelectErr").hide();

  const error_fName = false;
  const error_lName = false;
  const error_email = false;
  const error_zipCode = false;
  const error_partySize = false;
  const error_dateSelect = false;

  $("#firstNameInput").focusout(function() {
    check_firstName();
  });

  $("#lastNameInput").focusout(function() {
    check_lastName();
  });

  $("#emailInput").focusout(function() {
    check_email();
  });

  $("#zipCode").focusout(function() {
    check_zipCode();
  });

  $("#partySize").focusout(function() {
    check_partySize();
  });

  $("dateSelect").focusout(function() {
    check_dateSelect();
  });

  function check_firstName() {
    const firstName_length = $("#firstnameInput").val.length;

    if (firstName_length < 5) {
      $("#fNameErr").html("Please Enter Your First Name");
      $("#fNameErr").show();
      error_fName = true;
    } else {
      $("fNameErr").hide();
    }
  }

  function check_lastName() {
    const lastName_length = $("#lastnameInput").val.length;

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
});
