$(function(){
	$(window).resize(function(){
		nav();
	});
	function nav(){
		var width = $(window).width();
		if(width < 800){
			$(".la-bars").removeClass("none");
			$(".ul_menu").addClass("none");
		}
		else if( width > 800){
			$(".la-bars").addClass("none");
			$(".ul_menu").removeClass("none");
		}
	}
	nav();
	$(".slide").click(function(){
		var link = $(this).attr('href');
		$("html, body").animate({
			scrollTop : $(link).offset().top
		}, 1000);
		return false;
	});
	$(".la-close").click(function(){
		$(".modal").slideUp(1000);
		$(".menu_res").slideUp(1000);
	});
	$(".tiket").click(function(){
		$(".modal").slideDown(1000);
	});

	$(".la-bars").click(function(){
		$(".menu_res").slideDown(1000);
	});
	$(".yes").click(function(){
		$(".fix").slideUp(1000, function(){
			$(window).scroll(function(){
				$(".box_up").each(function(){
					var b_o_o = $(this).offset().top / 1.2 + $(this).outerHeight();
					var b_o_w = $(window).scrollTop() + $(window).height();
					if(b_o_w > b_o_o){
						$(".box_up:nth-child(1)").css({"transition" : "0.7s ease", "transform":"translateY(0px)", "opacity":1, "visibility":"visible"});
						$(".box_up:nth-child(2)").css({"transition" : "0.8s ease", "transform":"translateY(0px)", "opacity":1, "visibility":"visible"});

						$(".box_up:nth-child(3)").css({"transition" : "0.9s ease", "transform":"translateY(0px)", "opacity":"1", "visibility":"visible"});
						$(".box_up:nth-child(4)").css({"transition" : "1s ease", "transform":"translateY(0px)", "opacity":"1", "visibility":"visible"});
						$(".box_up:nth-child(5)").css({"transition" : "1.1s ease", "transform":"translateY(0px)", "opacity":"1", "visibility":"visible"});
						$(".box_up:nth-child(6)").css({"transition" : "1.2s ease", "transform":"translateY(0px)", "opacity":"1", "visibility":"visible"});
						$(".box_up:nth-child(7)").css({"transition" : "1.3s ease", "transform":"translateY(0px)", "opacity":"1", "visibility":"visible"});
						$(".box_up:nth-child(8)").css({"transition" : "1.4s ease", "transform":"translateY(0px)", "opacity":"1", "visibility":"visible"});
					}
				});
				$(".up").each(function(){
					var b_o_o = $(this).offset().top / 1.2 + $(this).outerHeight();
					var b_o_w = $(window).scrollTop()  + $(window).height();

					if(b_o_w > b_o_o){	
						$(this).addClass("up_new");
					}
				});
			});
			$(".top").addClass("up_new");
			
		});
	});
});
