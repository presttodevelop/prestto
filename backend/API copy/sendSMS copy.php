<?php
 
//API Url
$url = 'https://sms-pp.sapmobileservices.com/cmn/bluemessag59306/bluemessag59306.sms';
//Your username.
$username = 'bluemessag59306';
$password = 'FIsg5NEf';
//Specify the username and password using the CURLOPT_USERPWD option.
curl_setopt($curl, CURLOPT_USERPWD, base64_encode($username . ":" . $password));

//Tell cURL to return the output as a string instead
//of dumping it to the browser.
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

//Execute the cURL request.
$response = curl_exec($ch);
 
//Check for errors.
if(curl_errno($ch)){
    //If an error occured, throw an Exception.
    throw new Exception(curl_error($ch));
}

//Print out the response.
echo $response;
 
/*The JSON data.
$jsonData = array(
    "user" =>"pruebasbw",
    "ord_id" =>"pruebadepaycash",
    "ord_amount" =>12,
    "ord_concept" =>"",
    "notify_url" =>"https://prestto.mx/",
    "send_receipt" =>true,
    "customer"  =>  [
      "user_id" =>"carinagr",
      "name" =>"carina gonzalez ruiz",
      "phone" =>"5532453689",
      "email" =>"ecarina.gonzalez@gmail.com",
      "ip" =>""
    ],
    "quantity" =>1,
    "unit_price" =>10,
    "amount" =>10,
    "description" =>"test"
);

//Encode the array into JSON.
$jsonDataEncoded = json_encode($jsonData);
 
//Tell cURL that we want to send a POST request.
curl_setopt($ch, CURLOPT_POST, 1);
 
//Attach our encoded JSON string to the POST fields.
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);
 
//Set the content type to application/json
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 
 
//Execute the request
$result = curl_exec($ch);
echo $result;*/

