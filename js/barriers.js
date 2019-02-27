function Barriers() {
    this.x = 150;
    this.y = 0;
    this.width = 20;
    this.height = 100;
    this.color = 'black'
  
  }
  
  Barriers.prototype.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  
  
  Barriers.prototype.collision = function(player) {
      //colision izquierda
    if(player.x + player.width == this.x && player.y <= this.height) {
        player.x -=5
        this.color = 'green'        
    }
      //colision derecha
      else if(player.x  == this.x && player.y <= this.height) {
        player.x +=5
        this.color = 'red'        
    }
       //colision abajo Hace falta calibrar, no lo hace del todo bien
       else if( player.y + player.height ==  this.height + this.y && this.x == player.x) {
        player.y +=5
        this.color = 'purple'        
    }
}


//   player.x + player.width >= this.x && 
//   this.x + this.width >= player.x && 
//   player.y + player.height >= this.y && 
//   this.y + this.height >= player.y