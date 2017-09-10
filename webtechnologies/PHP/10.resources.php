<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Objects in PHP</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Resources are variables that hold the reference to the external resources like a file</p>
        <?php
          echo "fopen is the function used to open the file which takes in the path of the file and the mode in which the file needs to be opened.";
          $myfile = fopen("sample.txt","r");
          echo "to read the file we use the fread function which takes the handler to the resource and the number of bytes to read";
          var_dump($myfile);
          echo "<br/>";
          //filesize function returns the total size of the file and accepts the path as parameter.
          echo fread($myfile,filesize("sample.txt"));
        ?>
    </body>
</html>