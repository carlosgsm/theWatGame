function dmgOb() {
  this.x = Math.floor(Math.random() * canvas.width);
  this.y = Math.floor(Math.random() * canvas.height);
  this.width = 30;
  this.height = 30;
   }

   var dmgimg = new Image();
   dmgimg.src = "images/virus1.png";

  dmgOb.prototype.draw = function draw() {
    ctx.drawImage(dmgimg, this.x, this.y, this.width, this.height); 
}
 
dmgOb.prototype.collision = function(player) {
  if(
    player.x + player.width >= this.x && 
    this.x + this.width >= player.x && 
    player.y + player.height >= this.y && 
    this.y + this.height >= player.y
    ) {
      player2.health =player2.health-10
      this.x = 1000
      console.log('TE QUEMAS')
  }
  else if(
    player2.x + player2.width >= this.x && 
    this.x + this.width >= player2.x && 
    player2.y + player2.height >= this.y && 
    this.y + this.height >= player2.y
    ) {
      player.health =player.health-10
      this.x = 1000
      console.log('TE QUEMAS2')
  }
}

//solo me lo carga 1 vez, no varias

// dmgOb.prototype.draw = function draw() {
//   var img = new Image();
//   img.onload = function() { 
//      ctx.drawImage(img, dmgOb.x, dmgOb.y, dmgOb.width, dmgOb.height); 
//   }
//   img.src = "images/virus1.png";
// }