

function Player(config,x,y,width,height,scale)
{
  this.config = config;
  this.folder = config.folder;
  this.defaultState = config.states[config.states.default];
  this.currentState = this.defaultState;
  this.nextState = null;
  this.x=(x==null)?0:x;
  this.lastX = x;
  this.y=(y==null)?0:y;
  this.lastY = y;
  this.width=(width==null)?0:width;
  this.height=(height==null)?this.width:height;
  this.scale = scale;
  this.timer = 0;
  this.image = new Image();

  this.action = null;

  this.configAnimation();
}

Player.prototype.configAnimation=function() {

  this.currentFrame = 1;
  timeForAnimation = elapsedTime;
  this.lastX = this.x;
  this.lastY = this.y;
}


Player.prototype.drawImage=function(ctx){

  //,sx,sy,sw,sh =,(this.currentFrame-1)*this.width,0,this.width,this.height
  var frameWidth = this.currentState.sprite_frame_width;
  var frameHeight = this.currentState.sprite_frame_height;
  var frameXOffset = this.currentState.sprite_frame_xOffset;
  var frameYOffset = this.currentState.sprite_frame_yOffset;
  var posXSprite = (this.currentFrame-1)*frameWidth;
  var posYSprite = 0;

  ctx.fillStyle='#000000';
  var imageName = this.currentState.sprite_sheet;
  this.image.src = this.folder + imageName;

  if(this.currentState.sprite_sheet == "light_boxing.png"){
    //debugger;
  }

  //ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.drawImage(this.image, posXSprite, posYSprite, frameWidth, frameHeight, this.x+frameXOffset, this.y + frameYOffset, frameWidth, frameHeight);
}

Player.prototype.event = function(event){
  if (event == KEY_RIGHT )
  {
    this.nextState = this.config.states.forward;
  }
  if (event == KEY_LEFT )
  {
    this.nextState = this.config.states.backward;
  }
  if (event == PUNCH_STRONG)
  {
    this.nextState = this.config.states.light_boxing;
  }
  if (event == KEY_UP){
    this.nextState = this.config.states.jump;
  }
}

Player.prototype.eventKeyboard = function(pressing){
  // if (pressing[KEY_UP] == true)
  // {
  //   this.y -= 10;
  //
  // }
  // if (pressing[KEY_RIGHT] == true )
  // {
  //   //this.x += 10;
  // }
  // if (pressing[KEY_DOWN] == true )
  // {
  //   this.y += 10;
  // }
  // if (pressing[KEY_LEFT] == true )
  // {
  //   this.x -= 10;
  // }
}

Player.prototype.updateGraphics = function(context,time) {
  framesForSecond = this.currentState.frameForSecond;
  frames = this.currentState.frames + 1;

  // if (this.currentFrame != (~~((time-timeForAnimation)*framesForSecond)%frames + 1)){
  //   console.log("other Frame"+  (~~((time-timeForAnimation)*framesForSecond)%frames + 1));
  // }


  this.currentFrame = ~~((time-timeForAnimation)*framesForSecond)%frames + 1;

  if (this.currentFrame >= frames){
    if (this.nextState != null) {
      this.currentState = this.nextState;
      this.nextState = null;
    }else {
      this.currentState = this.defaultState;
    }
    this.configAnimation();
  }

  if(this.currentFrame < frames){
    this.drawImage(context);
    var distanceX = this.currentState.distanceX;
    if (distanceX != null){
      this.x = this.lastX + distanceX*(this.currentFrame - 1)/frames;
    }

  }
}
