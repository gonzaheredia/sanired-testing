$("#contact_form").submit(function(e) {
  e.preventDefault();
  contactFormSuccess();
});

function submitContactForm() {
  var name = $("#contact_name").val();
  var email = $("#contact_email").val();
  var phone = $("#contact_phone").val();
  var message = $("#contact_message").val();

  console.log(name);

  $.ajax({
    type: "POST",
    url: "send-message.php",
    data:
      "name=" +
      name +
      "&email=" +
      email +
      "&phone=" +
      phone +
      "&message=" +
      message,
    success: function(text) {
      if (text) {
        console.log(text);
        contactFormSuccess();
      }
    }
  });
}

function contactFormSuccess() {
  $("#contact_form").slideUp(function() {
    $(".contact__form--send-message").slideDown();
  });
}
