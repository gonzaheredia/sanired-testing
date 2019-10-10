<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$emailTo = "agaboardi@hotmail.com";
$subject = "Mensaje nuevo desde Sanired.com.ar";

$body .= "Teléfono: "; 
$body .= $phone; 
$body .= "\n"; 
$body .= "\n"; 

$body .= $message; 
$body .= "\n"; 

$headers = 'From: ' . $name . "<" . $email . ">" . "\r\n" .
    'Reply-To: ' . $from . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$success = mail($emailTo, $subject, $body, $headers);

if ($success){
    echo "success";
}else {
    echo "invalid";
}

?>