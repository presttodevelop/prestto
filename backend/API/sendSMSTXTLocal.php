<?php

/*$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://auth.sms.to/oauth/token",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS =>"{\n\t\"client_id\" : \"93DXZyRYCqgeUJ8T\",\n\t\"secret\": \"e87hNjzqPVwK8OAnZfBed9nnR8y9tPdw\",\n\t\"expires_in\": 60\n}",
  CURLOPT_HTTPHEADER => array(
    "Accept: application/json",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);
$arr = json_decode($response, TRUE);
$code= $arr['jwt'];
echo $code;*/

$phone =$_GET['phone'];
$nombre =$_GET['code'];


$curl = curl_init();
/*$phone = '+525532453689';
$codePrestto = '1111';*/

$headers = ["Content-Type: application/json",
	    "Accept: application/json",
	    "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2F1dGguc21zLnRvL29hdXRoL3Rva2VuIiwiaWF0IjoxNjE4MTgyNTU4LCJleHAiOjE2MTgxODYxNTgsIm5iZiI6MTYxODE4MjU1OCwianRpIjoiTHdMZXpKNHFLUzYyN1FHbiIsInN1YiI6MjU0MTk5LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3Iiwia2lkIjoxNjM4Mn0.6acnp-_qS-zHOUVOeLfJ020ngTYZgptNkU7ZhH0kyNY"];

$params = ['to' => $phone,
	    'message' => "Prestto confirma el codigo\n".$codePrestto,
	    //'callback_url' => "https://example.com/callback/handler",
	    'sender_id' => 'SMSto'];

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.sms.to/sms/send",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => json_encode($params),  
  CURLOPT_HTTPHEADER => $headers,
));

$response = curl_exec($curl);
curl_close($curl);
$arr = json_decode($response, TRUE);
$res= $arr['success'];
echo $res;
?>