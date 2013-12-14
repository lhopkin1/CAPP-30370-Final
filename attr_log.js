$(window).on("load resize", function() {
	console.log( 'Width: ' + $(window).width() );
});

$(document).ready(function() {
	$('img').on("click", function() {
		console.log('Alt Text: ' + $(this).attr("alt"));
		console.log('Width: ' + $(this).width());
		console.log('Height: ' + $(this).height());
	});
	$('h1, h2, h3, h4, h5, h6').on("click", function() {
		console.log('Text: ' + $(this).text());
		console.log('Color: ' + $(this).css("color"));
		console.log('Font-Size: ' + $(this).css("font-size"));
	});
});