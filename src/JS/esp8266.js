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
	$('#MOTION_TIME_BTN').click(function() {
		function getMinutes(str) {
			var str_ = str.split(":");
			return parseInt(str_[0]) * 60 + parseInt(str_[1]);
		}
		ajaxSetValue(HTTP_REQUEST_MOTION_TIME_START, getMinutes($("#MOTION_TIME_START").val()));
		ajaxSetValue(HTTP_REQUEST_MOTION_TIME_STOP, getMinutes($("#MOTION_TIME_STOP").val()));
	});
	$('#FPANEL_POWER_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_ACPI_POWER, $("#FPANEL_POWER").val());
	});
	$('#FPANEL_ACKNOWLEDGE_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_ACPI_ACKNOWLEDGE, $("#FPANEL_ACKNOWLEDGE").val());
	});
}

function ajaxLoadSettingsESP8266(response) {
	$('#SOIL_WETNESS').attr('placeholder', response.soil_wetness);
	$('#MOTION_TIMEOUT').attr('placeholder', response.motion_timeout);

	$('#DISPLAY_BRIGHTNESS_LABEL').text(response.display_brightness);
	$('#DISPLAY_BRIGHTNESS').val(response.display_brightness);

	$('#DISPLAY_OFF_BRIGHTNESS_LABEL').text(response.display_off_brightness);
	$('#DISPLAY_OFF_BRIGHTNESS').val(response.display_off_brightness);

	$('#FPANEL_POWER').attr('placeholder', response.fpanel_power_timeout);
	$('#FPANEL_ACKNOWLEDGE').attr('placeholder', response.fpanel_acknowledge_timeout);

	function toHoursAndMinutes(totalMinutes) {
		const hours = Math.floor(totalMinutes / 60);
		const minutes = totalMinutes % 60;

		function padToTwoDigits(num) {
			return num.toString().padStart(2, '0');
		}

		return `${padToTwoDigits(hours)}:${padToTwoDigits(minutes)}`;
	}


	$('#MOTION_TIME_START').val(toHoursAndMinutes(response.motion_time_start));
	$('#MOTION_TIME_STOP').val(toHoursAndMinutes(response.motion_time_stop));
}
