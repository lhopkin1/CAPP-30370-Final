$(window).on("load", function() {
	if ($(window).width() < 700) {
		$('#location').show();
		$('#history').show();
		$('#demos').show();
	}
	else {
		$( ".tabs ul li:nth-child(1)" ).on("click", function (e) {
			e.preventDefault();
			$('.tabs ul > li.active').removeClass('active');
			$(this).addClass('active');
			$('#location').show();
			$('#history').hide();
			$('#demos').hide();
		});

		$( ".tabs ul li:nth-child(2)" ).on("click", function (f) {
			f.preventDefault();
			$('.tabs ul > li.active').removeClass('active');
			$(this).addClass('active');
			$('#location').hide();
			$('#history').show();
			$('#demos').hide();
		});
	
		$( ".tabs ul li:nth-child(3)" ).on("click", function (g) {
			g.preventDefault();
			$('.tabs ul > li.active').removeClass('active');
			$(this).addClass('active');
			$('#location').hide();
			$('#history').hide();
			$('#demos').show();
		});
	}
});