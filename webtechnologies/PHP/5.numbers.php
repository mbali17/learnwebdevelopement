<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>numbers in PHP</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Numbers in PHP</p>
        <?php
            #Integer
            $integer =37;
            #In order to know the information about the variable in addition to echo we can as well use var_dump
            var_dump($integer);
            echo "<br/>";
            #Hexadecimal numbers are prefixed by 0x
            $hexa = 0x1A;
            echo "following is the hexadecimal value of 0x1A: ";
            var_dump($hexa);
            echo "<br/>";
            #Floating point numbers
            $float = 45.88;
            var_dump($float);
        ?>
    </body>
</html>