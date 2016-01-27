window.addEventListener('load',init,false);
var canvas = null,
    ctx = null,
    lastPress = null,
    pressing = [];


var elapsedTime = 0;
var elapsedTimeForAnimation = 0;
var player1 = new Player(Config.Characters.tomas,20,120,500,454);
var fondo = null;
var KEY_ENTER = 13,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40,
    KICK_STRONG = 74,
    KICK_SOFT = 75,
    PUNCH_STRONG = 85,
    PUNCH_SOFT = 73;


window.requestAnimationFrame = (function ()
{
  return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (callback)
  {
    window.setTimeout(callback, 17);
  };
}());

function init(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');

    run();
    repaint();
}


function run() {
  setTimeout(run, 17);
  act(0.017);
}

function act(deltaTime) {

  var dir = null;

  player1.eventKeyboard(pressing);



  // Elapsed time
  elapsedTime+=deltaTime;
  if(elapsedTime>3600)
    elapsedTime-=3600;

}

function repaint() {
  window.requestAnimationFrame(repaint);
  paint(ctx);
}

function paint(ctx){
    ctx.fillStyle='#0f0';
    ctx.fillRect(50,50,1000,600);


    fondo  = new Image();
    fondo.src = 'assets/fondos/fondo2.jpg';
    ctx.drawImage(fondo, 0, 0);


    player1.updateGraphics(ctx,elapsedTime);

  }

//Events
document.addEventListener('keydown', function (evt)
{
  lastPress = evt.which;
  if(player1.action == null) {
    player1.action = evt.which;
    player1.event(evt.which);
  }



  pressing[evt.which] = true;
}, false);

document.addEventListener('keyup', function (evt)
{
  player1.action = null;
  pressing[evt.which] = false;
}, false);
