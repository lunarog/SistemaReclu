<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
require('Config.php');

$id = $_GET["id"];
$sql = "SELECT IF(ShowSalary = 1,true,false) AS ShowSalary2,ShowSalary,v.VacancyName,v.Location,v.Description,v.ID,v.MaxSalary,v.MinSalary,v.EnglishLevel,e.Description as 'Dingles',LaborExperience,Scholarship FROM vacancy as v left join englishlevel as e on e.ID = v.EnglishLevel where v.id = $id";
$result = $conn->query($sql);
$rows = array();
if ($result->num_rows > 0) {
    if ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    print json_encode($rows);
} else {
    echo "0 results";
}
$conn->close();