<?php
if(isset($_POST['sendbtn']))
{   $name =$_POST['Name'];
    $fromemail = $_POST['Email'];
    $mailto = "sejalverma1327@gmail.com";
    $message=$_POST['Query'];

    $headers = 'From: '.$fromemail . "\r\n";
    
    
    $body = "name : ".$name. "\r\n" .
    		"Message : " . $message;
          
   if(mail($to, $subject, $body , $headers))
   {
     echo "Mail Sent!";
   }else
   {
     echo "Failed To Send Mail";
    }
}
?>