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
