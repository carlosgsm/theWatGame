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
      else if(player.x == this.x +this.width && player.y <= this.height) {
        player.x +=5
        this.color = 'red'        
    }
       //colision abajo 
       else if( player.y <= this.height && this.x-this.width <= player.x && this.x+this.width >= player.x) {
        player.y +=5
        this.color = 'purple'        
    }
}
//--------------------------Barrera 2

function Barriers2() {
    this.x = 250;
    this.y = 100;
    this.width = 20;
    this.height = 100;
    this.color = 'black'
  }
  
  Barriers2.prototype.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  
  
  Barriers2.prototype.collision = function(player) {
      //colision izquierda
    // if(  player.x + player.width >= this.x && 
    //     player.y + player.height >= this.y && 
    //     this.y + this.height >= player.y) {
    //     player.x -=5
    //     this.color = 'green'        
    // }

      //colision izda
      if(this.x == player.x + player.width &&
        this.y < player.y + player.height &&
        this.height + this.y > player.y) {
        player.x -=5
        this.color = 'red'        
    }
    //colision izda
    else if (this.x == player.x -this.width  &&
        this.y < player.y + player.height &&
        this.height + this.y > player.y){
        player.x +=5
        this.color = 'purple'  
        }
            //colision arriba

    else if (this.x < player.x + player.width &&
         this.x + this.width > player.x &&
         this.y == player.y + player.height &&
         this.height + this.y > player.y){
            player.y -=5
            this.color = 'green'  
            }
            //colision abajo

    else if (this.x < player.x + player.width &&
                this.x + this.width > player.x &&
                this.y < player.y + player.height &&
         this.height + this.y == player.y){
                   player.y +=5
                   this.color = 'yellow'  
                   }
}
//        //colision abajo 
//        else if( player.y <= this.height && this.x-this.width <= player.x && this.x+this.width >= player.x) {
//         player.y +=5
//         this.color = 'purple'        
//     }
// }


// (this.x < player.x + player.width &&
// this.x + this.width > player.x &&
// this.y < player.y + player.height &&
// this.height + this.y > player.y)

//   player.x + player.width >= this.x && 
//   this.x + this.width >= player.x && 
//   player.y + player.height >= this.y && 
//   this.y + this.height >= player.y
//  this.y && this.x == player.x