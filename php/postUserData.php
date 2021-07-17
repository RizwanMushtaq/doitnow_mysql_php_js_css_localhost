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

        $Benutzer = $data->Benutzer;
        $EMail = $data->EMail;
        $Passwort = $data->Passwort;

        $hash = password_hash($Passwort, PASSWORD_DEFAULT);

        //Insert record
        $sql = "INSERT INTO benutzer (Benutzer, EMail, Passwort) VALUES ('".$Benutzer."', '".$EMail."', '".$hash."')";
        if(mysqli_query($conn, $sql)){
            echo 1;
        }else{
            echo 0;
        }
        die(); 
    }

?>