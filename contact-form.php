<?php
// Uncomment to debug
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'php-mailer/Exception.php';
require 'php-mailer/PHPMailer.php';
require 'php-mailer/SMTP.php';

require 'config.php';

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$log = date("Y-m-d H:i:s") . "\t" .
  $_POST["email"] . "\t" .
  "person:" . $_POST["person"] . "\t" .
  "history:" . implode(",", $_POST["history"]) . "\n";
file_put_contents("protected/contact-form-logs.txt", $log, FILE_APPEND);

if (in_array("bbb", $_POST["history"])) {
  $mail_attachment = "bbb.pdf";
} elseif (in_array("ccc", $_POST["history"]) && $_POST["person"] == "1") {
  $mail_attachment = "ccc1.pdf";
} else {
  $mail_attachment = "default.pdf";
}

$mail = new PHPMailer(true);
try {
  //Server settings
  // $mail->SMTPDebug = 2; // uncomment to debug
  $mail->isSMTP();
  $mail->Host       = 'smtp.gmail.com';
  $mail->SMTPAuth   = true;
  $mail->Username   = $mail_username;
  $mail->Password   = $mail_password;
  $mail->SMTPSecure = 'tls';
  $mail->Port       = 587;

  //Recipients
  $mail->setFrom($mail_username, 'Nazwa wysyłającego');
  $mail->addAddress($_POST["email"]);

  // Attachments
  $mail->addAttachment("reports/" . $mail_attachment);

  // Content
  $mail->CharSet = 'UTF-8';
  $mail->isHTML(true);
  $mail->Subject = 'Temat mejla';
  $mail->Body    = 'Treść mejla';

  $mail->send();
  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
?>
