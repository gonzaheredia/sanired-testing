<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$emailTo = "herediagonza@gmail.com";
$subject = "Mensaje recibido desde Sanired.com.ar";

$body .= "Nombre: "; 
$body .= $name; 
$body .= "\n"; 

$body .= "Email: "; 
$body .= $email; 
$body .= "\n"; 

$body .= "Teléfono: "; 
$body .= $phone; 
$body .= "\n"; 

$body .= "Mensaje: "; 
$body .= $message; 
$body .= "\n"; 

$success = mail($emailTo, $subject, $body, "From:" . $email);

if ($success){
    echo "success";
}else {
    echo "invalid";
}

?>