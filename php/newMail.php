<?php
  if($_SERVER['REQUEST_METHOD'] == "POST") {
    $headers = 'From: ' . $_POST["firstname"] . ' <' . $_POST["email"] . '>';
    if (mail("contact@nomoreads.org", $_POST["subject"], $_POST["body"], $headers))
      echo "We have received your message and will contact you as soon as possible! Thank you!";
    else
      echo "An error happened while delivering your message. Please try again later or contact us via Twitter.";
  }
?>
