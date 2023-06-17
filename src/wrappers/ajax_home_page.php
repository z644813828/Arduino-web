<?php

    include 'secrets.php';

    $main_pc = array(
        "avgload" => rand(0, 100),
        "temp" => rand(30, 80)
    );

    $response = array(
        "monit" => json_decode(file_get_contents("/var/log/arduino.log")),
        "arduino" => json_decode(file_get_contents("/var/log/arduino_data.log")),
        "main_pc" => $main_pc
        // "arduino" => json_decode(file_get_contents("http://192.168.2.250/data"))
    );
    echo json_encode($response);
