<?php
 
//API Url
$url = 'https://www.banwire.com/api/1/payment/paycash';
 
//Initiate cURL.
$ch = curl_init($url);
 
$user_id =$_GET['iduser'];
$name =$_GET['nombre'];
$phone =$_GET['cel'];
$ord_amount =$_GET['amount'];
$email =$_GET['email'];


//The JSON data.
$jsonData = array(
    "user" =>"ConciliadorPrestto",
    "ord_id" =>"pruebadepaycash",
    "ord_amount" =>$ord_amount,
    "ord_concept" =>"",
    "notify_url" =>"https://prestto.mx/api/notifications.php",
    "send_receipt" =>true,
    "customer"  =>  [
      "user_id" =>$user_id ,
      "name" =>$name,
      "phone" =>$phone,
      "email" =>$email,
      "ip" =>""
    ],
    "quantity" =>1,
    "unit_price" =>$ord_amount,
    "amount" =>$ord_amount,
    "description" =>"prestto"
);

//Encode the array into JSON.
$jsonDataEncoded = json_encode($jsonData);
 
//Tell cURL that we want to send a POST request.
curl_setopt($ch, CURLOPT_POST, true);
 
//Attach our encoded JSON string to the POST fields.
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
 
//Set the content type to application/json
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
 
//Execute the request
$result = curl_exec($ch);
echo $result;

