<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Conditional statements</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>These statements are used to check for certain conditions to alter the flow of the program.The statements include if , if else,if elseif else,switch</p>
        <?php
          $number=4;
          echo "Check if the number is greater than 2 <br/>";
          if($number>2){
              echo "Number is greater than 2 <br/>";
          }else{
              echo "Number is less than 2 <br/>";
          }
          echo "Check temperature range using if elseif else <br/>";
          $temperature = 14;
          if($temperature <15){
              echo "It is cold today <br/>";
          }elseif($temperature > 30){
              echo "it is hot today <br/>";
          }else{
              echo "It is medium today.<br/>";
          }
         $numberofwheels =4;
         switch($numberofwheels){
             case 2:
                 echo "It is a bike";
                 break;
             case 4:
                 echo "It is a car";
                 break;
             default:
                 echo "Unable to determine";
                 break;
         }
        ?>
    </body>
</html>