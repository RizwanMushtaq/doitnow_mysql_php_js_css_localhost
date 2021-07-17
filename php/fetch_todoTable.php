<?php

    include('config.php');
    //create connection
    $conn = new mysqli($host, $dbbenutzer, $dbpasswort, $dbname);
    //check connection
    if (!$conn) {
        die("Connection failed: " .mysqli_connect_error());
    }else{
        $sql = "SELECT * FROM todo";
        $data = mysqli_query($conn,$sql);
        $response = array();
        while($row = mysqli_fetch_assoc($data)){
            $response[] = array(
                "B_ID" => $row['B_ID'],
                "Todo" => $row['Todo'],
                "Ordner" => $row['Ordner'],
                "Datum" => $row['Datum'],
                "Done" => $row['Done'],
            );
        }
        echo json_encode($response);
        die(); 
    }

?>