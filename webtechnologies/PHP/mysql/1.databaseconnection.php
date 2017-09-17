<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Connnect to MySQL using PHP</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p> The driver used to connect to MySQL using PHP is msqli.To know more about the driver refer <a href="http://php.net/manual/en/mysqli.summary.php">mysqli summary</a> </p>
        
            <?PHP
                echo "<p>Function used to connect to database is mysqli_connect which accepts the following parameters host,username,password and database name . If the connection is sucessfull it returns the connection object or returns false. </p->";
                #Die is an alias to exit() function which terminates the script.Inorder to avaoid displaying system warning prepend the function with symbol @ and cann be used when assigning value to a variable.
                $connection = @mysqli_connect("localhost","root","root123","practicedatabase") or die("Unable to connect to the databse".mysqli_connect_error());#mysqli_connect_error consists of the error string that ocurred while connecting, 
                var_dump($connection);
                echo "<p>Successfully connected to the database</p>";
                echo "<p>the above mentioned way is procedural. The connection can also be obtained using the object oriented way as well.In order to obtain the connection using the object oriented method we create an object of the mysqli class.Unlinke the procedural way where the connection variable holds the connection or it is false.In object oriented way it is always an object.</p>";
                $link = new mysqli("localhost","root","root123","practicedatabase");
                if($link->connect_errno >0){
                    die("unable to connect".$link->connect_error);
                }
                echo "<p>Connected sucessfully</p>";
            ?>
            
        
    </body>
</html>