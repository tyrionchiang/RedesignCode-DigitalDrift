
function aboutus_photo(){
	if (!$('.aboutus_photo').hasClass('polygons')) {
		// console.log('in')
		$('.aboutus_photo').removeClass('background_loop');
		$('.aboutus_photo').removeClass('animationPaused');
		$('.aboutus_photo').addClass('animated polygons');

		$('.aboutus_photo').css({"clip-path": "polygon( 0 100%, 48% 4%, 33.4% 100%, 34.9% 100%, 50% 0, 83.8% 67.5%, 35.5% 100%, 38.1% 100%, 84.6% 68.9%, 100% 100%)", 
		"-webkit-clip-path" : "polygon( 0 100%, 48% 4%, 33.4% 100%, 34.9% 100%, 50% 0, 83.8% 67.5%, 35.5% 100%, 38.1% 100%, 84.6% 68.9%, 100% 100%)"});
		setTimeout(function(){$('.aboutus_photo').addClass('background_loop');},1500);
	}	
}	
$( window ).resize(function() {
	if ($('.page2').hasClass('active')) {
		aboutus_photo_resize();  	
	}
});

$(document).ready(function(){
    $(".main").onepage_scroll({
    	sectionContainer: "section",
    	animationTime: 1100,
    	pagination: false,
    	loop: false,
    	beforeMove: function(index) {
    		if ($('.page2').hasClass('active')) {
				aboutus_photo_resize();
      		}
    	},
      	afterMove: function(index) {
      		if ($('.page2').hasClass('active')) {
				aboutus_photo();
      		}
    	}
    });
});

function aboutus_photo_resize(){
	let screenheight = $( window ).height();
	let screenwidth = $( window ).width();
	let proportion = screenwidth / screenheight;
	let width = screenheight * 788 / 682 ;
	if (proportion > 1.3) {
		$('.aboutus_photo_element').show();

		let elementWidth = width * 1.078;
		let left = (screenwidth - width) * 0.27;
		$('.aboutus_photo_element').css({'height' : '100%', 'width' : elementWidth});
		$('.aboutus_space').css({'width': left - (elementWidth - width) / 2});
		$('.aboutus_photo').css({'height' : '100%', 'width' : width, 'left': left, 'opacity': '1.0' });

		var fontSize = 6 + 8 * (screenwidth - 800) / 566;
		// console.log(fontSize);
		$('.aboutus_content_text').css({'padding-top' : screenheight * 0.23, 'font-size' : fontSize, 'position' : 'static'});

		var titleFontSize = fontSize * 3;
		if (titleFontSize < 20) {titleFontSize = 20;}
		$('.aboutus_title').css({'left' : left , 'font-size' : titleFontSize, '-ms-transform' : 'rotate(-57deg)', '-webkit-transform' : 'rotate(-57deg)' , 'transform' : 'rotate(-57deg)', 'top' : '35%'});

	}else{	
		let left = screenwidth * 0.12;
		var fontSize = 12 + 3 * (screenwidth - 420) / 500;
		if (screenwidth < 420) { fontSize = 7; }
		$('.aboutus_photo_element').hide();
		$('.aboutus_photo').css({'height' : '100%', 'width' : width, 'left': left, 'opacity' : '0.6' });
		$('.aboutus_content_text').css({'padding-top' : screenheight * 0.23, 'font-size' : fontSize, 'position' : 'absolute'});
		$('.aboutus_title').css({'-ms-transform' : 'rotate(0deg)', '-webkit-transform' : 'rotate(0deg)' , 'transform' : 'rotate(0deg)', 'left' : '12px', 'top' : '5%', 'font-size' : '36px'});
	}

	
}









