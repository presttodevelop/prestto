<?php
$nom =$_GET['nom'];
$target_dir = "contratos/";
/*$target_file = $target_dir . basename($_FILES["data"]["name"]);*/
$target_file = $target_dir . $nom;
$post_image = $_FILES['post_image']['name'];
$newname="image".$post_image; 
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

//DEFINEDATE
date_default_timezone_set('UTC');
$today = date("Ymd"); 
$hora = date("H:i:s");   


// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["data"]["tmp_name"]);
  if($check !== false) {
    echo "File is an image - " . $check["mime"] . ".";
    $uploadOk = 1;
  } else {
    echo "File is not an image.";
    $uploadOk = 0;
  }
}

/* Check if file already exists
if (file_exists($target_file)) {
  echo "Sorry, file already exists.";
  $uploadOk = 0;
}*/


// Allow certain file format
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
  $post_image = $_FILES['data']['name'];
  //Replace espacio
  $filename = str_replace(" ", "_", $post_image);
  //Create the new name
  $newname="data".$today.$hora; 
  $pathAndName = $target_file;
  if (move_uploaded_file($_FILES["data"]["tmp_name"], $pathAndName)) {
    echo basename($_FILES["data"]["name"]);
  } else {
    echo "Sorry, there was an error uploading your file.";
  }
}
?>