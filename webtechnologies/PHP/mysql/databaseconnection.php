<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Connnect to MySQL using PHP</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p> The driver used to connect to MySQL using PHP is msqli.To know more about the driver refer <a href="http://php.net/manual/en/mysqli.summary.php">mysqli summary</a> </p>
        <p>
            <?PHP
                echo "Function used to connect to database is mysqli_connect whic accepts the following parameters host,username,password and database name . If the connection is sucessfull it returns the connection object or returns false. <br/>";
                #Die is an alias to exit() function which terminates the script.
                $connection = mysqli_connect("localhost","","root123","practicedatabase") or die("Unable to connect to the databse");
                var_dump($connection);
                echo "<br/>Successfully connected to the database";
            ?>
            
        </p>
    </body>
</html>