<?php

/*
$json = '{
        "brightness": 255,
        "effects": [
             "BouncingBalls", "BouncingColoredBalls", "ColorWipe", "CylonBounce", "Fire", "HalloweenEyes", "NewKITT", "RainbowCycle", "RunningLights", "SnowSparkle", "Sparkle", "StarryNight", "Strobe", "TheaterChase", "TheaterChaseRainbow", "Twinkle", "TwinkleRandom"
        ],
        "colors":
            [ "Amethyst", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenrod", "DarkGray", "DarkGreen", "DarkGrey", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "Goldenrod", "Gray", "Green", "GreenYellow", "Grey", "Honeydew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenrodYellow", "LightGreen", "LightGrey", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquamarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenrod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plaid", "Plum", "PowderBlue", "Purple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "Seashell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
        ],
        "current_effect": "BouncingBalls",
        "current_error_effect": "BouncingBalls",
        "current_color": "BouncingBalls",
        "arguments": { "BallCount": "3"},
        "debug_led": "1",
        "soil_wetness": 230,
        "motion_timeout": 15,
        "display_brightness": 255,
        "display_off_brightness": 20,
        "motion_time_start": 360,
        "motion_time_stop": 0,
        "fpanel_power_timeout": 10,
        "fpanel_acknowledge_timeout": 10
    }';
*/

$json = file_get_contents("http://192.168.2.250/settings", 0, stream_context_create(["http"=>["timeout"=>20]]));
echo $json;
