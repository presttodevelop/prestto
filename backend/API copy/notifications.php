<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];

if($method == "OPTIONS") {
	die();
}

$order_amount =$_GET['order_amount'];
$id=$_POST['order_id'];
$order_id=$_GET['order_id'];
$barcode =$_GET['barcode'];
/*ini_set('display_errors', 1);*/

  try {
    $conn = new PDO('mysql:host=localhost;dbname=dbpresseguro','userpresty','A)0A3~170G9.');
     // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        //Carácteres para la contraseña
        $cadena = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890@#!€%&()";
        $longitudCadena=strlen($cadena);
        //Definimos la variable que va a contener la contraseña
        $pass = $password;
        //Se define la longitud de la contraseña, puedes poner la longitud que necesites
        //Se debe tener en cuenta que cuanto más larga sea más segura será.
        $longitudPass=10;

        //Guardar cifrada la informacion md5
        // Multiple recipients
          $to = $email; // note the comma
          // Subject
          $subject = 'CAMBIO DE PASSWORD PRESTTO';

          // Message
          $message = '

          
          ';

          // To send HTML mail, the Content-type header must be set
          $headers[] = 'MIME-Version: 1.0';
          $headers[] = 'Content-type: text/html; charset=iso-8859-1';

          // Additional headers
          $headers[] = 'From: Prestto <contacto@prestify.mx>';

          // Mail it
         /* mail($to, $subject, $message, implode("\r\n", $headers));*/
        $sql = "UPDATE payments SET status='Completado' WHERE idpayment='$order_id'";
        $conn->exec($sql);
        echo "UPDATED successfully";

    } catch (PDOException $e) 
    {
      echo 'Error: '. $e->getMessage();
    }
    $conn = null;
    ?>


