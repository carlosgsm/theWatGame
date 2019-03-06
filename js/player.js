function Player() {
  this.x = 50;
  this.y = 50;
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.isMovingUp = false;
  this.isMovingDown = false;
  this.health = 100;// como le meto limite a la vida? tener 100 como maximo
  this.width = 50;
  this.height = 50;
  this.color = 'red'
  this.speed = 1;
 
}

Player.prototype.movePlayer = function() {
  document.addEventListener('keydown', function(e) {
    switch(e.keyCode){
      case 39:
        this.isMovingRight = true;
        break
      case 37:
        this.isMovingLeft = true;
        break
      case 38:
        this.isMovingUp = true;
        break
      case 40:
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

setInterval(function(){
  if (player.health>=5){player.health=player.health-5;}}, 1000);


// Player.prototype.draw = function() {
//   ctx.clearRect(0,0,canvas.width,canvas.height)
//   ctx.fillRect(this.x, this.y, this.width, this.height)

//   }

Player.prototype.updatePoints= function(){
  let health1 = document.getElementById("health1")
  health1.value = this.health;
}



//====================================================================================

