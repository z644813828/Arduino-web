function initHandlersHome() {
	$(".button-deck").click(function() {
		var value = $(this).prop("value");
		if (!value)
			value = $(this).text();

		var html = $(this).html();
		console.log(value); //DBGPRINT
		$(this).html('');
		$(this).css('visibility', 'hidden');

		setTimeout(() => {
			$(this).html(html);
			$(this).css('visibility', 'visible');
		}, 2000);
	});
}

function ajaxHomePageHandler(response) {
	ajaxLeftPanelHandler(response);
}
