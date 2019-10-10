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
      } else {
        alert(
          "No se ha podido enviar su consulta. Puede contactarnos al 351 664-5414 / 351 354-7538"
        );
      }
    }
  });
}

function contactFormSuccess() {
  $("#contact_form").slideUp(function() {
    $(".contact__form--send-message").slideDown();
  });
}
