<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Send Mail</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Sending mails is an important feature of an application and in PHP we can send mail using the mail function.</p>
        <?php
            echo "<p>Note:For the E-mail to be sent we would need to configure the SMTP server details in the php.ini files</p>";
            echo "<p>The mail function  accepts the following parameters the toAddress,subject,message and cetain special headers</p>";
            $to_address = "@gmail.com";
            $subject = "Welcome to PHP class";
            echo "<p>The message can either be a plain text or HTML.If the message is an HTML then an additional header defining the content type needs to be added.</p>";
            $message = "Welcome to PHP class. Start learning and exploring.";
            $headers = "From:@gmail.com";
            $is_successfully_sent = mail($to_address,$subject,$message,$headers);
            echo "<p>If the mail is sent successfully value 1 is returned otherwise 0 </p>".$is_successfully_sent;
        ?>
    </body>
</html