<!DOCTYPE html>
<html>
    <head>
        <meta charset='utf-8'>
        <title>File operatiosns in PHP</title>
        <style>
            h3{
                font-size: 15px;
                color: #355aed;
            }
        </style>
    </head>
    <body>
        <p>File operations are used to manage and handle files (open,read,write and close)</p>
        <h3 class="headings">Open file: To open files we use the fopen function : This opens the file and return an handle which is of resource type. </h3>
        <?PHP
            #check if file exists 
            $fileName = "sample.txt";
            if(file_exists($fileName)){
                $myfile = fopen($fileName,"r");
            }else{
                echo "<p>File does not exist</p>";
            }
            #close files.
            fclose($myfile);
        ?>
        <h3>Read file using the read function:This returns the file content as string the number of bytes defined.</h3>
        <?php
            $fileHandle =  fopen($fileName,"r") or die("Unable to find the file or open it.");
            $fileContent = fread($fileHandle,filesize("sample.txt"));
            var_dump($fileContent);
            fclose($fileHandle)
        ?>
        <h3>Read file contents using the file_get_contents  method: this method will return the file contents as fread but there is no need to open file </h3>
        <?php
            $fileContent=file_get_contents($fileName) or die("Unable to open file");
            var_dump($fileContent);
        ?>
        <h3>File reading using the file fucntion:This reads the complete file content in an array.</h3>
        <?php
            $fileContentInanArray = file($fileName) or die("Unable to open or read files");
            var_dump($fileContentInanArray);
        ?>
        <h3>Writing to the file using the fwrite function: This function overwrites the existing contents of the file.</h3>
        <?php
            $file_to_write = fopen("sample.txt","w") or die("Unable to open file");
            fwrite($file_to_write,"This is a sample text");
            $file_contents = file($fileName);
            var_dump($file_contents);
        ?>
        <h3>Writing to the file using the file_put_contents function: This function overwrites the existing contents of the file and in order to append to the file we would need to pass the second parameter as FILE_APPEND</h3>
        <?php
            $file_to_write = file_put_contents("sample.txt","\nthis content is appended ",FILE_APPEND) or die("Unable to open file");
            $file_contents = file($fileName);
            var_dump($file_contents);
        ?>
    </body>
</html>