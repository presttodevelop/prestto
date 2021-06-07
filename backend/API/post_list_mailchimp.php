<?php

/*DEVELOPER:CARINA GONZALEZ
EMAIL: ecarina.gonzalez@gmail.com
DATE:11.01.21
VERSION:1.0
*/
// API to mailchimp ########################################################

  header('Access-Control-Allow-Origin: *');
  header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
  header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
  header("Allow: GET, POST, OPTIONS, PUT, DELETE");
  $method = $_SERVER['REQUEST_METHOD'];

  if($method == "OPTIONS") {
    die();
  }

//Get information to send the FrontEnd
$email =$_GET['email'];
$name = '';

$authToken = '5627bf9b1cb35ccc0787f13965cd024e-us3';
$list_id = 'df2e1fdb45';
//$dc = substr($api_key,strpos($api_key,'-')+1); // us5, us8 etc

// URL to connect: Remember de url list, is the  join to de suffix of authToken example: us3
//echo $url;
// API to mailchimp ########################################################
// Data to send to the API
$postData = array(
    "email_address" => $email,
    "status" => "subscribed",
    "merge_fields" => array(
    "FNAME"=> $name,
    "PHONE"=> '')
);

// Setup cURL
$ch = curl_init('https://us3.api.mailchimp.com/3.0/lists/'.$list_id.'/members/');
curl_setopt_array($ch, array(
    CURLOPT_POST => TRUE,
    CURLOPT_RETURNTRANSFER => TRUE,
    CURLOPT_HTTPHEADER => array(
        'Authorization: apikey '.$authToken,
        'Content-Type: application/json'
    ),
    CURLOPT_POSTFIELDS => json_encode($postData)
));
// Send the request
$response = curl_exec($ch);
$arr = json_decode($response, TRUE);
return $response_code = $arr['status'];
echo $arr['status'];
echo $arr['title'];
echo $arr['detail'];
// #######################################################################
?>


