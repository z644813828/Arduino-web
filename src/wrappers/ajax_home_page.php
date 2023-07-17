<?php

    include 'secrets.php';

    $main_pc = array(
        "avgload" => rand(0, 100),
        "temp" => rand(30, 80)
    );

    $monit_data = json_decode(file_get_contents("/var/log/arduino.log"));
    $arduino_data = "-1";

    if ($monit_data->{'arduino'}) {
        $arduino_data = json_decode(file_get_contents("http://192.168.2.250/data"));
    }

    $response = array(
        "monit" => $monit_data,
        "arduino" => $arduino_data,
        "main_pc" => $main_pc
    );
    echo json_encode($response);
