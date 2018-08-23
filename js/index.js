$(window).load(function() {
			$(".loading-screen").addClass('open');
			$(".loading-circle").addClass('open');
		});

$(function() {
    $(window).scroll(function() {

        
        var scrollTop = $(document).scrollTop()
        var scrollBottom = scrollTop + $(window).height()
        


        var pageTop = $(document).height()
        
        var difference = pageTop - scrollBottom
        

        if (scrollTop <= 300) {
            $(".circle").removeClass('open');
        } else {
            $(".circle").addClass('open');
        }
    });
});

//Footer

$(function() {
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop()
        var scrollBottom = scrollTop + $(window).height()
        
        
        var pageBottom = $(document).height()
        
        var difference = pageBottom - scrollBottom
        

        if (difference <= 300) {
            $('body').addClass('open');
            $(".body-content").addClass('open');
            $(".footer-background").addClass('open');
        } else {
            $('body').removeClass('open');
             $(".body-content").removeClass('open');
             $(".footer-background").removeClass('open');
        }
    });
});


$(document).mousemove(function(){
    var t = window.innerWidth/12; 
//    console.log(t)
    if (event.clientX >= 0 && event.clientX < t) {
        $('.letter-1').css('opacity', '1');
        $('.dot-1').css('opacity', '1');
    } else {
        $('.letter-1').css('opacity', '0');
        $('.dot-1').css('opacity', '0');
    }
    if (event.clientX >= t && event.clientX < t*2) {
        $('.letter-2').css('opacity', '1');
        $('.dot-2').css('opacity', '1');
    } else {
        $('.letter-2').css('opacity', '0');
        $('.dot-2').css('opacity', '0');
    }
    if (event.clientX >= t*2 && event.clientX < t*3) {
        $('.letter-3').css('opacity', '1');
        $('.dot-3').css('opacity', '1');
    } else {
        $('.letter-3').css('opacity', '0');
        $('.dot-3').css('opacity', '0');
    } 
    if (event.clientX >= t*3 && event.clientX < t*4) {
        $('.letter-4').css('opacity', '1');
        $('.dot-4').css('opacity', '1');
    } else {
        $('.letter-4').css('opacity', '0');
        $('.dot-4').css('opacity', '0');
    } 
    if (event.clientX >= t*4 && event.clientX < t*5) {
        $('.letter-5').css('opacity', '1');
        $('.dot-5').css('opacity', '1');
    } else {
        $('.letter-5').css('opacity', '0');
        $('.dot-5').css('opacity', '0');
    } 
    if (event.clientX >= t*5 && event.clientX < t*6) {
        $('.letter-6').css('opacity', '1');
        $('.dot-6').css('opacity', '1');
    } else {
        $('.letter-6').css('opacity', '0');
        $('.dot-6').css('opacity', '0');
    } 
    if (event.clientX >= t*6 && event.clientX < t*7) {
        $('.letter-7').css('opacity', '1');
        $('.dot-7').css('opacity', '1');
    } else {
        $('.letter-7').css('opacity', '0');
        $('.dot-7').css('opacity', '0');
    } 
    if (event.clientX >= t*7 && event.clientX < t*8) {
        $('.letter-8').css('opacity', '1');
        $('.dot-8').css('opacity', '1');
    } else {
        $('.letter-8').css('opacity', '0');
        $('.dot-8').css('opacity', '0');
    } 
    if (event.clientX >= t*8 && event.clientX < t*9) {
        $('.letter-9').css('opacity', '1');
        $('.dot-9').css('opacity', '1');
    } else {
        $('.letter-9').css('opacity', '0');
        $('.dot-9').css('opacity', '0');
    } 
    if (event.clientX >= t*9 && event.clientX < t*10) {
        $('.letter-10').css('opacity', '1');
        $('.dot-10').css('opacity', '1');
    } else {
        $('.letter-10').css('opacity', '0');
        $('.dot-10').css('opacity', '0');
    } 
    if (event.clientX >= t*10 && event.clientX < t*11) {
        $('.letter-11').css('opacity', '1');
        $('.dot-11').css('opacity', '1');
    } else {
        $('.letter-11').css('opacity', '0');
        $('.dot-11').css('opacity', '0');
    } 
    if (event.clientX >= t*11 && event.clientX <= t*12) {
        $('.letter-12').css('opacity', '1');
        $('.dot-12').css('opacity', '1');
    } else {
        $('.letter-12').css('opacity', '0');
        $('.dot-12').css('opacity', '0');
    } 
}); 

(function($) {
  $.fn.onHover = function() {
    $('.circle').hover(function(){
        $('.nav').toggleClass('hover');
        $('.circle').toggleClass('hover');
        $('.menu-background-grain').toggleClass('hover');
        $('#background').toggleClass('hover');
        $('.wrapper').toggleClass('hover');
    },function(){
        $('.nav').toggleClass('hover');
        $('.circle').toggleClass('hover');
        $('.menu-background-grain').toggleClass('hover');
        $('#background').toggleClass('hover');
        $('.wrapper').toggleClass('hover');
    });
    };
}(jQuery));

