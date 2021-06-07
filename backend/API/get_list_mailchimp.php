<?php

/*
DEVELOPER:CARINA GONZALEZ
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

// Settings Prestto
$mailChimpAPIKey = '5627bf9b1cb35ccc0787f13965cd024e-us3';
$list_id = 'df2e1fdb45';//Get mailchimp UI
$count  = 50;



$url = "https://us3.api.mailchimp.com/3.0/lists/df2e1fdb45/members";
$ch = curl_init();

$header = array(
  'Authorization: apikey '.$mailChimpAPIKey,
  'Content-Type: application/json'
);
// pass header variable in curl method
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,1);
curl_setopt($ch,CURLOPT_CONNECTTIMEOUT, 4);
$json = curl_exec($ch);
$arr = json_decode($json, TRUE);
//echo $json;
var_dump($arr["members"])
// #######################################################################
?>


