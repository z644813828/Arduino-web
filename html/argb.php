<div>
	<div>Theme</div>
	<div class="d-flex">
		<button class="btn btn-outline-danger" id="ARGB_COLOR_BTN">
			<i class="fa-solid fa-upload"></i>
			Set
		</button>
		<select class="form-control mx-2" id="ARGB_COLOR">
		</select>
	</div>
</div>
<div class="mt-4">
	<div>Brightness</div>
	<div class="form-group d-flex">
		<button class="btn btn-outline-danger" id="ARGB_BRIGHTNESS_BTN">
			<i class="fa-solid fa-upload"></i>
			Set
		</button>
		<input type="range" class="form-control-range mx-2 flex-fill" id="ARGB_BRIGHTNESS" name="brightness" min="0" max="255" step="5">
		<label id="ARGB_BRIGHTNESS_LABEL"></label>
	</div>
</div>
<div class="mt-4">
	<div>Effect</div>
	<div class="d-flex">
		<button class="btn btn-outline-danger" id="ARGB_EFFECT_BTN">
			<i class="fa-solid fa-upload"></i>
			Set
		</button>
		<select class="form-control mx-2" id="ARGB_EFFECT">
		</select>
	</div>
</div>
<div class="mt-4">
	<div>Error Effect</div>
	<div class="d-flex">
		<button class="btn btn-outline-danger" id="ARGB_ERROR_EFFECT_BTN">
			<i class="fa-solid fa-upload"></i>
			Set
		</button>
		<select class="form-control mx-2" id="ARGB_ERROR_EFFECT">
		</select>
	</div>
</div>
<div class="mt-4"> Effect arguments</div>
<div id="ARGB_EFFECT_ARGUMENTS"></div>
<br>
<div>Debug LED strip</div>
<div class="d-flex">
	<button class="btn btn-outline-danger" id="ARGB_DEBUG_BTN">
		<i class="fa-solid fa-upload"></i>
		Set
	</button>
	<div class="mx-2">
		<input id="ARGB_DEBUG" type="checkbox" data-toggle="toggle"
		data-onlabel="<i class='fa fa-play'></i> Start"
		data-offlabel="<i class='fa fa-pause'></i> Stop"
		data-onstyle="danger" id="debug_led_toggle">
	</div>
</div>
<br>
<div class="row">
	<div class="col-6">
		<div class="mt-1 w-100">
			<button class="btn btn-outline-danger w-100 d-flex" id="SAVE_EEPROM">
				<i class="fa-solid fa-hard-drive my-auto"></i>
				<span class="mx-auto"> Save EEPROM </span>
			</button>
		</div>
	</div>
</div>

<script type="text/javascript">
$("#ARGB_BRIGHTNESS").on("change", function() {
	$("#ARGB_BRIGHTNESS_LABEL").text($(this).val());
})
</script>
