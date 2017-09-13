<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Sessions in PHP</title>
    </head>
    <body>
        <p>Sessions are yet another place to persist user data.Which is persisted for each user session.</p>
        <?php
            echo "<p>session start using session_start</p>";
            session_start();
            echo "<p>Set session variable using using the session array</p>";
            $_SESSION['firstName'] = "john";
            $_SESSION['lastName'] = "snow";
            echo "<p>Firstname:  lastname</p>".$_SESSION['firstName']." ".$_SESSION['lastName'];
            echo "<p>remove session variables using unset function</p>";
            if(isset($_SESSION['firstName'])){
                unset($_SESSION['firstName']);
            }echo $_SESSION['firstName'];
            echo "<p>Destroying session using session_destroy function</p>";
            session_destroy();
        ?>
    </body>
</html>