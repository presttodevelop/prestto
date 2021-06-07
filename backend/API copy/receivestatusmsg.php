<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];

if($method == "OPTIONS") {
	die();
}

ini_set('display_errors', 1);

  try {
   // $conn = new PDO('mysql:host=localhost;dbname=dbpresseguro','userpresty','A)0A3~170G9.');
     // set the PDO error mode to exception
    //$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $status =$_GET['status'];
        $message =$_GET['message'];
        $orderid =$_GET['orderid'];


        echo $status,$message, $orderid  ;
        
      http_response_code(200);
    } catch (PDOException $e) 
    {
      http_response_code(405);
      echo 'Error: '. $e->getMessage();
    }
    $conn = null;
    ?>


