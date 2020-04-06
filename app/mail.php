<?php
$to      = 'geodezjastrama@gmail.com';
$name = $_POST['name'];
$email = $_POST['email'];
$subject = 'Natalka! ' . $name . ' chce o coś zapytać. Odpisz szybko!';
$message = $_POST['message'];
$headers =  'From:' . $name . "\r\n" .
    'Reply-To:' .  $email . "\r\n";
$headers .= 'Content-Type: text/plain; charset=utf-8' . "\r\n";
$locationpage = "index.html";
header("Location: $locationpage?message=wyslano");

    mail($to, $subject, $message, $headers)


      
    

 ?>
