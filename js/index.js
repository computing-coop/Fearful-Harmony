//-----Information Page | START -----//

//hover over images
    
    

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