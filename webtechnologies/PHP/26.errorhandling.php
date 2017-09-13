<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Error handling in PHP</title>
    </head>
    <body>
        <p>When an error occurs . THe php engine shows certain message for the error. While this error message is understood by some but it can be chnaged and presented in a human readable format.To create an error handler we first create the handler function then set the handler using set_error_handler.</p>
        <?php
            #errno specifies the fatality of the error.Creating error handler function
            function errorHandler($errno,$errstr,$errfile,$errline,$errcontext){
                echo "<p><strong>Error:</strong>   on line [$errno] : $errline : $errstr</p>";
            }
            #setting error handler function.All the errors occuring beyond this would be handled by this error handler.
            set_error_handler("errorHandler");
            echo filesize("random.txt");  
        ?>
        <p>Custom error handlers: triggering custom errors which are specific to the application</p>
        <?php
            #Fucntion that triggers the error.
            function calculateFileSize(){
                if(!file_exists("randomtext.txt")){
                    trigger_error("file cannot be found",E_USER_WARNING);
                    return false;
                }else{
                    return filesize("randomtext.txt");
                }
            }
            #handler for the custom error.Which logs to the error log file.Only the first two parameters are mandatory.
            function customErrorHandler($errno,$errstr,$errfile,$errline,$errcontext){
                #Build error message.
                $errormessage = "Error [$errno] on".date("d/m/y H:i:s")."\r\n";
                $errormessage.= "Details: ".$errstr."\r\n";
                $errormessage .= "Variables :".print_r($errcontext,true)."\r\n";
                #Path where the logs are to be written,Message_type which is the second parameter which specifies the how the logging is handled(mail,php system logger,append to file)
                error_log($errormessage,3,"C:\\uploads\\logs\\error.log");
            }
        #set error handler.
            set_error_handler("customErrorHandler");
            calculateFileSize();
        ?>
    </body>
</html>