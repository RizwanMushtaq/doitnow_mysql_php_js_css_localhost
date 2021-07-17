<?php

    include('config.php');
    //create connection
    $conn = new mysqli($host, $dbbenutzer, $dbpasswort, $dbname);
    //check connection
    if (!$conn) {
        die("Connection failed: " .mysqli_connect_error());
    }else{
        //Read Post data
        $data = json_decode(file_get_contents("php://input"));

        $B_ID = $data->B_ID;
        $Todo = $data->Todo;
        $Ordner = $data->Ordner;
        $Datum = $data->Datum;
        $Done = $data->Done;

        //Insert record
        $sql = "INSERT INTO todo (B_ID, Todo, Ordner, Datum, Done) VALUES ('".$B_ID."', '".$Todo."', '".$Ordner."', '".$Datum."', '".$Done."')";
        if(mysqli_query($conn, $sql)){
            echo 1;
        }else{
            echo 0;
        }
        die(); 
    }

?>