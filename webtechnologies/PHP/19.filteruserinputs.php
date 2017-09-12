<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Filter user inputs</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>While submitting forms users or hackers can pass certain malicious piece of code even after having validations at the user end.In order to handle this we also do server side validations to sanitize the user input.
        Sanitization is the process of cleaning the input while it does not say whether the input is correct or not.Hence, we need to validate.</p>
        <?php
          echo "<p>Sanitize user inputs</p>";
           echo "<p>Validating username:</p>";
           $username = "<script>window.alert('hi')</script>";
           //echo $username;
           echo "<p>After sanitizing:</p>";
           $username=filter_var($username,FILTER_SANITIZE_STRING);
           echo $username;
           echo "<p>Validating email</p>";
           $email = "sam@gmail.-2---s-a''''         \/.com";
           echo  $email;
           echo "<p>After sanitizing:</p>";
           $email=filter_var($email,FILTER_SANITIZE_EMAIL);;
           echo $email;
          echo "<p>Validate user inputs</p>";
          $my_email = "sam@gmail.com";
          echo  "entered e-mail:".$email."<br/>";
          echo "Sanitized e-mail".filter_var($my_email,FILTER_SANITIZE_EMAIL);
          echo "<p>To validate a user input we use the filter_var function with second parameter as FILTER_VALIDATE_EMAIL this returns the input if valid or returns false otherwise.</p>";
         if (filter_var($my_email,FILTER_VALIDATE_EMAIL)){
            echo "Valid Email.";
         }else{
             echo "Invalid Email";
         }
        ?>
    </body>
</html>