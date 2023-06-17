<html lang="en">

<head>
	<title>ARGB Strip controller</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
	<script src="https://code.jquery.com/jquery-3.6.3.min.js" integrity="sha256-pvPw+upLPUjgMXY0G+8O0xUf+/Im1MZjXxxgOcBQBXU=" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap5-toggle@5.0.4/js/bootstrap5-toggle.jquery.min.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.min.js"></script>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
	<link href="https://cdn.jsdelivr.net/npm/bootstrap5-toggle@5.0.4/css/bootstrap5-toggle.min.css" rel="stylesheet">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
	<link href="https://fonts.cdnfonts.com/css/games" rel="stylesheet">

	<script src="src/JS/index.js"></script>
	<script src="src/JS/home.js"></script>
	<script src="src/JS/argb.js"></script>
	<script src="src/JS/esp8266.js"></script>
	<script src="src/JS/settings.js"></script>
	<script src="src/wrappers/php2js.js"></script>
	<!-- <script src="src/wrappers/php2js_emulator.js"></script> -->

	<link rel="stylesheet" href="style.css">
</head>

<body class="w-100 h-100 d-flex justify-content-center align-items-center">
	<input class="key" pattern="[0-9]*" inputmode="numeric"  required style="display:none; height:50px" id="BTN_START_PASSWORD">
	<button class="btn btn-lg btn-outline-danger" id="BTN_START" style="display: none; height:50px">START</button>
	<div class="w-100 h-100 m-0 w-0" id="BTN_START_CONTENT">
		<div id="CONTENT_DIV">
			<div class="d-flex w-100 pt-2">
				<i class="px-2 my-auto fa-solid fa-lg fa-signal"></i>
				<i class="px-2 my-auto fa-solid fa-lg fa-wifi"></i>
				<i id="ICON_MONIT" class="px-2 my-auto ms-4 fa-solid fa-lg fa-message"></i>
				<i id="ICON_ARDUINO" class="px-2 my-auto fa-solid fa-lg fa-microchip"></i>
				<i id="ICON_MOTION" class="px-2 my-auto fa-solid fa-lg fa-person"></i>
				<div id="TIME" class="ms-auto"></div>
				<i id="ICON_SOIL_WETNESS" class="px-2 my-auto ms-auto fa-solid fa-lg fa-leaf"></i>
				<span class="px-2 ms-4 ">100%</span>
				<i class="px-2 my-auto fa-solid fa-lg fa-battery-full"></i>
			</div>

			<div class="row" id="CONTENT_DIV_ROW">
				<div class="col-6 h-100 d-flex align-items-center">
					<div class="w-100">
						<?php include "html/left_panel.php"?>
					</div>
				</div>

				<div class="col-6 h-100 align-items-center mt-4">
					<div class="overflow-scroll h-100 mx-4">
						<div class="w-100" id="CONTENT_ARGB">
							<?php include "html/argb.php"?>
						</div>
						<div class="w-100" id="CONTENT_ESP8266">
							<?php include "html/esp8266.php"?>
						</div>
						<div class="w-100" id="CONTENT_HOME">
							<?php include "html/home.php"?>
						</div>
						<div class="w-100" id="CONTENT_SETTINGS">
							<?php include "html/settings.php"?>
						</div>
					</div>
				</div>
			</div>
		</div>

		<?php
        $data = array(
            array(
                "id" => "POWEROFF",
                "icon" => "power-off",
                "display" => true,
                "active" => false,
                "color" => "danger"
            ),
            array(
                "id" => "POWERON",
                "icon" => "power-off",
                "display" => false,
                "active" => false,
                "color" => "danger"
            ),
            array(
                "id" => "ARGB",
                "icon" => "lightbulb",
                "display" => true,
                "active" => false,
                "color" => "normal"
            ),
            array(
                "id" => "HOME",
                "icon" => "house",
                "display" => true,
                "active" => true,
                "color" => "normal"
            ),
            array(
                "id" => "ESP8266",
                "icon" => "microchip",
                "display" => true,
                "active" => false,
                "color" => "normal"
            ),
            array(
                "id" => "SETTINGS",
                "icon" => "sliders",
                "display" => true,
                "active" => false,
                "color" => "normal"
            ),
        );
						?>

		<div class="navbar navbar-dark bg-dark navbar-expand fixed-bottom">
			<ul class="navbar-nav nav-justified w-100">
				<?php foreach ($data as $key => $value) : ?>
					<li class="nav-item" id="NAV_<?php echo $value["id"];?>"
						<?php if (!$value["display"]) {
						    echo "style=\"display:none\"";
						}  ?>
						>
						<a class="nav-link text-<?php echo $value["color"]; ?> <?php if ($value["active"]) {
						    echo "active";
						} ?>" >
						<i class="fa-solid fa-<?php echo $value["icon"]; ?>" ></i>
						<?php echo $value["id"]; ?>
					</a>
				</li>
			<?php endforeach; ?>
		</ul>
	</div>
</div>
</body>

</html>