(function($) {
  $.fn.onMenuClick = function() {
  $('.circle, .footer-header').click(function(){
    
        $('html').addClass('menu');
        $('.circle').addClass('clicked');
        $('.nav').addClass('open');
        $('#background').addClass('open');
        $('.wrapper').addClass('open');
    }
                       );
};
}(jQuery));




(function($) {
  $.fn.onNavClick = function() {
  $('.nav').click(function(){
        $('html').removeClass('menu');
        $('html').removeClass('index');
        $('.circle').removeClass('clicked');
        $('.nav').removeClass('open');
        $('#background').removeClass('open');
        $('.wrapper').removeClass('open');
//        $('.wrapper').removeClass('index');
      
    }

                 );
};
}(jQuery));

$(document).ready(function() {
  $('body').onHover();
    $('body').onMenuClick();
$('body').onNavClick();
});

$(document).keyup(function(e) {
     if (e.keyCode == 27) { 
        $('.wrapper').removeClass('open');
        $('.circle').removeClass('clicked');
        $('html').removeClass('menu');
        $('.circle').removeClass('clicked');
        $('.nav').removeClass('open');
        $('#background').removeClass('open');
        $('.wrapper').removeClass('open');
    }
});



//    $('.heading').click(function(){
//        $('.circle').removeClass('open');
//        $('.circle').removeClass('hover');
//        $('.circle').removeClass('clicked');
//    
//    });




$(function() {
  var $page = $('#main');
  var options = {
    prefetch : true,
    pageCacheSize: 4,
    forms: 'form',
    scroll: false,
    onStart: {
      duration: 1200,
      render: function($container) {
        $container.addClass('is-exiting');
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function($container, $newContent) {
        $container.removeClass('is-exiting');
        $container.html($newContent);
        $('html, body').scrollTop(0);
//              $container.onHover();
//    $container.onMenuClick();
      }
    },
    onAfter: function($container) {
      $container.onHover();
    $container.onMenuClick();
    $container.onNavClick();
//    $container.onScroll();
        
        
    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
    PIXI.settings.GC_MODE = PIXI.GC_MODES.MANUAL;

    var width = window.innerWidth;
    var height = window.innerHeight;
    var scale = window.devicePixelRatio;

const renderer = new PIXI.autoDetectRenderer(250, 150,                    
{
    view: document.getElementById('background'),
    transparent : false,
    backgroundColor: 0x000000,
    legacy: true,
    resolution: window.devicePixelRatio,
    roundPixels: true,
});

if (renderer.RENDERER_TYPE = PIXI.RENDERER_TYPE.UNKNOWN) {
    renderer.backgroundColor = 0xffffff;
    console.log("web");
} else {
var colour = 0x000000;
};

document.getElementById("background-container").appendChild(renderer.view);

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.GC_MODE = PIXI.GC_MODES.MANUAL;


var stage = new PIXI.Container();

function CustomFilter(fragmentSource) {
  PIXI.Filter.call(this,
      null,
      fragmentSource
  );
}

CustomFilter.prototype = Object.create(PIXI.Filter.prototype);
CustomFilter.prototype.constructor = CustomFilter;

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.GC_MODE = PIXI.GC_MODES.MANUAL;

var shaderCode = document.getElementById('shader').innerHTML
var smokeShader = new CustomFilter(shaderCode);

smokeShader.resolution = window.devicePixelRatio;


smokeShader.uniforms.resolution[0] = width;
smokeShader.uniforms.resolution[1] = height;
smokeShader.uniforms.shift = 0.0;
smokeShader.uniforms.speed[0] = 0.0;
smokeShader.uniforms.speed[1] = 0.0;

var bg = PIXI.Sprite.fromImage('');
bg.width = 250;
bg.height = 150;
bg.filters = [smokeShader]
//
stage.addChild(bg);

var count = 0;

animate()

function animate() {
    requestAnimationFrame(animate);
    count += 0.0002
    smokeShader.uniforms.time = count;
    renderer.render(stage);
}

document.onmousemove = function(evt){
  mousePos = {x:evt.clientX,y:evt.clientY}
  smokeShader.uniforms.mouse = mousePos;
}

window.ondevicemotion = function(evt) {
    mousePos = {x:evt.acceleration.x*10, y:evt.acceleration.y*10} 
    smokeShader.uniforms.mouse = mousePos;
//    var deltaX = lastX - x
//    var deltaY = lastY - y
//    var deltaZ = lastZ - z
//
//    var deltaA = Math.max(deltaX, deltaY, deltaZ)
//
//    if(Math.abs(deltaA) > 0.2) onOffset()
//
//    lastX = x
//    lastY = y
//    lastZ = z
}

//function moveTouch(ev) {
//    mousePos = {x:evt.clientX, y:evt.clientY}
//    smokeShader.uniforms.mouse = mousePos;
//}
//
//function init() {
// var el=document;
// el.ontouchmove = moveTouch;
//}    
        
    },
  };
  var smoothState = $('#main').smoothState(options).data('smoothState');
});

 //-----Remove Hover for mobile | START -----//


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

 //-----Remove Hover for mobile | END -----//



