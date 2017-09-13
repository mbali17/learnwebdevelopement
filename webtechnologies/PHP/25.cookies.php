<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Cookies in PHP</title>
    </head>
    <body>
        <p>Cookies are files present on user's system which can persist the information between requests.Cookies are created using the 
        setcookie function.</p>
        <?php
            #the params passed to setcookie are name,value and expiration time.
            setcookie("UserName","Sam",time()+7*24*60*60);
            echo "<p>All the cookies are stored in a global array vriable</p>";
            if(isset($_COOKIE["UserName"])){
                echo '<p> cookie found: </p>'.$_COOKIE["UserName"];
            }else{
                echo "<p>Cookie not found</p>";
            }
            echo "<p>Setting the expiration time to be  in past we can invalidate the cookie.Using the name we used to create it.</p>";
        ?>
    </body>
</html>