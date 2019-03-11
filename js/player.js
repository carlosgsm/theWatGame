function Player() {
  this.x = 30;
  this.y = 30;
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.isMovingUp = false;
  this.isMovingDown = false;
  this.health = 100;// como le meto limite a la vida? tener 100 como maximo
  this.width = 30;
  this.height = 50;
  this.color = 'red'
  this.speed = 1;
  //sprite
  this.sx = 0
  this.sy = 0
  this.img = player1img
  this.sWidth = 30
  this.sHeight = 50
  this.dWidth = 40
  this.dHeight = 40
 
}

Player.prototype.movePlayer = function() {
  document.addEventListener('keydown', function(e) {
    switch(e.keyCode){
      case 39:
        this.isMovingRight = true;
        this.sx = 0
        this.sy = 96
        break
      case 37:
        this.isMovingLeft = true;
        this.sx = 0
        this.sy = 48
        break
      case 38:
        this.isMovingUp = true;
        this.sx = 0
        this.sy = 145
        break
      case 40:
        this.isMovingDown = true;
        this.sx = 0
        this.sy = 0
        break
      }
  }.bind(this))

  document.addEventListener('keyup', function(e) {
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  }.bind(this))

  if(this.isMovingRight === true && this.x + this.width <= canvas.width)this.x += 5*this.speed;
  if(this.isMovingLeft === true && this.x > 0)this.x -= 5*this.speed;
  if(this.isMovingUp === true && this.y >= 0)this.y -= 5*this.speed;
  if(this.isMovingDown === true && this.y + this.height <= canvas.height)this.y += 5*this.speed;
}

setInterval(function(){
  if (player.health>=5){player.health=player.health-5;}}, 1000);

  Player.prototype.draw = function() {
    ctx.clearRect(0,0,canvas.width,canvas.height)  
    ctx.drawImage(this.img, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.sWidth, this.sHeight);
    }
   

// Player.prototype.draw = function() {
//   ctx.clearRect(0,0,canvas.width,canvas.height)
//   ctx.fillRect(this.x, this.y, this.width, this.height)

//   }

Player.prototype.updatePoints= function(){
  let health1 = document.getElementById("health1")
  health1.value = this.health;
}

var player1img = new Image();
player1img.src = "images/oldmen2.png";

//====================================================================================

Player.prototype.hitObstacle = function(obs) {
  if (Math.abs(obs.x - this.x) < this.radius + obs.radius - 5) {
    if (Math.abs(obs.y - this.y) < this.radius + obs.radius - 5) {
      this.image.src = "images/crash.png";
      this.ctx.drawImage(this.image, (this.x-35), (this.y-40), this.width, this.height);
      this.life = this.life - 1;
      return true;
    }
  }
};