function Obstacle() {
  this.x = 150;
  this.y = 150;
  this.width = 20;
  this.height = 20;
  this.color = 'blue'

}

Obstacle.prototype.draw = function () {
  // ctx.beginPath();
  // ctx.clearRect(0,0,canvas.width,canvas.height)
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
  // ctx.closePath();
}

Obstacle.prototype.damage = function() {
  if(this.y == player.y && this.x == player.x)
  {player.health=player.health-20}
}



// Obstacle.prototype.move = function() {
//   this.x += this.dx;
// }

Obstacle.prototype.collision = function(player) {
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      player.health =player.health-10
      this.color = 'green'
      this.x = 1000
      // player.x = this.x + this.width
      // player.color = this.color
      console.log('TE QUEMAS')
  }
}