function ajaxHomePage(cb) {
	$.ajax({
		url: 'src/wrappers/ajax_home_page.php',
		dataType: "json",
		success: function(response) {
			ajaxHomePageHandler(response);
		},
		timeout: 10000,
		async: true,
		error: function(response) {
			console.log("ERROR: AJAX:" + response.status);
		}
	});
}

function ajaxLoadSettings() {
	$.ajax({
		url: 'src/wrappers/load_settings.php',
		dataType: "json",
		success: function(response) {
			console.log(response); //DBGPRINT
			ajaxLoadArgbHandler(response);
			ajaxLoadSettingsHandler(response);
			ajaxLoadSettingsESP8266(response);
		},
		timeout: 10000,
		async: true,
		error: function(response) {
			console.log("ERROR: AJAX:" + response.status);
		}
	});
}

function ajaxSetValue(_type, _data) {
	console.log(_type, _data); //DBGPRINT
	$.ajax({
		url: 'src/wrappers/set_value.php',
		data: {
			type: _type,
			data: _data
		},
		success: function(response) {
			console.log(response);
			ajaxLoadSettings();
		},
		timeout: 10000,
		async: true,
		error: function(response) {
			console.log("ERROR: AJAX:" + response.status);
			ajaxLoadSettings();
		}
	});
}

function ajaxHomeButton(_data) {
	console.log(_type, _data); //DBGPRINT
	$.ajax({
		url: 'src/wrappers/ajax_home_button.php',
		data: {
			data: _data
		},
		success: function(response) {
			console.log(response);
			ajaxLoadSettings();
		},
		timeout: 10000,
		async: true,
		error: function(response) {
			console.log("ERROR: AJAX:" + response.status);
			ajaxLoadSettings();
		}
	});
}


function ajaxSaveEeprom() {
	console.log(arguments.callee.name); //DBGPRINT
	$.ajax({
		url: 'src/wrappers/save_eeprom.php',
		success: function(response) {
			console.log(response);
		},
		timeout: 10000,
		async: true,
		error: function(response) {
			console.log("ERROR: AJAX:" + response.status);
		}
	});
}

function ajaxReboot() {
	console.log(arguments.callee.name); //DBGPRINT
	$.ajax({
		url: 'src/wrappers/reboot.php',
		success: function(response) {
			console.log(response);
		},
		timeout: 10000,
		async: true,
		error: function(response) {
			console.log("ERROR: AJAX:" + response.status);
		}
	});
}
