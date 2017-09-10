<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>For loop</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>For loops is used to iterate when the number of times is known or iterate through the elements of an array.</p>
        <?php
          echo "print numbers from 1 to 10 <br/>";
          for($i=1;$i<=10;$i++){
              echo $i."<br/>";
          }
          echo "Iterate over indexed array <br/>";
          $carMakers = array("BMW","Audi","Mercedes");
          foreach($carMakers as $value){
              echo $value."<br />";
          }
          echo "Iterate over Associative array <br/>";
          $shoppingBasket=array("1"=>"Bread","2"=>"Milk","3"=>"jam");
          foreach($shoppingBasket as $key=>$value){
              echo  "key:".$key."Value:".$value."<br/>";
          }
        ?>
    </body>
</html>