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

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  $stmt = $conn->prepare("SELECT id, nombre FROM registrosprestamo WHERE email='".$email."'");
  $stmt->execute();

  // set the resulting array to associative
  $result = $stmt->setFetchMode(PDO::FETCH_ASSOC);
  $data = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($data);

} catch(PDOException $e) {
  echo "Error: " . $e->getMessage();
}
$conn = null;

?>