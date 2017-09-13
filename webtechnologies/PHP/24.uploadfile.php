<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Upload file</title>
    </head>
    <body>
        <?php
            if(isset($_POST['submit'])){
                #File parameters obtained from the uploaded file.
                $file_name = $_FILES["file"]["name"];
                $file_type = $_FILES["file"]["type"];
                $temp_location = $_FILES["file"]["tmp_name"];
                $file_size =$_FILES["file"]["size"];
                $error = $_FILES["file"]["error"];

                $uploadLocation = "C:\\uploads\\".$file_name;

                #error messages
                $FILE_SIZE_ERROR = "<p>File size is beyond the accepted limit of 3MB.</p>";
                $FILE_FORMAT_NOT_ACCEPTED = "<p>File format not accepted</p>";
                $FILE_ALREADY_EXISTS = "<p>file already exists</p>";
                $NO_FILE_TO_UPLOAD = "<p>No file to upload</p>";
                #accepted file formats
                $accepted_file_formats = array("pdf"=>"application/pdf","txt"=>"text/plain");
                $error_message = "";
            
                if($error>0){
                    $error_message.=$NO_FILE_TO_UPLOAD;
                } 
                if($file_size > 3*1024*1024){
                    $error_message.=$FILE_SIZE_ERROR;
                }
                if (!in_array($file_type,$accepted_file_formats)){
                    $error_message.=$FILE_FORMAT_NOT_ACCEPTED;
                }if(file_exists($uploadLocation)){
                    $error_message.=$FILE_ALREADY_EXISTS;
                }
                if($error_message){
                    echo "<p>Error while uploading</p> $error_message";
                }else{
                    if(move_uploaded_file($temp_location,$uploadLocation)){
                        header("Location:environmentinfo.php");
                    }else{
                        echo "<p>Unable to upload file try againg later</p>";
                    }
                }                   
            }
        ?>
        <form method="post" enctype="multipart/form-data">
            <label for="file">Select file to upload</label>
            <input type="file" name="file" id="file">
            <input type="submit" name ="submit" value="Upload">
        </form>
    </body>
</html>