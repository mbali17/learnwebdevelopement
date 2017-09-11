<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Conditional statements</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Get and Post method are used to send data to the server. Get method appends the data sent to the server to the URL. Hence, no sensitive information is sent via this methos. Where as in the post method is sent in the body.</p>
        <h3>Get:</h3>
        <!-- if no action is specified in the form then the request is submitted to the current URL -->
        <form method="GET">
            <label for="username">Username</label>
            <input type="text" name="username" id="username">
            <input type="submit" name="submit" value="Submit">
        </form>
        <h3>POST:</h3>
         <form method="POST">
            <label for="country">CountryL:</label>
            <input type="text" name="country" id="country">
            <input type="submit" value="Submit" name="submit">
        </form>
        <?php
            //this variable which is an associated array holds the values submitted using the get method.
            print_r($_GET);
            if($_GET['submit']){
                if($_GET['username'])
                echo "<p>Hello</p>".$_GET['username'];
            }
            //similar to $_GET there is  $_POST which holds the value submitted using the Post method.
            if($_POST['submit']){
                if($_POST['country']){
                    echo "<p>The country of residence is</p>".$_POST['country'];
                }
            }
        ?>
    </body>
</html