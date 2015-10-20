window.addEventListener('load',init,false);
var canvas = null,
    ctx = null,
    lastPress = null,
    pressing = [];
var player1 = new Player(20,0,100,200,'tomas/2DSC08985.png');
var KEY_ENTER = 13,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40;


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
  setTimeout(run, 50);
  act();
}

function act() {
  var dir = null;
  if (pressing[KEY_UP] == true)
  {
    player1.y -= 10;
  }
  if (pressing[KEY_RIGHT] == true )
  {
    player1.x += 10;
  }
  if (pressing[KEY_DOWN] == true )
  {
    player1.y += 10;
  }
  if (pressing[KEY_LEFT] == true )
  {
    player1.x -= 10;
  }
}

function repaint() {
  window.requestAnimationFrame(repaint);
  paint(ctx);
}

function paint(ctx){
    ctx.fillStyle='#0f0';
    ctx.fillRect(50,50,1000,600);

    player1.drawImage(ctx);
}

//Events
document.addEventListener('keydown', function (evt)
{
  lastPress = evt.which; pressing[evt.which] = true;
}, false);
document.addEventListener('keyup', function (evt)
{
  pressing[evt.which] = false;
}, false);

//PLAYER
function Player(x,y,width,height,imageSrc)
{
  this.x=(x==null)?0:x;
  this.y=(y==null)?0:y;
  this.width=(width==null)?0:width;
  this.height=(height==null)?this.width:height;
  this.timer=0;
  this.image = new Image();
  this.image.src = 'assets/'+imageSrc;
}

Player.prototype.drawImage=function(ctx){
  ctx.fillStyle='#000000';
  //ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.drawImage(this.image, this.x, this.y);
}
