//Adapted from: http://codepen.io/davidhartley/pen/seEki?editors=0010

var width = window.innerWidth;
var height = window.innerHeight;

var renderer = new PIXI.autoDetectRenderer(width, height);

document.body.appendChild(renderer.view);

var stage = new PIXI.Container();

function CustomFilter(fragmentSource) {
  PIXI.Filter.call(this,
      null,
      fragmentSource
  );
}

CustomFilter.prototype = Object.create(PIXI.Filter.prototype);
CustomFilter.prototype.constructor = CustomFilter;

// smoke shader
var shaderCode = document.getElementById('shader').innerHTML
var smokeShader = new CustomFilter(shaderCode);

smokeShader.uniforms.resolution[0] = width;
smokeShader.uniforms.resolution[1] = height;
smokeShader.uniforms.alpha = 0.0;
smokeShader.uniforms.shift = 0.0;
//smokeShader.uniforms.time = 0.0;
smokeShader.uniforms.speed[0] = 0.0;
smokeShader.uniforms.speed[1] = 0.0;

var bg = PIXI.Sprite.fromImage('');
bg.width = width;
bg.height = height;
bg.filters = [smokeShader]
stage.addChild(bg);

var count = 0;

animate()

function animate() {
  requestAnimationFrame(animate);

  count += 0.0005
  smokeShader.uniforms.time = count;
    
  renderer.render(stage);
}

document.onmousemove = function(evt){
  mousePos = {x:evt.clientX,y:evt.clientY}

  smokeShader.uniforms.mouse = mousePos;

}

//console.log(smokeShader.uniforms.mouse);

function resize() {

    var w = window.innerWidth;
    var h = window.innerHeight;

    renderer.view.style.width = w + 'px';
    renderer.view.style.height = h + 'px';
}

window.onresize = resize;

//document.oncontextmenu = function() {
//    return false;
//    }