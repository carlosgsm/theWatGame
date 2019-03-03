function slowBarrier() {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.width = 40;
    this.height = 100;
    this.color = 'orange'
  }
  
  slowBarrier.prototype.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  
  
  slowBarrier.prototype.collision = function(player) {
      //colision izquierda
    if(this.x < player.x + player.width &&
        this.x + this.width > player.x &&
        this.y < player.y + player.height &&
        this.height + this.y > player.y) {
        this.color = 'green'  
        player.speed = 0.1
        setTimeout(function(){player.speed=1},2000);//para que no este permanentemente a velocidad 0.1   
    }}
     Audio.player
// (this.x < player.x + player.width &&
// this.x + this.width > player.x &&
// this.y < player.y + player.height &&
// this.height + this.y > player.y)