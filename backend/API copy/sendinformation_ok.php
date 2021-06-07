<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
$method = $_SERVER['REQUEST_METHOD'];

if($method == "OPTIONS") {
	die();
}

ini_set('display_errors', 1);

  try {
    $conn = new PDO('mysql:host=localhost;dbname=dbpresseguro','userpresty','A)0A3~170G9.');
     // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $nombre =$_GET['nombre'];
        $apellidopaterno =$_GET['apellidopaterno'];
        $apellidomaterno =$_GET['apellidomaterno'];
        $diadenacimiento =$_GET['diadenacimiento'];
        $mesdenacimiento =$_GET['mesdenacimiento'];
        $anodenacimiento =$_GET['anodenacimiento'];
        $edad = '25';
        $estadodenacimiento =$_GET['estadodenacimiento'];
        $curp =$_GET['curp'];
        $celular =$_GET['celular'];
        $otrotelefono =$_GET['otrotelefono'];
        $callet =$_GET['callet'];
        $numeroexterior =$_GET['numeroexterior'];
        $cp = $_GET['cp'];
        $estado = $_GET['estado'];
        $municipio = $_GET['municipio'];
        $colonia= $_GET['colonia'];
        $salario= $_GET['salario'];
        $industria = $_GET['industria'];
        $paganporbanco = $_GET['paganporbanco'];
        $salariofamiliar = $_GET['salariofamiliar'];
        $tienestarjeta = $_GET['tienestarjeta'];
        $ultimosdigitostarjeta = $_GET['ultimosdigitostarjeta'];
        $creditoautomotriz = $_GET['creditoautomotriz'];
        $calificacionhistorial = $_GET['calificacionhistorial'];
        $aceptovalidarburo =  $_GET['aceptovalidarburo'];
        $usodelprestamos = $_GET['usodelprestamos'];
        $email = $_GET['email'];
        $contrasena = $_GET['contrasena'];
        $fecha = date("Y-m-d H:i:s");
        $timeform = $_GET['timeform']; 
        $sugerencia = 'Piensalo';
        $aceptoaviso = $_GET['aceptoaviso']; 

        /*echo $nombre,$apellidopaterno,$apellidopaterno,$diadenacimiento,$mesdenacimiento,$mesdenacimiento,$anodenacimiento,$edad,$estadodenacimiento,$curp,$celular,$otrotelefono,$callet,$numeroexterior,$cp,$estado,$salario,$industria,$industria,$paganporbanco,$salariofamiliar,$tienestarjeta,$ultimosdigitostarjeta,$creditoautomotriz,$calificacionhistorial,$aceptovalidarburo,$usodelprestamos,$email,$contrasena,$fecha,$timeform,$sugerencia,$aceptoaviso;*/

     if(!empty($celular)) {
        echo "Saving on Database.<br />";
        $sql = "INSERT INTO `informacion` (`id`, `nombre`, `apellidopaterno`, `apellidomaterno`, `diadenacimiento`, `mesdenacimiento`, `anodenacimiento`, `edad`, `estadodenacimiento`, `curp`, `celular`, `otrotelefono`, `callet`, `numeroexterior`, `cp`, `estado`, `municipio`, `colonia`, `salario`, `industria`, `paganporbanco`, `salariofamiliar`, `tienestarjeta`, `ultimosdigitostarjeta`, `creditoautomotriz`, `calificacionhistorial`, `aceptovalidarburo`, `usodelprestamos`, `email`, `contrasena`, `fecha`, `timeform`, `sugerencia`, `aceptoaviso`) 
                VALUES (NULL, '".$nombre."','".$apellidopaterno."','".$apellidomaterno."','".$diadenacimiento."','$mesdenacimiento','".$anodenacimiento."','".$edad."','".$estadodenacimiento."','".$curp."','".$celular."','".$otrotelefono."','".$callet."','".$numeroexterior."','".$cp."','".$estado."','".$municipio."','".$colonia."','".$salario."','".$industria."','".$paganporbanco."','".$salariofamiliar."','".$tienestarjeta."','".$ultimosdigitostarjeta."','".$creditoautomotriz."','".$calificacionhistorial."','".$aceptovalidarburo."','".$usodelprestamos."','".$email."','".$contrasena."',CURRENT_TIMESTAMP,'".$timeform."','".$sugerencia."','".$aceptoaviso."')";
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


