<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>Including PHP files</title>
    </head>
    <body>
        <p>To segregate and have separate files for the different features built we would have to write seprate files and collate them together.Inorder to do this we can use include function.</p>
        <?PHP
            echo "Including environment info file";
            include("environmentinfo.php");
        ?>
    </body>
</html>