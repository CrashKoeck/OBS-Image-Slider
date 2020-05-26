$.get('slide_duration_in_seconds.txt', function(data) {
	//var data = 4;
    $("head").append('<style type="text/css"></style>');
	var newStyleElement = $("head").children(':last');
	newStyleElement.html('.slider{animation-duration: ' + data + 's;}');
}, 'text');