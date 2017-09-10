<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Objects in PHP</title>
    </head>
    <body>
        <a href='/~mirbash1/PHP/'>Home</a>
        <p>Objects are custom data types which are created using a template called class:A class consists of properties and methods;</p>
        <?php
           echo "<p>To define the class we use the keyword class followed by the class name.</p>";
           class car{
               #Properties of the class.Properties marked public are accesible within class and outside as well.
               public $make='Ford';
               #Properties marked private are only accessible with in the class.
               private  $status = 'Off';
               #Methods: Behaviour of the class.
               function changeStatus(){
                   //To refer to the current object we use $this.
                   $this->status = 'on';
               }
               function getStatus(){
                   return $this->status;
               }
           }
            #to create an object of the class we use the  new keyword followed by the class name.
            $myCar = new car;
            echo "Current state of the object:";
            var_dump($myCar);
            #note:While acccessing the properties of the class we would not need to prepend the '$' symbol. 
            echo $myCar->make;
            echo "<br/>";
            /*the following line would throw an error.Since private variable cannot be accessed out side the class.Inorder to access this we would need to provide a method
            $myCar->$status; */  
            //To acess the variable we use the method.
            echo $myCar->getStatus();
            $myCar->changeStatus();
            var_dump($myCar);
        ?>
    </body>
</html>