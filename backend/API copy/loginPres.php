<?php


class TableRows extends RecursiveIteratorIterator {
  function __construct($it) {
    parent::__construct($it, self::LEAVES_ONLY);
  }

  function current() {
    return "<td style='width:150px;border:1px solid black;'>" . parent::current(). "</td>";
  }

  function beginChildren() {
    echo "<tr>";
  }

  function endChildren() {
    echo "</tr>" . "\n";
  }
}

$servername = "localhost";
$username = "userpresty";
$password = "A)0A3~170G9.";
$dbname = "dbpresseguro";

$email =$_GET['email'];
$id = $_GET['id'];
try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

   if($id) {
    $stmt = $conn->prepare("SELECT * FROM registrosprestamo WHERE id='".$id."'");
    $stmt->execute();

    // set the resulting array to associative
    $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
    if($data) {
      echo json_encode($data);
    }
    else {
      echo 400;
    }

   }
   else {
      $stmt = $conn->prepare("SELECT id, email, contrasena FROM registrosprestamo WHERE email='".$email."'");
      $stmt->execute();

      // set the resulting array to associative
      $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
      $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
      if($data) {
        $data = json_encode($data);
        echo $data;
      }
      else {
        echo 400;
      }
    }
    } catch(PDOException $e) {
      echo "400";
    }
$conn = null;

?>