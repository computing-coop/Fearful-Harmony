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

//add something

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

// smoke shader
var shaderCode = document.getElementById('shader').innerHTML
var smokeShader = new CustomFilter(shaderCode);
//var smokeShader = new PIXI.Filter(null,shaderCode);

smokeShader.resolution = window.devicePixelRatio;


smokeShader.uniforms.resolution[0] = width;
smokeShader.uniforms.resolution[1] = height;
smokeShader.uniforms.shift = 0.0;
//smokeShader.uniforms.time = 0.0;
smokeShader.uniforms.speed[0] = 0.0;
smokeShader.uniforms.speed[1] = 0.0;

//var texture = PIXI.Texture.fromImage('');
//var bg = new PIXI.Sprite(texture);
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
    mousePos = {x:evt.accelerationIncludingGravity.x, y:evt.accelerationIncludingGravity.y} 
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

//document.ontouchmove = function(evt){
//  mousePos = {x:evt.clientX,y:evt.clientY}
//  smokeShader.uniforms.mouse = mousePos;
//}

//var resize = function () {
//        window.addEventListener('resize', rendererResize);
//        window.addEventListener('deviceOrientation', rendererResize);
//};

