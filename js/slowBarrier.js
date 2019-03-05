function slowBarrier() {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.width = 40;
    this.height = 100;
    this.color = 'orange'
  }
  
  var slowimg = new Image();
  slowimg.src = "images/arena.jpg";

 slowBarrier.prototype.draw = function draw() {
   ctx.drawImage(slowimg, this.x, this.y, this.width, this.height); 
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


// (this.x < player.x + player.width &&
// this.x + this.width > player.x &&
// this.y < player.y + player.height &&
// this.height + this.y > player.y)