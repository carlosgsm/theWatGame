function Player2() {
  this.x = 150;
  this.y = 150;
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.isMovingUp = false;
  this.isMovingDown = false;
  this.health = 100;// como le meto limite a la vida? tener 100 como maximo
  this.width = 50;
  this.height = 50;
  // this.color = 'green'
  this.speed = 1;

}

Player2.prototype.movePlayer = function() {

  document.onkeydown = function(e) {
    switch(e.keyCode){
      case 68:
        this.isMovingRight = true;
        break
      case 65:
        this.isMovingLeft = true;
        break
      case 87:
        this.isMovingUp = true;
        break
      case 83: 
        this.isMovingDown = true;
        break
      }
  }.bind(this)

  document.onkeyup = function(e) {
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  }.bind(this)

  if(this.isMovingRight === true && this.x + this.width <= canvas.width)this.x += 5*this.speed;
  if(this.isMovingLeft === true && this.x > 0)this.x -= 5*this.speed;
  if(this.isMovingUp === true && this.y >= 0)this.y -= 5*this.speed;
  if(this.isMovingDown === true && this.y + this.height <= canvas.height)this.y += 5*this.speed;
}

Player2.prototype.draw = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  // ctx.fillRect(this.x, this.y, this.width, this.height)
  ctx.fillRect(player.x, player.y, player.width, player.height)
  ctx.drawImage(player2img, player2.x, player2.y, player2.width, player2.height); 
  console.log('draw2')
  }

Player2.prototype.updatePoints= function(){
    let health2 = document.getElementById("health2")
    health2.value = this.health;
  }

  setInterval(function(){
    if (player2.health>=5){player2.health=player2.health-5;}}, 1000);


    var player2img = new Image();
    player2img.src = "images/oldmen1.png";
