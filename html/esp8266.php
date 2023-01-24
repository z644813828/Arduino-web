<div class="d-flex">
	<button class="btn btn-outline-danger" id="SOIL_WETNESS_BTN">
		<i class="fa-solid fa-upload"></i>
		Set
	</button>
	<div class="input-group mx-2">
		<div class="input-group-prepend">
			<span class="input-group-text">SoilWetness</span>
		</div>
		<input type="text" class="form-control" aria-describedby="basic-addon1" id="SOIL_WETNESS">
	</div>
</div>
<br>
<div class="d-flex">
	<button class="btn btn-outline-danger" id="MOTION_TIMEOUT_BTN">
		<i class="fa-solid fa-upload"></i>
		Set
	</button>
	<div class="input-group mx-2">
		<div class="input-group-prepend">
			<span class="input-group-text">Motion timeout</span>
		</div>
		<input type="text" class="form-control" aria-describedby="basic-addon1" id="MOTION_TIMEOUT">
	</div>
</div>
<div class="mt-4">
	<div>Brightness</div>
	<div class="form-group d-flex">
		<button class="btn btn-outline-danger" id="DISPLAY_BRIGHTNESS_BTN">
			<i class="fa-solid fa-upload"></i>
			Set
		</button>
		<input type="range" class="form-control-range mx-2 flex-fill" id="DISPLAY_BRIGHTNESS" name="brightness" min="10" max="410" step="5">
		<label id="DISPLAY_BRIGHTNESS_LABEL"></label>
	</div>
</div>
<div class="mt-4">
	<div>OFF Brightness</div>
	<div class="form-group d-flex">
		<button class="btn btn-outline-danger" id="DISPLAY_OFF_BRIGHTNESS_BTN">
			<i class="fa-solid fa-upload"></i>
			Set
		</button>
		<input type="range" class="form-control-range mx-2 flex-fill" id="DISPLAY_OFF_BRIGHTNESS" name="brightness" min="10" max="410" step="5">
		<label id="DISPLAY_OFF_BRIGHTNESS_LABEL"></label>
	</div>
</div>
<div class="row">
	<div class="col-6">
		<div class="mt-4 w-100">
			<button class="btn btn-outline-danger w-100 d-flex" id="START_DISPLAY_TEST">
				<i class="fa-solid fa-display my-auto"></i>
				<span class="mx-auto"> Start display test </span>
			</button>
		</div>
		<div class="mt-1 w-100">
			<button class="btn btn-outline-danger w-100 d-flex" id="SAVE_EEPROM2">
				<i class="fa-solid fa-hard-drive my-auto"></i>
				<span class="mx-auto"> Save EEPROM </span>
			</button>
		</div>
		<div class="mt-1 w-100">
			<button class="btn btn-outline-danger w-100 d-flex" id="REBOOT">
				<i class="fa-solid fa-arrow-rotate-right my-auto"></i>
				<span class="mx-auto"> Reboot </span>
			</button>
		</div>
	</div>
</div>

<script type="text/javascript">
$("#DISPLAY_BRIGHTNESS").on("change", function() {
	$("#DISPLAY_BRIGHTNESS_LABEL").text($(this).val());
})
$("#DISPLAY_OFF_BRIGHTNESS").on("change", function() {
	$("#DISPLAY_OFF_BRIGHTNESS_LABEL").text($(this).val());
})
</script>
