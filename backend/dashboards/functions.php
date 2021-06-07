<?php

    $type = $_POST['type'];
    $status = $_POST['status'];
    $id = $_POST['id'];
    $conn = new PDO('mysql:host=localhost;dbname=dbpresseguro','userpresty','A)0A3~170G9.');
     // set the PDO error mode to exception
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    

    if($type == 'update') {
        update();
    }
    else if ($type == 'rejected') {
        rejected();
    }
    else if($type == 'updatepayment'){
        updatepayment();
    }
    else if($type == 'rejectedpayment'){
        rejectedpayment();
    }

    function update(){
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
        $id = $_POST['id'];
        echo $id;
        $sql = "UPDATE registrosprestamo SET statuscliente='aprobado' WHERE id='$id' ";
        $result = $conn->query($sql);



        echo $result;
        if ($result  > 0) {
          // output data of each row
            while($row = $result->fetch_assoc()) {
            echo json_encode($row);
            }
        } else {
            echo "0 results";
        }
        $conn->close();

                // The message
        $message = "carina";

        // In case any of our lines are larger than 70 characters, we should use wordwrap()
        $message = wordwrap($message, 70, "\r\n");

        // Send
        mail('ecarina.gonzalez@gmail.com', 'prest', $message);


    }
    function updatepayment(){

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
        $id = $_POST['id'];
        echo $email;
        $sql = "UPDATE payments SET status='completado' WHERE id='$id' ";
        $result = $conn->query($sql);
        echo $result;
        if ($result  > 0) {
          // output data of each row
            while($row = $result->fetch_assoc()) {
            echo json_encode($row);
            }
        } else {
            echo "0 results";
        }
        $conn->close();
     
    }

    function rejected(){
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
        $id = $_POST['id'];
        echo $id;
        $sql = "UPDATE registrosprestamo SET statuscliente='rechazado' WHERE id='$id' ";
        $result = $conn->query($sql);
        echo $result;
        if ($result  > 0) {
          // output data of each row
            while($row = $result->fetch_assoc()) {
            echo json_encode($row);
            }
        } else {
            echo "0 results";
        }
        $conn->close();
    }
    function rejectedpayment(){

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
        $id = $_POST['id'];
        echo $id;
        $sql = "UPDATE payments SET status='rechazado' WHERE id='$id' ";
        $result = $conn->query($sql);
        echo $result;
        if ($result  > 0) {
          // output data of each row
            while($row = $result->fetch_assoc()) {
            echo json_encode($row);
            }
        } else {
            echo "0 results";
        }
        $conn->close();
     
    }

    function sendEmail(){

    }

?>