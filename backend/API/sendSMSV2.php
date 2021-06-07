<?php

//$phone =$_GET['phone'];
//$nombre =$_GET['code'];


$curl = curl_init();
//$phone = '+525532453689';
//$codePrestto = '1111';

//Your username.
$username = 'bluemessag59306';
$password = 'FIsg5NEf';


$headers = [
    'Content-Type: application/json',
    'Accept: application/json',
    'Authorization: Basic '. base64_encode($username.':'.$password)
];

/*The JSON data.*/
$params =[
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
];


curl_setopt_array($curl, array(
                CURLOPT_URL => "https://sms-pp.sapmobileservices.com/cmn/bluemessag24572/bluemessag24572.sms",
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
echo $response;
curl_close($curl);
$arr = json_decode($response, TRUE);
echo $arr;
$res= $arr['success'];
echo $res;
?>