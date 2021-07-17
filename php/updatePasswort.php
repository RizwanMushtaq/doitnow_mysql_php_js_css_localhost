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
        $Passwort = $data->Passwort;

        $hash = password_hash($Passwort, PASSWORD_DEFAULT);

        $benutzerQuery = " SELECT Benutzer FROM benutzer WHERE Benutzer='$Benutzer' ";
        $dataBenutzer = mysqli_query($conn, $benutzerQuery);
        $dataBenutzerResult = mysqli_fetch_assoc($dataBenutzer);
        if($dataBenutzerResult){
            $dataBenutzerString = implode($dataBenutzerResult);
        }

        if($dataBenutzerResult){

            //Insert record
            $sql = "UPDATE benutzer SET Passwort = '$hash' WHERE Benutzer='$Benutzer'";
            if(mysqli_query($conn, $sql)){
                echo 1;
            }else{
                echo 0;
            }
            die();
            
            
        }else{
            echo 'incorrect_benutzer'; //incorrect username
            die();
        }

        
        die(); 
    }

?>