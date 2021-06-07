<?php
 
//API Url
$url = 'https://sms-pp.sapmobileservices.com/cmn/bluemessag59306/bluemessag59306.sms';
//Your username.
$username = 'bluemessag59306';
$password = 'FIsg5NEf';
 
/*he JSON data.*/
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
    "phone" =>"+525532220207",
    "email" =>"ecarina.gonzalez@gmail.com",
    "ip" =>""
  ],
  "quantity" =>223,
  "unit_price" =>10,
  "amount" =>10,
  "description" =>"PRESTTO212"
);

 // Initializes a new cURL session
 $curl = curl_init($url);
 
 // Set the CURLOPT_RETURNTRANSFER option to true
 curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
 
 // Set the CURLOPT_POST option to true for POST request
 curl_setopt($curl, CURLOPT_POST, true);
 
 //Specify the username and password using the CURLOPT_USERPWD option.
curl_setopt($curl, CURLOPT_USERPWD, base64_encode($username . ":" . $password));
 // Set the request data as JSON using json_encode function
 curl_setopt($curl, CURLOPT_POSTFIELDS,  json_encode($data));
 
 // Set custom headers for RapidAPI Auth and Content-Type header
 curl_setopt($curl, CURLOPT_HTTPHEADER, [
   'Content-Type: application/json'
 ]);
 
 // Execute cURL request with all previous settings
 $response = curl_exec($curl);
 echo $response;
 // Close cURL session
 curl_close($curl);
 


?>