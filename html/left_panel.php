<?php
$data = array(
    "monit" => array(
        "id" => "MONIT",
        "icon" => "message",
        "text" => "Can't fetch monit data",
        "display" => "none"
    ),
    "arduino" => array(
        "id" => "ARDUINO",
        "icon" => "microchip",
        "text" => "Arduino is not connected",
        "display" => "none"
    ),
    "server" => array(
        "id" => "SERVER",
        "icon" => "server",
        "text" => "All systems active",
        "display" => "none"
    ),
    "soil_wetness" => array(
        "id" => "SOIL_WETNESS",
        "icon" => "leaf",
        "text" => "Soil wetness reached a critical point",
        "display" => "none"
    ),
);
?>

<video id="MAIN_LOGO" class="w-100 h-100" autoplay muted loop>
	<source src="utils/rog_logo.mp4" type="video/mp4">
	Your browser does not support HTML video.
</video>

<div class="toast-container w-50 pl-4" data-original-class="toast-container p-3"  >
<?php foreach ($data as $key => $value) : ?>
	<div class="toast fade show bg-dark" id="NOTIFICATION_<?php echo $value["id"]; ?>"  style="display:<?php echo $value["display"]; ?>">
		<div class="toast-header bg-dark">
			<i class="px-2 fa-solid fa-lg fa-<?php echo $value["icon"]; ?>"></i>
			<strong class="me-auto"> <?php echo $value["id"]; ?> </strong>
			<small id="NOTIFICATION_DATE_<?php echo $value["id"]; ?>">11 mins ago</small>
		</div>
		<div class="toast-body" id="NOTIFICATION_TEXT_<?php echo $value["id"]; ?>">
			<?php echo $value["text"]; ?>
		</div>
	</div>
<?php endforeach; ?>
</div>
