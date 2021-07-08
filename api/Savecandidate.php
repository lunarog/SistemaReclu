<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
require('Config.php');

$Cnombre    = $_GET["value1"];
$Capellidos = $_GET["value2"];
$Cestado    = $_GET["value3"];
$Ccorreo    = $_GET["value4"];
$Cdireccion = $_GET["value5"];
$Ctelefono  = $_GET["value6"];
$idvac      = $_GET["value7"];
$Lastjob    = $_GET["value8"];
$Salary     = $_GET["value9"];
$Comentaries= $_GET["value10"];

$sql = "INSERT INTO candidate (Name,Lastname,Location,Email,Address,Phone,Vacancy,Date,Lastjob,Salary,Comentaries) VALUES ('$Cnombre','$Capellidos','$Cestado','$Ccorreo','$Cdireccion','$Ctelefono',$idvac,NOW(),'$Lastjob','$Salary','$Comentaries')";
echo $sql;
if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo "New record created successfully. Last inserted ID is: " . $last_id;
}
$conn->close();



$SUBJECT="";
$BODY="";
?>