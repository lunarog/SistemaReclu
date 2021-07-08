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
$idvac          = $_GET["value11"];
$ShowSalary          = $_GET["value12"];

$sql = "UPDATE
            vacancy
        SET
            VacancyName = '$pname',
            Location= '$pwhere',
            MaxSalary= $psalmax,
            MinSalary= $psalmin,
            EnglishLevel = $englishlvl,
            Description = '$pdesc',
            LaborExperience = '$pexperiencia',
            Scholarship = '$pescolaridad',
            Modified = NOW(),
            ShowSalary = $ShowSalary
        WHERE
            id = $idvac ";
if ($conn->query($sql) === TRUE) {
    echo "Record updated!!";
}

$sqlDEL = "DELETE FROM profile WHERE Vacancy = $idvac ";
if ($conn->query($sqlDEL) === TRUE) {
    echo "PROFILE DELETED!!";
}

$conocimiento = explode('||', $pconocimientos);
for ($i = 0; $i < $vshow; $i++) {
    $conindiv = explode('&&', $conocimiento[$i]);
    $sqlcon = "INSERT INTO profile (Vacancy,Description,Percentage,Type,Status) value ($idvac,'" . $conindiv[0] . "'," . $conindiv[1] . "," . $conindiv[2] . ",1)";
    echo $sqlcon;
    if ($conn->query($sqlcon) === TRUE) {
        echo "New record created";
    }
}
