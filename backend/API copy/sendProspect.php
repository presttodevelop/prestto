<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];

if($method == "OPTIONS") {
	die();
}

/*ini_set('display_errors', 1);*/

  try {
    $conn = new PDO('mysql:host=localhost;dbname=dbpresseguro','userpresty','A)0A3~170G9.');
     // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $nombre = $_GET['nombre'];
        $apellidopaterno = $_GET['apellidopaterno'];
        $apellidomaterno = $_GET['apellidomaterno'];
        $celular= $_GET['celular'];
        $email = $_GET['email'];
        $status = 'Prospect';
        

    if(!empty($celular)) {
        echo "Saving Prospect.<br />";
        $sql = "INSERT INTO `prospectos` (`id`, `fecha`, `nombre`, `apellidopaterno`, `apellidomaterno`, `celular`, `email`, `status`) 
                  VALUES (NULL, CURRENT_TIMESTAMP, '".$nombre."','".$apellidopaterno."','".$apellidomaterno."','".$celular."','$email','$status')";
                          $conn->exec($sql);
                          echo "New record created successfully";
                        }
                else {
                  echo "ERROR TO INSERT POST";
                }
    } catch (PDOException $e) 
    {
      echo 'Error: '. $e->getMessage();
    }
    $conn = null;
    ?>


