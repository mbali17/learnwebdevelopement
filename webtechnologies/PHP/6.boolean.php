<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Booleans in PHP</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Boolean in PHP: The value is either true or false</p>
        <?php
           #comparison operator
           echo "comparison operator <br/>";
           $variable1 = (4<5);
           echo "is 4<5: ";
           var_dump($variable1);
           echo "<br/>";
           $variable2 = (4>5);
           echo "is 4>5: ";
           var_dump($variable2);
           echo "<br/>";     
           #Logical operator.
           echo "logical operators <br/>";
           $variable3 = $variable1 && $variable2;
           $variable4 = $variable1 || $variable2;
           echo '$variable1 && $variable2: ';
           var_dump($variable3);
           echo "<br/>";
           echo '$variable1 || $variable2: ';
           var_dump($variable4);
        ?>
    </body>
</html>