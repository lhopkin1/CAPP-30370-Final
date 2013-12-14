$(window).on("load resize", function() {
	if ($(window).width() < 700) {
		$('.tabs ul > li.active').removeClass('active');
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
		
/*		$(window).on("load resize", function() {
			if ($(".tabs ul li:nth-child(1)").hasClass('active') + $(window).width() > 699) {
				$('#history').hide();
				$('#demos').hide();
			}
			else if ($(".tabs ul li:nth-child(2)").hasClass('active') + $(window).width() > 699) {
				$('#location').hide();
				$('#demos').hide();
			}
			else if ($(".tabs ul li:nth-child(3)").hasClass('active') + $(window).width() > 699) {
				$('#history').hide();
				$('#location').hide();
			}
			else {
				$('#location').show();
				$('#history').show();
				$('#demos').show();
			}
		});*/

$('img').on("click", function() {
	alert('hi');
	/*var $pic_alt = $('img').attr("alt");
		console.log('Alt Text: ' + $pic_alt);
	var $pic_width = $('img').width();
		console.log('Width: ' + $pic_width);
	var $pic_height = $('img').height();
		console.log('Height: ' + $pic_height);*/
});