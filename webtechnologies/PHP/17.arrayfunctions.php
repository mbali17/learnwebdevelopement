<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Conditional statements</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Array Functions</p>
        <?php
           $shoppingBasket1 = array("Milk","Bread","Jam");
           $shoppingBasket2 = array("Apple","orange","strawberry");
           echo "Array1:";
           print_r($shoppingBasket1);
           echo "<br/>";
           echo "Array2:";
           print_r($shoppingBasket2);
           echo "<p>Arrays are merged using the array_merge function</p>";
           $shoppingbasket = array_merge($shoppingBasket1,$shoppingBasket2);
           print_r($shoppingbasket);
           echo "<p>Number of elements in the array:</p>";
           echo count($shoppingbasket)."<br/>";
           $itemCount = array_count_values($shoppingbasket);
           echo "Count of items in the array : ";
           print_r($itemCount);
           echo "<p>Push an element in the array</p>";
           array_push($shoppingbasket,"yogurt");
           print_r($shoppingbasket);
           echo "<p>Check if an element is present in the array</p>";
           echo in_array("Bread",$shoppingbasket);
           echo "<p>Adding elements in a specific postion in the array using array_splice function. it starts at a specific position and replaces the elements passed as parameter2</p>";
           array_splice($shoppingbasket,0,2,array('Mango','pineapple'));
           print_r($shoppingbasket);
           echo "<p>Sort an array an ascending order: </p>";
            sort($shoppingbasket);
            print_r($shoppingbasket);
           echo "<p>Sort an array an descending order:</p>";
           rsort($shoppingbasket);
           print_r($shoppingbasket);
           echo "<p>Operations with associative array:</p>";
           $assoc_array = array("1"=>"bread","2"=>"jam","3"=>"butter");
           echo "<p>Sort based on values:</p>";
           asort($assoc_array);
           print_r($assoc_array);
           echo "<p>To sort arrays based on keys we use the ksort function.</p>";
           ksort($assoc_array);
           print_r($assoc_array);
        ?>
    </body>
</html