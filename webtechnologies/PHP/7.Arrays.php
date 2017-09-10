<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Arrays in PHP</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Array is a collection of elements. elements in the array can be of any type.To Create an array we use the array() function</p>
        <?php
           echo "<p>indexed array</p>";
           $carMakers = array("Audi","Tesla","BMW");
            #The following function prints the variable information in more human-readable form.If given an array, values will be presented in a format that shows keys and elements
           print_r($carMakers);
           echo "<p>Associative array: In the indexed arrays the position value starts from zero and incremented for each element.Here"."in associative array the element indexes can be provided by the user.</p>";
           $shoppingBasket1=array("a"=>"Milk","b"=>"bread","c"=>"JAM");
            echo "shoppingBasket1:";   
           print_r($shoppingBasket1);
           echo "<br/>";
           $shoppingBasket2=array("b"=>"bread","a"=>"Milk","c"=>"JAM");
            echo "shoppingBasket2:";    
           print_r($shoppingBasket2);
           echo "<p>Comparing two arrays shoppingBasket1==shoppingBasket2: This checks for the content of the array and not the order</p>";
           var_dump($shoppingBasket1 == $shoppingBasket2);
           echo "<p>To compare the content and the order of two arrays we use the '===' operator  shoppingBasket1===shoppingBasket2:</p>";
           var_dump($shoppingBasket1 === $shoppingBasket2);
           echo "<p>to check if two arrays are not equal we can use either this '<>' or '!=' operator </p>";    
            var_dump($shoppingBasket1 != $shoppingBasket2);
        ?>
    </body>
</html>