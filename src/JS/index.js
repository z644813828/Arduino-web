var G = {};

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
var HTTP_REQUEST_MOTION_TIME_START = "motion_time_start"
var HTTP_REQUEST_MOTION_TIME_STOP = "motion_time_stop"
var HTTP_REQUEST_FPANEL_POWER = "fpanel_power"
var HTTP_REQUEST_FPANEL_ACKNOWLEDGE = "fpanel_acknowledge"


var T_AJAX_MONITORING = 0;
var T_MAIN_THREAD = 0;

window.addEventListener('load', function() {
	$('#BTN_START').css("display", "");
	$('#BTN_START_PASSWORD').css("display", "");
	$('#BTN_START_CONTENT').css("display", "none");
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
		has_text: false,
		date: "",
		id: "MONIT",
		shown: false,
		group: "monit",
		tag: "pc"
	},
	motion: {
		status: null,
		text: "",
		has_text: false,
		date: "",
		id: "MOTION",
		shown: false,
		group: "arduino",
		tag: "motion"
	},
	monit: {
		status: false,
		text: "",
		has_text: true,
		date: "Now",
		id: "MONIT",
		shown: false,
		group: "monit",
		tag: "summary"
	},
	arduino: {
		status: false,
		text: "",
		has_text: false,
		date: "Now",
		id: "ARDUINO",
		shown: false,
		group: "monit",
		tag: "arduino"
	},
	soil_wetness: {
		status: null,
		text: "",
		has_text: false,
		date: "Now",
		id: "SOIL_WETNESS",
		shown: false,
		group: "arduino",
		tag: "soil_wetness"
	},
	server: {
		status: false,
		text: "",
		has_text: false,
		date: "Now",
		id: "SERVER",
		shown: false,
	},
};

function mainThread() {
	function show(el) {
		if (el.status == true) {
			$(`#NOTIFICATION_${el.id}`).css("display", "none")
			$(`#ICON_${el.id}`).css("visibility", "visible")
		} else if (el.status == false) {
			$(`#NOTIFICATION_${el.id}`).css("display", "")
			$(`#NOTIFICATION_DATE_${el.id}`).text(el.date);

			if (el.text) {
				$(`#NOTIFICATION_DATE_${el.id}`).text(el.date);
				$(`#NOTIFICATION_TEXT_${el.id}`).text(el.text);
			}

			$(`#ICON_${el.id}`).css("visibility", el.shown ? "hidden" : "visible")
			el.shown = !el.shown;

			Status.server.status = true;
		} else {
			$(`#NOTIFICATION_${el.id}`).css("display", "none")
			$(`#ICON_${el.id}`).css("visibility", "hidden")
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
		switсh_nav('HOME');
	}
}



function initHandlers() {
	function accept_password() {

		if ($('#BTN_START_PASSWORD').val() != START_PASSWORD) {
			$('#BTN_START_PASSWORD').addClass("bg-danger");
			$('#BTN_START_PASSWORD').val("");
			setTimeout(() =>
				$('#BTN_START_PASSWORD').removeClass("bg-danger"), 1000);
			return;
		}

		$('#BTN_START').css("display", "none");
		$('#BTN_START_PASSWORD').css("display", "none");
		$('#BTN_START_CONTENT').css("display", "");
		document.getElementById('MAIN_LOGO').play();
		$('#BTN_START_PASSWORD').off('change');
		$('#BTN_START_PASSWORD').blur();
	}

	$('#BTN_START').click(function() {
		accept_password();
	});
	$('#BTN_START_PASSWORD').change(function() {
		accept_password();
	});

	["ARGB", "ESP8266", "HOME", "SETTINGS"].forEach((i) => {
		$(`#NAV_${i}`).click(function() {
			switсh_nav(i);
		});
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

var seq_num = 0;

function ajaxLeftPanelHandler(response) {
	function get_value(el) {
		if (response[el.group])
			return response[el.group][el.tag];
		return "";
	}

	function fill(el) {
		var value = get_value(el);
		if (el.has_text) {
			if (el.text != value) {
				el.seq_num = seq_num;
				el.date = getTime();
			}

			el.status = value == "";
			el.text = value;
		} else {
			if (el.status != value) {
				el.seq_num = seq_num;
				el.date = getTime();
			}

			el.status = value;
		}
	}

	seq_num++;

	if (Status.arduino.status != response["monit"]["arduino"]) {
		ajaxLoadSettings();
	}

	fill(Status.monit);
	fill(Status.arduino);
	fill(Status.pc);

	fill(Status.soil_wetness);
	fill(Status.motion);

	if ((Status.pc.seq_num == seq_num) ||
		(Status.motion.seq_num == seq_num))
		switch_power(Status.pc.status || Status.motion.status);


	switch_esp8266(Status.arduino.status && !response["arduino"]["forced_poweroff"]);
}
