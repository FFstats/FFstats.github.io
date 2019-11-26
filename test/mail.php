<?php if ($_SERVER["REQUEST_METHOD"] == "POST") {

print_r($_POST, TRUE);
error_log(print_r($_POST, TRUE));

$name = strip_tags(trim($_POST["form_name"]));
$name = str_replace(array("\r","\n"),array(" "," "),$name);
$email = filter_var(trim($_POST["form_email"]), FILTER_SANITIZE_EMAIL);
$message = trim($_POST["form_msg"]);

// Check that data was sent to the mailer.
if ( empty($name) OR empty($message) OR !filter_var($email, FILTER_VALIDATE_EMAIL)) {
// Set a 400 (bad request) response code and exit.
http_response_code(400);
echo "Oops! There was a problem with your submission. Please complete the form        and try again.";
exit;
}

// Set the recipient email address.
// FIXME: Update this to your desired email address.
$recipient = "fabian@squidsource.com";

// Set the email subject.
$subject = "New contact from $name Squidsource";

// Build the email content.
$email_content = "Name: $name\n";
$email_content .= "Email: $email\n\n";
$email_content .= "Message:\n$message\n";

// Build the email headers.
$email_headers = "From: $name <$email>";

// Send the email.
if (mail($recipient, $subject, $email_content, $email_headers)) {
// Set a 200 (okay) response code.
http_response_code(200);
echo "Thank You! Your message has been sent.";
} else {
// Set a 500 (internal server error) response code.
http_response_code(500);
echo "Oops! Something went wrong and we couldn’t send your message.";
}

} else {
// Not a POST request, set a 403 (forbidden) response code.
http_response_code(403);
echo "There was a problem with your submission, please try again.";
} ?>