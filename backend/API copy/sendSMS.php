<?php
 
//API Url
//$url = 'https://sms-ci.sapmobileservices.com/cmn/';

$url = 'https://sms-pp.sapmobileservices.com/cmn/bluemessag24572/bluemessag24572.sms';
//Your username.
$username = 'bluemessag59306';
$password = 'FIsg5NEf';
 
/*The JSON data.*/
$data = array(
  "user" =>"pruebasbw",
  "ord_id" =>"pruebadepaycash",
  "ord_amount" =>12,
  "ord_concept" =>"",
  "notify_url" =>"https://prestto.mx/response",
  "send_receipt" =>true,
  "customer"  =>  [
    "user_id" =>"carinagr",
    "name" =>"carina gonzalez ruiz",
    "phone" =>"+525532453689",
    "email" =>"ecarina.gonzalez@gmail.com",
    "ip" =>""
  ],
  "quantity" =>223,
  "unit_price" =>10,
  "amount" =>10,
  "description" =>"PRESTTO212"
);


$headers = array(
    'Authorization: Basic '. base64_encode($username.':'.$password),
);

 // Initializes a new cURL session
 $curl = curl_init($url);

 // Set the CURLOPT_RETURNTRANSFER option to true
 curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
 
 // Set the CURLOPT_POST option to true for POST request
 curl_setopt($curl, CURLOPT_POST, true);

curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_BASIC);

 // Set the request data as JSON using json_encode function
 curl_setopt($curl, CURLOPT_POSTFIELDS,  json_encode($data));
 
 // Execute cURL request with all previous settings
 $response = curl_exec($curl);
 echo $response;
 // Close cURL session
 curl_close($curl);

?>