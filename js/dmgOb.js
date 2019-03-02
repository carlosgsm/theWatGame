function dmgOb() {
  this.x = Math.floor(Math.random() * canvas.width);
  this.y = Math.floor(Math.random() * canvas.height);
  this.width = 20;
  this.height = 20;
  this.color = 'blue'
  
   }


dmgOb.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}


dmgOb.prototype.collision = function(player) {
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      player.health =player.health-10
      this.x = 1000
      console.log('TE QUEMAS')
  }
}

// dmgOb.prototype.draw = function draw() {
//     var img = new Image();
//      img.onload = function() { 
//        ctx.drawImage(img, 100, 100, 20, 20); 
//     }
//    img.src = "https://media.giphy.com/media/Qr8JE9Hvi7ave/200.gif";
//   }