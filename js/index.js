//-----Information Page | START -----//

//hover over images
    
$(function() {
	
	$('main').scrollgress({
	
	});
		
});

    $('.circle, #open').hover(function(){
        $('main').toggleClass('open');
        $('.scrollgress').toggleClass('open');
        $('html').css('overflow-y', 'hidden');
    },function(){
        $('main').toggleClass('open');
        $('.scrollgress').toggleClass('open');
        $('html').css('overflow-y', 'visible');
    })




    $('#fearful-harmony').hover(function(){
        $('.big-circle').css('opacity', '1');
    },function(){
        $('.big-circle').css('opacity', '0');
    })
    $('#static-haze').hover(function(){
        $('.big-circle2').css('opacity', '1');
    },function(){
        $('.big-circle2').css('opacity', '0');
    })
    $('#ok-human').hover(function(){
        $('.big-circle3').css('opacity', '1');
    },function(){
        $('.big-circle3').css('opacity', '0');
    })



//    $('#trigger-1').hover(function(){
//        $('.letterform').css('font-weight', '300');
//    },function(){
//        $('.letterform').css('opacity', '600');
//    })


//    $('#trigger-1').hover(function () {
//        $(this).toggleClass('active');
//        $('.letter-1').toggleClass('open');
//    });

    $('#trigger-1').hover(function(){
        $('.letter-1').css('opacity', '1');
    },function(){
        $('.letter-1').css('opacity', '0');
    })
    $('#trigger-2').hover(function(){
        $('.letter-2').css('opacity', '1');
    },function(){
        $('.letter-2').css('opacity', '0');
    })
    $('#trigger-3').hover(function(){
        $('.letter-3').css('opacity', '1');
    },function(){
        $('.letter-3').css('opacity', '0');
    })
    $('#trigger-4').hover(function(){
        $('.letter-4').css('opacity', '1');
    },function(){
        $('.letter-4').css('opacity', '0');
    })
    $('#trigger-5').hover(function(){
        $('.letter-5').css('opacity', '1');
    },function(){
        $('.letter-5').css('opacity', '0');
    })
    $('#trigger-6').hover(function(){
        $('.letter-6').css('opacity', '1');
    },function(){
        $('.letter-6').css('opacity', '0');
    })
    $('#trigger-7').hover(function(){
        $('.letter-7').css('opacity', '1');
    },function(){
        $('.letter-7').css('opacity', '0');
    })
    $('#trigger-8').hover(function(){
        $('.letter-8').css('opacity', '1');
    },function(){
        $('.letter-8').css('opacity', '0');
    })
    $('#trigger-9').hover(function(){
        $('.letter-9').css('opacity', '1');
    },function(){
        $('.letter-9').css('opacity', '0');
    })
    $('#trigger-10').hover(function(){
        $('.letter-10').css('opacity', '1');
    },function(){
        $('.letter-10').css('opacity', '0');
    })
    $('#trigger-11').hover(function(){
        $('.letter-11').css('opacity', '1');
    },function(){
        $('.letter-11').css('opacity', '0');
    })
    $('#trigger-12').hover(function(){
        $('.letter-12').css('opacity', '1');
    },function(){
        $('.letter-12').css('opacity', '0');
    })






        
 //-----Remove Hover for moblie | START -----//


$(function () {
var touch = 'ontouchstart' in document.documentElement
            || navigator.maxTouchPoints > 0
            || navigator.msMaxTouchPoints > 0;

if (touch) { // remove all :hover stylesheets
    try { // prevent exception on browsers not supporting DOM styleSheets properly
        for (var si in document.styleSheets) {
            var styleSheet = document.styleSheets[si];
            if (!styleSheet.rules) continue;

            for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
                if (!styleSheet.rules[ri].selectorText) continue;

                if (styleSheet.rules[ri].selectorText.match(':hover')) {
                    styleSheet.deleteRule(ri);
                }
            }
        }
    } catch (ex) {}
}
    });

 //-----Remove Hover for moblie | END -----//


// Carousel 
$(window).load(function () {

    var carousel = document.querySelector('.carousel');
    var flkty = new Flickity(carousel, {
        imagesLoaded: true,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
    });
    var carousel2 = document.querySelector('.carousel2');
    var flkty = new Flickity(carousel2, {
        imagesLoaded: true,
        pauseAutoPlayOnHover: false,
        wrapAround: true,
    });

});


 
