function healthOb() {
    this.x = Math.floor(Math.random() * canvas.width);
    this.y = Math.floor(Math.random() * canvas.height);
    this.width = 30;
    this.height = 30;
   
  }
  var healthimg = new Image();
  healthimg.src = "images/lifepill.png";


  healthOb.prototype.draw = function draw() {
       ctx.drawImage(healthimg, this.x, this.y, this.width, this.height); 
  }
 
  healthOb.prototype.collision = function(player) {
    if(
      player.x + player.width >= this.x && 
      this.x + this.width >= player.x && 
      player.y + player.height >= this.y && 
      this.y + this.height >= player.y
      ) {
        player.health =player.health+10
        this.x = 1000
        console.log('TE CURAS')
    }
    else if(
      player2.x + player2.width >= this.x && 
      this.x + this.width >= player2.x && 
      player2.y + player2.height >= this.y && 
      this.y + this.height >= player2.y
      ) {
        player2.health =player2.health+10
        this.x = 1000
        console.log('TE CURAS2')
    }
  }

