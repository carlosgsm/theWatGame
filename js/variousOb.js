function fastPill() {
    // this.x = Math.floor(Math.random() * canvas.width);
    // this.y = Math.floor(Math.random() * canvas.height);
    this.x = canvas.width/2;
    this.y = canvas.height/2-20;
    this.width = 30;
    this.height = 30;
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
        this.x = 1000
        player.speed=player.speed+1
        setTimeout(function(){player.speed=1},1000);//para que no este permanentemente a velocidad 0.1   

        console.log('SPEEED')
    }
    else if(
      player2.x + player2.width >= this.x && 
      this.x + this.width >= player2.x && 
      player2.y + player2.height >= this.y && 
      this.y + this.height >= player2.y
      ) {
        this.x = 1000
        player2.speed =player2.speed+1
        setTimeout(function(){player2.speed=1},1000);
        console.log('SPEED2')
    }
  }


  function slowButton() {
    this.x = 10;
    this.y = 10;
    this.width = 20;
    this.height = 20;
    this.color = "black";
  }

  slowButton.prototype.draw = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  slowButton.prototype.collision = function(player) {

  //colision derecha
  if(player.x == this.x +this.width && player.y <= this.height) {
    player.x +=5
    this.color = 'red'    
    player2.speed=0  
    setTimeout(function(){player2.speed=1},2000);
}
   //colision abajo 
   else if( player.y <= this.height && this.x-this.width <= player.x && this.x+this.width >= player.x) {
    player.y +=5
    this.color = 'red'  
      
}
// COLISIONES DEL PLAYER2 ==============================================================================

if(player2.x + player2.width == this.x && player2.y <= this.height) {
  player2.x -=5
  this.color = 'blue'        
}
//colision derecha
else if(player2.x == this.x +this.width && player2.y <= this.height) {
  player2.x +=5
  this.color = 'blue'        
}
 //colision abajo 
 else if( player2.y <= this.height && this.x-this.width <= player2.x && this.x+this.width >= player2.x) {
  player2.y +=5
  this.color = 'blue'        
}
}




//==============================================



function slowButton2() {
  this.x = 770;
  this.y = 520;
  this.width = 20;
  this.height = 20;
  this.color = "black";
}

slowButton2.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

slowButton2.prototype.collision = function(player) {

  //colision dcha
  if(this.x == player.x + player.width &&
    this.y <= player.y + player.height &&
    this.height + this.y >= player.y) {
    player.x -=5
    this.color = 'red'        
}
  //colision arriba

else if (this.x < player.x + player.width &&
     this.x + this.width > player.x &&
     this.y == player.y + player.height &&
     this.height + this.y > player.y){
        player.y -=5
        this.color = 'red'  
        }
// COLISIONES DEL PLAYER2 ==============================================================================

else if(this.x == player2.x + player2.width &&
  this.y < player2.y + player2.height &&
  this.height + this.y > player2.y) {
  player2.x -=5
  this.color = 'blue'        
  }
  //colision izda
  else if (this.x == player2.x -this.width  &&
  this.y < player2.y + player2.height &&
  this.height + this.y > player2.y){
  player2.x +=5
  this.color = 'blue'  
  }
      //colision arriba
  
  else if (this.x < player2.x + player2.width &&
   this.x + this.width > player2.x &&
   this.y == player2.y + player2.height &&
   this.height + this.y > player2.y){
      player2.y -=5
      this.color = 'blue'  
      }
    }


  function stoper(){
      if (slowButton.color =='red' && slowButton2.color =='red'){
        player2.speed=0  
        setTimeout(function(){player2.speed=1;slowButton.color ='black';slowButton2.color ='black';},3000);        }
     else if (slowButton.color =='blue' && slowButton2.color =='blue'){
          player.speed=0  
          setTimeout(function(){player.speed=1;slowButton.color ='black';slowButton2.color ='black';},3000);    
      
    }
  }