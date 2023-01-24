<?php

    $file = fopen("/var/log/arduino.log", "r") or die("Unable to open file!");
    $file_content = fread($file, filesize("/var/log/arduino.log"));
    fclose($file);

    $data = preg_split("/\r\n|\n|\r/", $file_content);

    $response = array(
        "pc" => $data[0] != "0",
        "arduino" => $data[1] != "0",
        "monit" => $data[2],
        "soil_wetness" => false,
        "motion" => false
    );
    echo json_encode($response);
