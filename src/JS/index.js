var HTTP_REQUEST_COLOR = "color"
var HTTP_REQUEST_EFFECT = "effect"
var HTTP_REQUEST_ERROR_EFFECT = "error_effect"
var HTTP_REQUEST_BRIGHTNESS = "brightness"
var HTTP_REQUEST_EFFECT_ARG = "effect_arg_"
var HTTP_REQUEST_SOIL_WETNESS = "soil_wetness"
var HTTP_REQUEST_LED_DEBUG = "debug_led"
var HTTP_REQUEST_DISPLAY_TEST = "display_test"
var HTTP_REQUEST_MOTION_TIMEOUT = "motion_timeout"
var HTTP_REQUEST_REBOOT = "reboot"
var HTTP_REQUEST_DISPLAY_BRIGHTNESS = "display_brightness"
var HTTP_REQUEST_DISPLAY_OFF_BRIGHTNESS = "display_off_brightness"


var T_AJAX_MONITORING = 0;
var T_MAIN_THREAD = 0;

window.addEventListener('load', function() {
	if (window.chrome) {
		$('#BTN_START').css("display", "");
		$('#BTN_START_CONTENT').css("display", "none");
	}
	switсh_nav('HOME');
	initHandlers();
	start_ajax_monitoring();
	T_MAIN_THREAD = setInterval(function() {
		mainThread();
	}, 500);
});

function getTime() {
	return new Date().toTimeString("hh::mm").slice(0, 5);
}

var Status = {
	pc: {
		status: null,
		text: "",
		date: "",
		id: "MONIT",
		shown: false
	},
	motion: {
		status: null,
		text: "",
		date: "",
		id: "MOTION",
		shown: false
	},
	monit: {
		status: false,
		text: "",
		date: "Now",
		id: "MONIT",
		shown: false
	},
	arduino: {
		status: false,
		text: "",
		date: "Now",
		id: "ARDUINO",
		shown: false
	},
	soil_wetness: {
		status: false,
		text: "",
		date: "Now",
		id: "SOIL_WETNESS",
		shown: false
	},
	server: {
		status: false,
		text: "",
		date: "Now",
		id: "SERVER",
		shown: false
	},
};

function mainThread() {
	function show(el) {
		$(`#NOTIFICATION_${el.id}`).css("display", el.status ? "none" : "")
		if (el.status) {
			$(`#ICON_${el.id}`).css("visibility", "visible")
		} else {
			$(`#NOTIFICATION_DATE_${el.id}`).text(el.date);

			if (el.text) {
				$(`#NOTIFICATION_DATE_${el.id}`).text(el.date);
				$(`#NOTIFICATION_TEXT_${el.id}`).text(el.text);
			}

			$(`#ICON_${el.id}`).css("visibility", el.shown ? "hidden" : "visible")
			el.shown = !el.shown;

			Status.server.status = true;
		}
	}

	Status.server.status = false;

	show(Status.monit);
	show(Status.arduino);
	show(Status.soil_wetness);
	show(Status.server);
	show(Status.motion);


	$('#TIME').text(getTime());
}

function start_ajax_monitoring() {
	console.log(arguments.callee.name);

	function f() {};
	var t = 0;
	// switch (Settings.ACTIVE_PAGE) {
	// case Web_page.MAIN_PAGE:
	f = ajaxHomePage;
	// 	break;
	// 	case Web_page.MODULES:
	// 		f = ajax_modules_page;
	// 	break;
	// 	case Web_page.MONITORING:
	// 		f = ajax_monitoring_page;
	// 	break;
	// 	default:
	// 	f = ajax_detect_modules;
	// 	break;
	// }
	T_AJAX_MONITORING = setInterval(function() {
		f();
	}, 500);
}

function stop_ajax_monitoring() {
	console.log(arguments.callee.name);
	clearInterval(T_AJAX_MONITORING);
}

function switch_power(sw) {
	$('#CONTENT_DIV').css("display", sw ? "" : "none");
	$('#NAV_ARGB').css("visibility", sw ? "visible" : "hidden");
	$('#NAV_ESP8266').css("visibility", sw ? "visible" : "hidden");
	$('#NAV_HOME').css("visibility", sw ? "visible" : "hidden");
	$('#NAV_SETTINGS').css("visibility", sw ? "visible" : "hidden");
	$('#NAV_POWEROFF').css("display", sw ? "" : "none");
	$('#NAV_POWERON').css("display", sw ? "none" : "");
}

function switсh_nav(nav) {
	function exec(id) {
		$('#CONTENT_' + id).css("display", id == nav ? "" : "none");
		$('#NAV_' + id).children(":first").removeClass("active");
		if (id == nav)
			$('#NAV_' + id).children(":first").addClass("active");

	}

	if ($('#NAV_' + nav).children(":first").hasClass("disabled"))
		return;;

	exec('ARGB');
	exec('ESP8266');
	exec('HOME');
	exec('SETTINGS');
}

function switch_esp8266(sw) {
	if (sw) {
		$('#NAV_ARGB').children(":first").removeClass("disabled");
		$('#NAV_ESP8266').children(":first").removeClass("disabled");
	} else {
		$('#NAV_ARGB').children(":first").addClass("disabled");
		$('#NAV_ESP8266').children(":first").addClass("disabled");
	}
}



function initHandlers() {
	$('#BTN_START').click(function() {
		$('#BTN_START').css("display", "none");
		$('#BTN_START_CONTENT').css("display", "");
		document.getElementById('MAIN_LOGO').play();
	});

	$('#NAV_ARGB').click(function() {
		switсh_nav('ARGB');
	});
	$('#NAV_ESP8266').click(function() {
		switсh_nav('ESP8266');
	});
	$('#NAV_HOME').click(function() {
		switсh_nav('HOME');
	});
	$('#NAV_SETTINGS').click(function() {
		switсh_nav('SETTINGS');
	});

	$('#NAV_POWEROFF').click(function() {
		switch_power(false);
	});
	$('#NAV_POWERON').click(function() {
		switch_power(true);
	});

	initHandlersHome();
	initHandlersArgb();
	initHandlersSettings();
	initHandlersESP8266();
}

function ajaxLeftPanelHandler(response) {
	function fill(el, tag, has_text) {
		if (has_text) {
			if (el.text != response[tag])
				el.date = getTime();

			el.status = response[tag] == "";
			el.text = response[tag];
		} else {
			if (el.status != response[tag])
				el.date = getTime();

			el.status = response[tag];
		}
	}


	if (Status.arduino.status != response["arduino"]) {
		ajaxLoadSettings();
	}

	fill(Status.monit, "monit", true);
	fill(Status.soil_wetness, "soil_wetness", false);
	fill(Status.arduino, "arduino", false);
	fill(Status.pc, "pc", false);
	fill(Status.motion, "motion", false);

	switch_power(Status.pc.status || Status.motion.status);
	switch_esp8266(Status.arduino.status);
}
