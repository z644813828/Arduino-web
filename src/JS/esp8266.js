function initHandlersESP8266() {
	function getVal(input) {
		var val = input.val();
		if (!val)
			val = input.attr('placeholder');
		return val;
	}
	$('#SOIL_WETNESS_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_SOIL_WETNESS, getVal($("#SOIL_WETNESS")));
	});

	$('#MOTION_TIMEOUT_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_MOTION_TIMEOUT, getVal($("#MOTION_TIMEOUT")));
	});

	$('#START_DISPLAY_TEST').click(function() {
		ajaxSetValue(HTTP_REQUEST_DISPLAY_TEST, "0");
	});

	$('#SAVE_EEPROM').click(function() {
		ajaxSaveEeprom();
	});

	$('#REBOOT').click(function() {
		ajaxReboot();
	});
	$('#DISPLAY_BRIGHTNESS_BTN').off('click');
	$('#DISPLAY_BRIGHTNESS_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_DISPLAY_BRIGHTNESS, $("#DISPLAY_BRIGHTNESS").val());
	});
	$('#DISPLAY_OFF_BRIGHTNESS_BTN').off('click');
	$('#DISPLAY_OFF_BRIGHTNESS_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_DISPLAY_OFF_BRIGHTNESS, $("#DISPLAY_OFF_BRIGHTNESS").val());
	});
}

function ajaxLoadSettingsESP8266(response) {
	$('#SOIL_WETNESS').attr('placeholder', response.soil_wetness);
	$('#MOTION_TIMEOUT').attr('placeholder', response.motion_timeout);

	$('#DISPLAY_BRIGHTNESS_LABEL').text(response.display_brightness);
	$('#DISPLAY_BRIGHTNESS').val(response.display_brightness);

	$('#DISPLAY_OFF_BRIGHTNESS_LABEL').text(response.display_off_brightness);
	$('#DISPLAY_OFF_BRIGHTNESS').val(response.display_off_brightness);
}
