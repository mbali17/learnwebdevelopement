<!DCOTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Contact us</title>
    </head>
    <body>
        <p>This is a contcact form </p>
        <!--You can place PHP where the message is to be displayed-->
         <?PHP
            //Check if the form is submitted
                //Sanitize inputs
                    //Validate inputs
                //Show result message.
            if(isset($_POST['submit'])){
                $name = $_POST['name'];
                $email = $_POST['email'];
                $message = $_POST['message'];
                //check for blank values
                echo "Name entered is".$name;
                if(!($name&&$email&&$message)){
                    echo "<p>Please enter all the values</p>";
                }
                //Sanitizing input 
                $name = filter_var($name,FILTER_SANITIZE_STRING);
                $email = filter_var($email,FILTER_SANITIZE_EMAIL);
                $message = filter_var($message,FILTER_SANITIZE_STRING);
                //validating e-mail.
                if (!filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
                    echo("$email is a valid email address");
                } else {
                    echo("$email is not a valid email address");
                }
            }
        ?>
        <form method="post">
            <label for="name">Enter Name:</label>
            <input type="text" name="name" id="name">
            <br/>
            <label for="email">Enter E-mail</label>
            <input type="email" name="email" id="email">
            <br/>
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
            <br/>
            <input  type="submit" name="submit" value="Send Message">
        </form>
       
    </body>
</html>