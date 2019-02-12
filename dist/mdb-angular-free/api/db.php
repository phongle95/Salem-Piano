<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    $servername = "localhost";
    $username = "hoctien1_salempiano";
    $password = "Lehongphong1";
    $dbname = "hoctien1_salempiano";
    // $username = "id4668236_phong";
    // $password = "Language1."; 
    // $dbname = "id4668236_piano";
    // $username = "root";
    // $password = ""; 
    // $dbname = "piano";
    $conn = new mysqli($servername, $username, $password, $dbname);
    mysqli_set_charset($conn,"utf8"); 
?>