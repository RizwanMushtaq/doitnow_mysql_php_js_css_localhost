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

        $benutzerPasswortQuery = " SELECT Passwort FROM benutzer WHERE Benutzer='$Benutzer' ";
        $dataBenutzerPasswort = mysqli_query($conn, $benutzerPasswortQuery);
        $dataBenutzerPasswortResult = mysqli_fetch_assoc($dataBenutzerPasswort);
        // print_r($dataBenutzerPasswortResult);
        
        $benutzerQuery = " SELECT Benutzer FROM benutzer WHERE Benutzer='$Benutzer' ";
        $dataBenutzer = mysqli_query($conn, $benutzerQuery);
        $dataBenutzerResult = mysqli_fetch_assoc($dataBenutzer);
        if($dataBenutzerResult){
            $dataBenutzerString = implode($dataBenutzerResult);
        }
        

        $benutzerB_IDQuery = " SELECT B_ID FROM benutzer WHERE Benutzer='$Benutzer' ";
        $dataB_ID = mysqli_query($conn, $benutzerB_IDQuery);
        $dataB_IDResult = mysqli_fetch_assoc($dataB_ID);
        if($dataB_IDResult){
            $dataB_IDString = implode($dataB_IDResult);
        }

        if($dataBenutzerResult){
            if($dataBenutzerPasswortResult){
                $dataBenutzerPasswortResultString = implode($dataBenutzerPasswortResult);
                // print_r($dataBenutzerPasswortResultString);
                $verify = password_verify($Passwort, $dataBenutzerPasswortResultString);

                if($verify){
                    echo $dataB_IDString; //correct password, correct username
                }else {
                    echo 'incorrect_passwort'; //incorrect passworts, correct username
                }
                die();
            }else{
                echo 'incorrect_benutzer'; //incorrect username
                die();
            }
        }else{
            echo 'incorrect_benutzer'; //incorrect username
            die();
        }
            
    }
    
?>