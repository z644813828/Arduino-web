function initHandlersArgb() {
	$('#ARGB_COLOR_BTN').off('click');
	$('#ARGB_COLOR_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_COLOR, $("#ARGB_COLOR").val());
	});
	$('#ARGB_BRIGHTNESS_BTN').off('click');
	$('#ARGB_BRIGHTNESS_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_BRIGHTNESS, $("#ARGB_BRIGHTNESS").val());
	});
	$('#ARGB_EFFECT_BTN').off('click');
	$('#ARGB_EFFECT_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_EFFECT, $("#ARGB_EFFECT").val());
	});
	$('#ARGB_ERROR_EFFECT_BTN').off('click');
	$('#ARGB_ERROR_EFFECT_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_ERROR_EFFECT, $("#ARGB_ERROR_EFFECT").val());
	});
	$('#ARGB_DEBUG_BTN').off('click');
	$('#ARGB_DEBUG_BTN').click(function() {
		ajaxSetValue(HTTP_REQUEST_LED_DEBUG, $("#ARGB_DEBUG").prop("checked") ? 1 : 0);
	});
	$('.ARGB_EFFECT_ARGUMENT_BTN').off('click');
	$(".ARGB_EFFECT_ARGUMENT_BTN").click(function() {
		var input = $(this).siblings().find("input");
		var val = input.val();
		if (!val)
			val = input.attr('placeholder');

		var name = input.attr('name');
		ajaxSetValue(name, val);
	});
	$('#SAVE_EEPROM2').click(function() {
		ajaxSaveEeprom();
	});
}

function ajaxLoadArgbHandler(response) {
	$('#ARGB_COLOR').empty();
	response.colors.forEach(i => {
		var selected = (i == response.current_color) ? "selected" : "";
		$('#ARGB_COLOR').append(`<option value=${i}" ${selected}>${i}</option>`);
	});

	$('#ARGB_BRIGHTNESS_LABEL').text(response.brightness);
	$('#ARGB_BRIGHTNESS').val(response.brightness);

	$('#ARGB_EFFECT').empty();
	response.effects.forEach(i => {
		var selected = (i == response.current_effect) ? "selected" : "";
		$('#ARGB_EFFECT').append(`<option value=${i}" ${selected}>${i}</option>`);
	});

	$('#ARGB_ERROR_EFFECT').empty();
	response.effects.forEach(i => {
		var selected = (i == response.current_error_effect) ? "selected" : "";
		$('#ARGB_ERROR_EFFECT').append(`<option value=${i}" ${selected}>${i}</option>`);
	});

	$('#ARGB_EFFECT_ARGUMENTS').empty();
	var i = 0;
	for (const [key, value] of Object.entries(response.arguments)) {
		var form = `
		<div class="d-flex mt-2 form-outline form-dark">
			<button class="ARGB_EFFECT_ARGUMENT_BTN btn btn-outline-danger" id="ARGB_ERROR_EFFECT_BTN">
				<i class="fa-solid fa-upload"></i>
				Set
			</button>
	        <div class="input-group mx-2">
	            <div class="input-group-prepend">
	                <span class="input-group-text" id="basic-addon1"> ${key} </span>
	            </div>
	            <input type="text" class="form-control" aria-describedby="basic-addon1"
	                name="effect_arg_${i}" placeholder="${value}">
	        </div>
	    </div>
		`;
		i++;
		$('#ARGB_EFFECT_ARGUMENTS').append(form);
	}

	// $("#ARGB_DEBUG").bootstrapToggle("on");
	$('#ARGB_DEBUG').change(function() {
		console.log(arguments.callee.name); //DBGPRINT
		$("#ARGB_DEBUG").bootstrapToggle();
	})
	// $("#ARGB_DEBUG").bootstrapToggle(response.debug_led ? "on" : "off");

	initHandlersArgb();
}
