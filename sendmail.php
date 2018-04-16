<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="stylesheet" href="css/styles.css">
    <title>Thank You</title>
</head>
<body>
  <div class="notification">
      
      <?php
    // define variables and set to empty values
    $name = $email = $message = $text = "";
    $to = 'michal@enuai.pl';
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (empty($_POST["name"])) {
            $nameErr = "Name is required";
          } else {
            $name = test_input($_POST["name"]);
            // check if name only contains letters and whitespace
            if (!preg_match("/^[a-zA-Z ]*$/",$name)) {
              $nameErr = "Only letters and white space allowed"; 
            }
          }
          if (empty($_POST["email"])) {
            $emailErr = "Email is required";
          } else {
            $email = test_input($_POST["email"]);
            // check if e-mail address is well-formed
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
              $emailErr = "Invalid email format"; 
            }
          }
          if (empty($_POST["message"])) {
            $message = "Empty Message";
          } else {
            $message = test_input($_POST["message"]);
          }
          $text = $name . "\r\n" . $message;

          $header = "From:" . $email . "\r\n"; 
          $header.= "MIME-Version: 1.0\r\n"; 
          $header.= "Content-Type: text/html; charset=ISO-8859-1\r\n"; 
          $header.= "X-Priority: 1\r\n"; 
          
        if ($_POST['submit']) {
          $status = mail ($to, $email , $text , $header);
            if ($status) { 
              echo '<h2 class="title"><span>Thank You</span></h2>';
            } else { 
              echo '<h2 class="title"><span>Oops! Something Went Wrong</span></h2>';
            }
        }
    }

    function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
    }
?>
  </div>

</body>
</html>