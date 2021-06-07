<?php


$phone =$_GET['phone'];
$nombre =$_GET['code'];

//Your username.
$username = 'bluemessag59306';
$password = 'FIsg5NEf';


$headers = [
       "Content-Type: application/json",
	    "Accept: application/json",
      'Authorization: Basic '. base64_encode($username.':'.$password) 
    ];

$url = 'https://sms-pp.sapmobileservices.com/cmn/bluemessag59306/bluemessag59306.sms';
 
//Initiate cURL.
$ch = curl_init($url);

/*$phone = '+525532453689';
$codePrestto = '1111';*/

$params = [
            'Subject' => 'TestPrestto',
            'List' => +525532453689,
            'Text' => "Prestto confirma el codigo\n 65",
            'MobileNotification' => YES
          ];

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
?>