<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Conditional statements</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>While loop is used to iterate as long as certain condition is true.</p>
        <?php
          echo "Print numbers from 1 to 10";
          $i=1;
          while($i<=10){
              echo $i."<br/>";
              #Make sure to update the codition or it would be an infinite loop.
              $i++;
          }
          
        ?>
    </body>
</html>