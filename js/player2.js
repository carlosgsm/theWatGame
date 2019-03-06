

function Player2() {
  this.x = canvas.width-100;
  this.y = canvas.height-100;
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.isMovingUp = false;
  this.isMovingDown = false;
  this.health = 100;// como le meto limite a la vida? tener 100 como maximo
  this.width = 60;
  this.height = 60;
  this.speed = 1;
  //sprite
  this.sx = 100
  this.sy = 130
  this.img = player2img
  this.sWidth = 60
  this.sHeight = 60
  this.dWidth = 70
  this.dHeight = 70

}

Player2.prototype.movePlayer = function() {

  document.addEventListener('keydown', function(e) {
    switch(e.keyCode){
      case 68:
        this.isMovingRight = true;
        this.sx = 90
        this.sy = 70
        break
      case 65:
        this.isMovingLeft = true;
        this.sx = 90
        this.sy = 200
        break
      case 87:
        this.isMovingUp = true;
        break
      case 83: 
        this.isMovingDown = true;
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

Player2.prototype.draw = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.fillRect(player.x, player.y, player.width, player.height)
  ctx.drawImage(this.img, this.sx, this.sy, this.sWidth, this.sHeight, this.x, this.y, this.sWidth, this.sHeight);
  console.log('draw2')
  }

  
Player2.prototype.updatePoints= function(){
    let health2 = document.getElementById("health2")
    health2.value = this.health;
  }

  setInterval(function(){
    if (player2.health>=5){player2.health=player2.health-5;
    }}, 1000);
   

  var player2img = new Image();
  player2img.src = "images/gypsy.png";

//ejemplo
  // ctx.drawImage(img, 0, 0, 16, 18, 0, 0, 16, 18);
  // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)




    