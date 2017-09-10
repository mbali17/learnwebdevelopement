<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Conditional statements</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Functions:</p>
        <?php
         function displayMessage(){
             echo "Hello! <br/>";
         }
        displayMessage();
        function greet($name){
            echo "Hello ".$name."<br/>";
        }
        greet("Sam");
        function sum($x,$y){
            return $x+$y;
        }
        $sum = sum(4,5);
        echo "the sum of 4 and 5 is".$sum."<br/>";
        ?>
    </body>
</html>