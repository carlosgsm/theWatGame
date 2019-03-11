function Portal() {
  this.x = 15;
  this.y = 400;
  this.width = 35;
  this.height = 70;
}
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
 var portalimg = new Image();
 portalimg.src = "images/portal1.png";

Portal.prototype.draw = function draw() {
  ctx.drawImage(portalimg, this.x, this.y, this.width, this.height); 
}

Portal.prototype.collision = function(player) {

  //colision izda
  if(this.x == player.x + player.width &&
    this.y <= player.y + player.height &&
    this.height + this.y >= player.y) {
    player.x -=5
}
//colision dcha
else if (this.x+5 == player.x   &&
    this.y < player.y + player.height &&
    this.height + this.y > player.y){
    player.x =720
    player.y =30

    }
        //colision arriba

else if (this.x < player.x + player.width &&
     this.x + this.width > player.x &&
     this.y == player.y + player.height &&
     this.height + this.y > player.y){
        player.y -=5
        }
        //colision abajo

else if (this.x < player.x + player.width &&
            this.x + this.width > player.x &&
            this.y < player.y + player.height &&
     this.height + this.y == player.y){
               player.y +=5
      }

//-----------------------COLISION PLAYER 2 ======================================================================================
else if(this.x == player2.x + player2.width &&
this.y < player2.y + player2.height &&
this.height + this.y > player2.y) {
player2.x -=5
}
//colision izda
else if (this.x == player2.x -this.width  &&
this.y < player2.y + player2.height &&
this.height + this.y > player2.y){
  player2.x =720
  player2.y =30
}
  //colision arriba

else if (this.x < player2.x + player2.width &&
this.x + this.width > player2.x &&
this.y == player2.y + player2.height &&
this.height + this.y > player2.y){
  player2.y -=5
  }
  //colision abajo

else if (this.x < player2.x + player2.width &&
      this.x + this.width > player2.x &&
      this.y < player2.y + player2.height &&
this.height + this.y == player2.y){
         player2.y +=5
         }

              }

//==================================================PORTAL 2=======================

function Portal2() {
  this.x = 750;
  this.y = 25;
  this.width = 35;
  this.height = 70;
}

Portal2.prototype.draw = function draw() {
  ctx.drawImage(portalimg, this.x, this.y, this.width, this.height); 
}

Portal2.prototype.collision = function(player) {

 //colision izda
 if(this.x+20 == player.x + player.width &&
  this.y <= player.y + player.height &&
  this.height + this.y >= player.y) {
    player.x = 55;
    player.y = 400;  
}
//colision dcha
else if (this.x == player.x   &&
  this.y < player.y + player.height &&
  this.height + this.y > player.y){
    player2.x +=5
  }
      //colision arriba

else if (this.x < player.x + player.width &&
   this.x + this.width > player.x &&
   this.y == player.y + player.height &&
   this.height + this.y > player.y){
      player.y -=5
      }
      //colision abajo

else if (this.x < player.x + player.width &&
          this.x + this.width > player.x &&
          this.y < player.y + player.height &&
   this.height + this.y == player.y){
             player.y +=5
    }


//-----------------------COLISION PLAYER 2 ======================================================================================
else if(this.x +20== player2.x + player2.width &&
this.y < player2.y + player2.height &&
this.height + this.y > player2.y) {
  player2.x = 55;
  player2.y = 400;  
}
//colision izda
else if (this.x == player2.x -this.width  &&
this.y < player2.y + player2.height &&
this.height + this.y > player2.y){
  player2.x +=5
  
}
  //colision arriba

else if (this.x < player2.x + player2.width &&
this.x + this.width > player2.x &&
this.y == player2.y + player2.height &&
this.height + this.y > player2.y){
  player2.y -=5
  }
  //colision abajo

else if (this.x < player2.x + player2.width &&
      this.x + this.width > player2.x &&
      this.y < player2.y + player2.height &&
this.height + this.y == player2.y){
         player2.y +=5
         }

              }