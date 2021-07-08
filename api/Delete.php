<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
require('Config.php');

$idvac = $_GET["id"];

$sqlDEL = "DELETE FROM vacancy WHERE id = $idvac ";
if ($conn->query($sqlDEL) === TRUE) {
    echo "Record DELETED!!";
}

$sqlDEL = "DELETE FROM profile WHERE Vacancy = $idvac ";
if ($conn->query($sqlDEL) === TRUE) {
    echo "Record DELETED!!";
}
