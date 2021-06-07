<?php
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
    header("Allow: GET, POST, OPTIONS, PUT, DELETE");
    $method = $_SERVER['REQUEST_METHOD'];

    if($method == "OPTIONS") {
        die();
    }

    $servername = "localhost";
    $username = "userpresty";
    $password = "A)0A3~170G9.";
    $dbname = "dbpresseguro";


    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM registrosprestamo";
    $result = $conn->query($sql);


    if ($result->num_rows > 0) { 
        $delimiter = ",";
        $filename = "registros_" . date('Y-m-d') . ".csv";
        
        //create a file pointer
        $f = fopen('php://memory', 'w');
        
        //set column headers
        $fields = array('ID ','FECHA','NOMBRE','APELLIDOPATERNO','APELLIDOMATERNO','CELULAR','EMAIL','ACEPTOTERMINOSSMS','HISTORIAL','CONOCIMIENTO','GENERO','CURP','RFC','CP','ESTADO','MUNICIPIO','CIUDAD','COLONIA','CALLE','NUM_EXT','NUM_INT','PARENTESCO','REF_APPELIDO','TEL_REFERENCIA','NIVELESTUDIOS','SALARIONETO','OCUPACION','DETALLEOCUPACION','DEUDAS','FRECUENCIAPAGO','CLABE','BANCOCLABE','TITULARTARJETA','FECHAVENCIMIENTO','NUMEROTARJETA','BANCOTARJETA','MONTOSOLICITADO','TIEMPODEPAGO','TOTALDELPRESTAMO','ACEPTOTERMINOS','IMAGEN1','IMAGEN2','ACEPTOCONTRATO','CONTRASENA','IDCONTRATO','CONTRATO','TIMER','IDSMS','IDPAGO','SUGERENCIA','STATUS');
        fputcsv($f, $fields, $delimiter);
        
        //output each row of the data, format line as csv and write to file pointer
        while($row = $result->fetch_assoc()){

            $id = $row["id"];
            $fecha = $row["fecha"];
            $nombre = $row["nombre"];
            $apellidopaterno=$row["apellidopaterno"];
            $apellidopaternoapellidomaterno=$row["apellidomaterno"];
            $celular=$row["celular"];
            $email=$row["email"];
            $aceptoterminoscondicionescel=$row["aceptoterminoscondicionescel"];
            $historialcrediticio=$row["historialcrediticio"];
            $conocimientodelcliente=$row["conocimientodelcliente"];
            $genero=$row["genero"];
            $curp=$row["curp"];
            $rfc=$row["rfc"];
            $cp=$row["cp"];
            $estado=$row["estado"];
            $municipio=$row["municipio"];
            $ciudad=$row["ciudad"];
            $colonia=$row["colonia"];
            $calle=$row["calle"];
            $numeroexterior=$row["numeroexterior"];
            $numerointerior=$row["numerointerior"];
            $parentesco=$row["parentesco"];
            $referenciapellido=$row["referenciapellido"];
            $telfijoreferencia=$row["telfijoreferencia"];
            $telfijoreferencia=$row["nivelestudios"];
            $salarioneto=$row["salarioneto"];
            $ocupacion=$row["ocupacion"];
            $detalleocupacion=$row["detalleocupacion"];
            $deudas=$row["deudas"];
            $frecuenciadepago=$row["frecuenciadepago"];
            $clabe=$row["clabe"];
            $bancoclabe=$row["bancoclabe"];
            $titulartarjeta=$row["titulartarjeta"];
            $fechadevencimiento=$row["fechadevencimiento"];
            $numerotarjeta=$row["numerotarjeta"];
            $bancotarjeta=$row["bancotarjeta"];
            $dineroquenecesita=$row["dineroquenecesita"];
            $fechadepagoen=$row["fechadepagoen"];
            $totalaprestar=$row["totalaprestar"];
            $aceptoterminoscondicionescontrato=$row["aceptoterminoscondicionescontrato"];
            $pictures1=$row["pictures1"];
            $pictures2=$row["pictures2"];
            $aceptocontrato=$row["aceptocontrato"];
            $contrasena=$row["contrasena"];
            $idcontrato=$row["idcontrato"];
            $contrato=$row["contrato"];
            $timer=$row["timer"];
            $idsms=$row["idsms"];
            $idpago=$row["idpago"];
            $sugerencia=$row["sugerencia"];
            $status=$row["status"];


            $user_arr = array($id ,$fecha,$nombre ,$apellidopaterno,$apellidopaternoapellidomaterno,$celular,$email,$aceptoterminoscondicionescel,$historialcrediticio,$conocimientodelcliente,$genero,$curp,$rfc,$cp,$estado,$municipio,$ciudad,$colonia,$calle,$numeroexterior,$numerointerior,$parentesco,$referenciapellido,$telfijoreferencia,$telfijoreferencia,$salarioneto,$ocupacion,$detalleocupacion,$deudas,$frecuenciadepago,$clabe ,$bancoclabe,$titulartarjeta,$fechadevencimiento,$numerotarjeta,$bancotarjeta,$dineroquenecesita,$fechadepagoen,$totalaprestar,$aceptoterminoscondicionescontrato,$pictures1,$pictures2,$aceptocontrato,$contrasena,$idcontrato,$contrato,$timer,$idsms,$idpago,$sugerencia,$status);
            /*$lineData = array($row['id'], $row['name'], $row['email'], $row['phone'], $row['created'], $status);*/
            fputcsv($f, $user_arr, $delimiter);
        }
        
        //move back to beginning of file
        fseek($f, 0);
        
        //set headers to download file rather than displayed
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="' . $filename . '";');
        
        //output all remaining data on a file pointer
        fpassthru($f);
    }


