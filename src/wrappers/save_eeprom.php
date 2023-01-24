<?php

    $url = 'http://192.168.2.250/save_eeprom';
    $contents = file_get_contents($url);
    echo $contents;
