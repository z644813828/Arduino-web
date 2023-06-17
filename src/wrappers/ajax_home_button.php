<?php

    include 'secrets.php';

    $PROGRAM_NAME = "";

    switch ($_GET['data']) {
        case "DISCORD":
            $PROGRAM_NAME = "notepad.exe"
            break;
        case "TWITCH":
            break;
        case "STEAM":
            break;
    }

    $cmd = "rdesktop -u $LOGIN -p $PASSWORD -a 16 -A -s \"cmd /c start $PROGRAM_NAME\" $IP"
    $output = shell_exec($cmd);

    echo $cmd . " => " . $output;
