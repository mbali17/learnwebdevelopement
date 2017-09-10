<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>String Functions</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>There are certain functions available to manipulate the string and perform operations on string  </p>
        <?php
          $message = "This is a website.A website to learn PHP";
          echo "To find the string length we use the strlen function: THis returns the number of charachters in the string.<br/>";
          echo "length of the string is:".strlen($message)."<br/>";
          echo "to count the number of words in the string we use str_word_count function <br/>";
          echo "Number of words in the string :".str_word_count($message)." words.";
          echo "To replace certain words in the string we use str_replace function <br/>";
          #str_replace function does not change the original string.It just changes the string and returns it.the 4th param 
          #holds the number of words replaced.
          echo str_replace("website","site",$message,$number_of_words_replaced);
          echo "<br />";
          echo "Original String is:".$message."<br />";
          echo "Number of words replaced are :".$number_of_words_replaced."<br />";
          echo "Reversing  a string, function used strrev: ".strrev($message);
        ?>
    </body>
</html>