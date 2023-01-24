<?php

    $type = $_GET['type'];
    $data = $_GET['data'];

    $url = 'http://192.168.2.250/get?' . $type . "=" . $data;
    $contents = file_get_contents($url);
    echo $url . " => " . $contents;
