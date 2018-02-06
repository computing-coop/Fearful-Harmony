//Adapted from: http://codepen.io/davidhartley/pen/seEki?editors=0010



//luke's stuff'
//PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
//
//
//
//
//
//const gl = canvas.getContext('webgl', {
//    
//    antialias: false,
//    
//    preserveDrawingBuffer: false,
//    
//    alpha: false,
//    
//    powerPrerence: 'low-power',
//    
//    failIfMajorPerformanceCaveat:true,
//
//});
//const minPixelRatio = .75;
//
//const pixelRatio = Math.min(minPixelRatio, window.devicePixelRatio);
//
//
//

//luke's stuff'




// destroy(removeView)
//    {
//        this.destroyPlugins();
//        // call the base destroy
//        super.destroy(removeView);
//        this.context = null;
//        this.refresh = true;
//        this.maskManager.destroy();
//        this.maskManager = null;
//        this.smoothProperty = null;
//    }
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.GC_MODE = PIXI.GC_MODES.MANUAL;

var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new PIXI.autoDetectRenderer(250, 150, 
                                   
{
    forceCanvas: true,
    view: document.getElementById('background'),
    transparent : false,
    legacy: true,
    resolution: 4,
    roundPixels: true,
});

//var renderer = new PIXI.CanvasRenderer(250, 150, 
//                                   
//{
//view: document.querySelector('canvas'),
//transparent : false,
//legacy: true,
// resolution: 4,
// roundPixels: true,
//});

document.body.appendChild(renderer.view);


//var renderer = PIXI.autoDetectRenderer(size[0], size[1]);

PIXI.settings.RESOLUTION = window.devicePixelRatio;
PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.GC_MODE = PIXI.GC_MODES.MANUAL;
PIXI.settings.FILTER_RESOLUTION = 4;
PIXI.settings.SPRITE_BATCH_SIZE = 8200;
PIXI.settings.SPRITE_MAX_TEXTURES = 64;


var stage = new PIXI.Container();

//function CustomFilter(fragmentSource) {
//  PIXI.Filter.call(this,
//      null,
//      fragmentSource
//  );
//}

//CustomFilter.prototype = Object.create(PIXI.Filter.prototype);
//CustomFilter.prototype.constructor = CustomFilter;
//random add

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
PIXI.settings.GC_MODE = PIXI.GC_MODES.MANUAL;

// smoke shader
var shaderCode = document.getElementById('shader').innerHTML
//var smokeShader = new CustomFilter(shaderCode);
var smokeShader = new PIXI.Filter(null,shaderCode);


smokeShader.uniforms.resolution[0] = width;
smokeShader.uniforms.resolution[1] = height;
smokeShader.uniforms.shift = 0.0;
//smokeShader.uniforms.time = 0.0;
smokeShader.uniforms.speed[0] = 0.0;
smokeShader.uniforms.speed[1] = 0.0;

var texture = PIXI.Texture.fromImage('');
var bg = new PIXI.Sprite(texture);
//var bg = PIXI.Sprite.fromImage('');
bg.width = width*10;
bg.height = height*10;
bg.filters = [smokeShader]
stage.addChild(bg);

var count = 0;

animate()

function animate() {
  requestAnimationFrame(animate);

  count += 0.0002
  smokeShader.uniforms.time = count;
    
  renderer.render(stage);
}

//var x= width/2;
//var y= height/2;

console.log(width);

document.onmousemove = function(evt){
  mousePos = {x:evt.clientX,y:evt.clientY}

  smokeShader.uniforms.mouse = mousePos;

}

//console.log(smokeShader.uniforms.mouse);
//
//function resize() {
//
//    var w = window.innerWidth;
//    var h = window.innerHeight;
//
//    renderer.view.style.width = w + 'px';
//    renderer.view.style.height = h + 'px';
//}
//
//window.onresize = resize;
//

