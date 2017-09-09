<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Strings in PHP</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Strings are a collection of charachters enclosed in either single or double quotes.
        </p>
        <?php
            #String using single quote.
            $name ='john';
            /*Strings containing the apostrophe symbol can be handled in two ways.Either by wrapping the string in double quotes or using back slash
            String using double quotes.
            */
            $doublequotestring = "Sam's car is  nice";
            #escape apostrophes using back slash.
            $stringwithbackslash = 'Sam\'s car is nice';
            echo "souble quotes " . $doublequotestring ." escaped string".$stringwithbackslash;
        ?>
    </body>
</html>