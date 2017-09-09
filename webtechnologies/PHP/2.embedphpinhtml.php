<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>embed PHP in HTML</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <h1>Embed PHP in HTML</h1>
        <p>
            <!-- Opening php tag. -->
            <?PHP
            #To embed PHP in HTML we would have to have the php tags.All the code goes between this tag.
                echo "This is a message inside p tag."
            ?>
            <!-- Above is a closing php tag. -->
        </p>
        <?PHP
            #let's print html using php
            echo "<p>This is another paragraph.</p>"
        ?>
    </body>
</html>