<?php
include "lib.php";

$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$log = date("Y-m-d H:i:s") . "\t" .
  $_POST["email"] . "\t" .
  "person" . $_POST["person"] . "\t";
  "history" . implode(",", $_POST["history"]) . "\n";
file_put_contents("protected/contact-form-logs.txt", $log, FILE_APPEND);

if (in_array("bbb", $_POST["history"])) {
  $mail_file = "bbb.pdf";
  echo "bbb";
} elseif (in_array("ccc", $_POST["history"]) && $_POST["person"] == "1") {
  $mail_file = "ccc1.pdf";
  echo "ccc 1";
} else {
  $mail_file = "default.pdf";
  echo "default";
}

$mail_path = "reports/";
$mail_name = "??? ???";
$mail_mail = "???@??.??";
$mail_replyto = "???@??.??";
$mail_subject = "Raport";
$mail_message = "Przesyłam raport.";
mail_attachment(
  $mail_file,
  $mail_path,
  $_POST["email"],
  $mail_mail,
  $mail_name,
  $mail_replyto,
  $mail_subject,
  $mail_message);
?>
