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

  if(this.isMovingRight === true && this.x + this.width <= canvas.width)this.x += 5*this.speed;
  if(this.isMovingLeft === true && this.x > 0)this.x -= 5*this.speed;
  if(this.isMovingUp === true && this.y >= 0)this.y -= 5*this.speed;
  if(this.isMovingDown === true && this.y + this.height <= canvas.height)this.y += 5*this.speed;
}

setInterval(function(){
  if (player.health>=5){player.health=player.health-5;}}, 1000);


Player.prototype.draw = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.fillRect(this.x, this.y, this.width, this.height)

  }

Player.prototype.updatePoints= function(){
  let health1 = document.getElementById("health1")
  health1.value = this.health;
}
//Function Perdiste, funciona, hay que ver como meterla y donde
// tampoco me vuelve a pintar todos los objetos, refresh de pagina?
// Player.prototype.gameOver = function (){
// if (this.health <=0){
//   if(confirm("GAME OVER. Play again?")) {
//     player.health =100
//     player2.health =100
// }
// }
// }
// document.location.reload(true)
    // window.location.reload();

// // funciona, pero no se mueve
// Player.prototype.icono = function draw(ghost) {
//   var img = new Image();
//   img.onload = function() { 
//      ctx.drawImage(img, this.x, this.y, 50, 50); 
//   }
//   img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
// }.bind(this)
// ////


// Player.prototype.draw = function draw() {
//   var img = new Image();
//   img.onload = function() { 
//      ctx.drawImage(img, player.x, player.y, player.width, player.height); 
//   }
//   img.src = "images/lifepill.png";
// }.bind(Player)






