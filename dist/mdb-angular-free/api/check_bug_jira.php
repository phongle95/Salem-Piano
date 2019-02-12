<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"); 
header('Access-Control-Allow-Headers: Origin, Content-Type, Authorization, X-Auth-Token');
header('Access-Control-Allow-Methods: GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS');
$data = json_decode(file_get_contents("php://input"));
include "db.php"; 
$sql = "INSERT INTO LOGIN(username, password) values('$data->check', '$data->bug') ";
 
//excute sql 
$result = $conn->query($sql);

// echo $sql."<br>";
// echo json_encode($result);
if (isset($result->num_rows) && ($result->num_rows > 0)) {
    // output data of each row
    // echo "pho";
    $data = array();
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    // echo json_encode($result);
    echo "null";
} 

$conn->close();
?>
