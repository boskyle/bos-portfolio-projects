<?php
session_start();

echo 'Thank you for inquiring. Please wait for a response from your personal coach to in your email.';

define ('DEVELOPER_EMAIL','boskyle.orendain@gmail.com');

$client_email = $_POST['email'];


$headers_to_client  = 'MIME-Version: 1.0' . "\r\n";
$headers_to_client  .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers_to_client .= 'From: '.DEVELOPER_EMAIL."\r\n".
    'Reply-To: '.DEVELOPER_EMAIL."\r\n";

    
$$headers_to_developer = 'From: '. $clientEmail;

// compose an html messaage that emulates an html body with elements inside
$message_to_client = '<html><body>';
$message_to_client .= '<h2 style="color:#c05555;">'.'Reached out to coach.. confirmation.'.'</h2>';
$message_to_client .= '<p style="font-size:16px;">Thanks for contacting me. I\'ll get in touch as soon as I can.</p>';
$message_to_client .= '</body></html>';

// to client
mail($client_email,'Reached out confirmed',$message_to_client,$headers_to_client);
// to coach
mail(DEVELOPER_EMAIL,'Fitness Coach Inquirie','This email wants to reach out to you: '.$client_email,$headers_to_developer);