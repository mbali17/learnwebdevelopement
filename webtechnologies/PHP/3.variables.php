<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Variavble in PHP</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>There are two types of variables inn PHP 1) is the regular variable and the other is the constants whose value never changes
        </p>
        <?php
        
            #Defining regular variable.Variable names bwgin with '$' symbol followed with letters or underscore.
            $name ='john';
            $age = '16';
            #to concatenate two strings we use the '.' symbol.As shown in the next line.
            echo "My name is " . $name ." my age is: ".$age." years";
            #to declare a constant we use the define function.First param is the variable name and the param is the value of the constant
            define("COUNTRY","England");
            echo "The value of the country is".$COUNTRY;
        ?>
    </body>
</html>