function initHandlersHome() {
	$(".button-deck").click(function() {
		var value = $(this).prop("value");
		if (!value)
			value = $(this).text();

		console.log(value); //DBGPRINT
	});
}

function ajaxHomePageHandler(response) {
	ajaxLeftPanelHandler(response);
}
