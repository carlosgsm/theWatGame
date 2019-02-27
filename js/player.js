function Player() {
  this.x = 50;
  this.y = 50;
  this.isMovingRight = false;
  this.isMovingLeft = false;
  this.isMovingUp = false;
  this.isMovingDown = false;
  this.health = 100;
  this.width = 50;
  this.height = 50;
  this.color = 'green'

}

Player.prototype.movePlayer = function() {

  document.onkeydown = function(e) {
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
  }.bind(this)

  document.onkeyup = function(e) {
    this.isMovingRight = false;
    this.isMovingLeft = false;
    this.isMovingUp = false;
    this.isMovingDown = false;
  }.bind(this)

  if(this.isMovingRight === true && this.x + this.width <= canvas.width)this.x += 5;
  if(this.isMovingLeft === true && this.x > 0)this.x -= 5;
  if(this.isMovingUp === true && this.y >= 0)this.y -= 5;
  if(this.isMovingDown === true && this.y + this.height <= canvas.height)this.y += 5;
}

setInterval(function(){ player.health=player.health-1;}, 1000);

//Function Perdiste, funciona, hay que ver como meterla y donde

// if (player.health <=90){
//   alert("Perdiste motherfucker")
// }



Player.prototype.draw = function() {
  
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.fillRect(this.x, this.y, this.width, this.height)
}

  // if(this.x > canvas.width) {
  //   ctx.beginPath()
  //   ctx.font = "20px Helvetica";
  //   ctx.fillStyle = 'Black'
  //   ctx.fillText('GAME OVER!!', canvas.width / 2, canvas.height / 2)
  //   ctx.closePath()
  // }
  // ctx.beginPath()
  // ctx.fillRect(this.x, this.y, this.width, this.height)
  // ctx.drawImage(img, this.x, this.y, 50, 50); 

  // ctx.closePath()

