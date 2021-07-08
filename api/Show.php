<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
require('Config.php');


$sql = "SELECT VacancyName,Location,Description,ID,ShowSalary FROM vacancy where Estatus = 1 ";
if (isset($_GET["Filter1"])) {
    $sql .= " AND VacancyName like '%" . $_GET["Filter1"] . "%' ";
}
if (isset($_GET["Filter2"])) {
    $sql .= " AND Location like '%" . $_GET["Filter2"] . "%' ";
}
$result = $conn->query($sql);
$rows = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $rows[] = $row;
    }
    print json_encode($rows);
}
$conn->close();