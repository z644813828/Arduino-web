function ajaxHomePage() {
	var response = {
		"status": true,
		"pc": true,
		"monit": "etckeeper",
		"arduino": false,
		"soil_wetness": false
	};
	ajaxHomePageHandler(response);
}
