<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
require('Config.php');

$pname          = $_GET["value1"];
$pdesc          = $_GET["value2"];
$pwhere         = $_GET["value3"];
$psalmin        = $_GET["value4"];
$psalmax        = $_GET["value5"];
$englishlvl     = $_GET["value6"];
$pexperiencia   = $_GET["value7"];
$pescolaridad   = $_GET["value8"];
$pconocimientos = $_GET["value9"];
$vshow          = $_GET["value10"];
$ShowSalary     = $_GET["value11"];


$sql = "INSERT INTO vacancy (VacancyName,Location,MaxSalary,MinSalary,EnglishLevel,Description,LaborExperience,Scholarship,Created,CreatedBy,Modified,ModifiedBy,Estatus,ShowSalary) VALUES ('$pname','$pwhere',$psalmax,$psalmin,$englishlvl,'$pdesc','$pexperiencia','$pescolaridad',NOW(),1,NOW(),1,1,$ShowSalary) ";
if ($conn->query($sql) === TRUE) {
    $last_id = $conn->insert_id;
    echo "New record created successfully. Last inserted ID is: " . $last_id;
    $conocimiento = explode('||',$pconocimientos);
    for($i = 0 ; $i < $vshow  ; $i++ ){
        $conindiv = explode('&&',$conocimiento[$i]);
        $sqlcon = "INSERT INTO profile (Vacancy,Description,Percentage,Type,Status) value ($last_id,'".$conindiv[0]."',".$conindiv[1].",".$conindiv[2].",1)";
        echo $sqlcon;
        if ($conn->query($sqlcon) === TRUE) {
            echo "New record created";
        }
    }
}
$conn->close();

/* else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}*/

?>