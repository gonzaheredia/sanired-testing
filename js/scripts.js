$("#contact_form").submit(function(e) {
  e.preventDefault();
  submitContactForm();
});

function submitContactForm() {
  var name = $("#contact_name").val();
  var email = $("#contact_email").val();
  var phone = $("#contact_phone").val();
  var message = $("#contact_message").val();

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
      if (text == "success") {
        contactFormSuccess();
      }
    }
  });
}

function contactFormSuccess() {
  $(".contact__form--send-message").css("display", "block");
}
