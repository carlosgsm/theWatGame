function fastPill() {
    // this.x = Math.floor(Math.random() * canvas.width);
    // this.y = Math.floor(Math.random() * canvas.height);
    this.x = canvas.width/2;
    this.y = canvas.height/2-20;
    this.width = 40;
    this.height = 40;
  }
 
  var fastimg = new Image();
  fastimg.src = "images/bluepill.png";

  fastPill.prototype.draw = function draw() {
       ctx.drawImage(fastimg, fastPill.x, fastPill.y, fastPill.width, fastPill.height); 
    }
 
  fastPill.prototype.collision = function(player) {
    if(
      player.x + player.width >= this.x && 
      this.x + this.width >= player.x && 
      player.y + player.height >= this.y && 
      this.y + this.height >= player.y
      ) {
        player.speed =player.speed+0.5
        this.x = 1000
        console.log('SPEEED')
    }
    else if(
      player2.x + player2.width >= this.x && 
      this.x + this.width >= player2.x && 
      player2.y + player2.height >= this.y && 
      this.y + this.height >= player2.y
      ) {
        player2.speed =player2.speed+0.5
        this.x = 1000
        console.log('SPEED')
    }
  }

