<?php

$phone =$_GET['phone'];
$nombre =$_GET['code'];
$msg=$_GET['code'];


$phonecomplete = '"'.'+'.$phone.'"';
echo $phonecomplete;

$msgcomplete = '"'.'Bienvenido a Prestto, para continuar con tu solicitud ingresa el siguiente código de verificación:'.$msg.'"';
echo $msgcomplete;

$auth_basic = base64_encode("flavio@prestto.mx:1Zn3ZbMbvswr");
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://api.labsmobile.com/json/send",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => '{"message":'.$msgcomplete.' , "tpoa":"Sender","recipient":[{"msisdn":'.$phonecomplete.' }]}',
  CURLOPT_HTTPHEADER => array(
    "Authorization: Basic ".$auth_basic,
    "Cache-Control: no-cache",
    "Content-Type: application/json"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  echo $response;
}
?>