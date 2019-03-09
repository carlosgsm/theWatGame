function Barriers() {
  this.x = 150;
  this.y = 0;
  this.width = 20;
  this.height = 100;
  this.color = 'black'
}
 //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
Barriers.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

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
  // COLISIONES DEL PLAYER2 ==============================================================================

  if(player2.x + player2.width == this.x && player2.y <= this.height) {
    player2.x -=5
    this.color = 'green'        
}
  //colision derecha
  else if(player2.x == this.x +this.width && player2.y <= this.height) {
    player2.x +=5
    this.color = 'red'        
}
   //colision abajo 
   else if( player2.y <= this.height && this.x-this.width <= player2.x && this.x+this.width >= player2.x) {
    player2.y +=5
    this.color = 'purple'        
}
}


//--------------------------Barrera 2 =====================================================================

function Barriers2() {
  this.x = 200;
  this.y = Math.ceil(Math.random() * 400/5)*5;
  this.width = 20;
  this.height = 100;
  this.color = 'black'
}
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Barriers2.prototype.draw = function () {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.width, this.height);
}

var metalimg = new Image();
  metalimg.src = "images/metal-texture.png";

 Barriers2.prototype.draw = function draw() {
   ctx.drawImage(metalimg, this.x, this.y, this.width, this.height); 
}
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

Barriers2.prototype.collision = function(player) {

    //colision izda
    if(this.x == player.x + player.width &&
      this.y <= player.y + player.height &&
      this.height + this.y >= player.y) {
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

//-----------------------COLISION PLAYER 2 ======================================================================================
else if(this.x == player2.x + player2.width &&
this.y < player2.y + player2.height &&
this.height + this.y > player2.y) {
player2.x -=5
this.color = 'red'        
}
//colision izda
else if (this.x == player2.x -this.width  &&
this.y < player2.y + player2.height &&
this.height + this.y > player2.y){
player2.x +=5
this.color = 'purple'  
}
    //colision arriba

else if (this.x < player2.x + player2.width &&
 this.x + this.width > player2.x &&
 this.y == player2.y + player2.height &&
 this.height + this.y > player2.y){
    player2.y -=5
    this.color = 'green'  
    }
    //colision abajo

else if (this.x < player2.x + player2.width &&
        this.x + this.width > player2.x &&
        this.y < player2.y + player2.height &&
 this.height + this.y == player2.y){
           player2.y +=5
           this.color = 'yellow'  
           }

                }


//--------------------------Barreras Verticales =====================================================================


Barriers4.prototype = Object.create(Barriers2.prototype);
Barriers4.prototype.constructor = Barriers4;
function Barriers4(){
  Barriers2.call(this);
  this.x=this.x+90
}

Barriers5.prototype = Object.create(Barriers4.prototype);
Barriers5.prototype.constructor = Barriers5;
function Barriers5(){
  Barriers4.call(this);
  this.x=this.x+90
}

Barriers6.prototype = Object.create(Barriers5.prototype);
Barriers6.prototype.constructor = Barriers6;
function Barriers6(){
  Barriers5.call(this);
  this.x=this.x+90
}

Barriers7.prototype = Object.create(Barriers6.prototype);
Barriers7.prototype.constructor = Barriers7;
function Barriers7(){
  Barriers6.call(this);
  this.x=this.x+90
}

Barriers8.prototype = Object.create(Barriers7.prototype);
Barriers8.prototype.constructor = Barriers8;
function Barriers8(){
  Barriers7.call(this);
  this.x=this.x+90
}

//--------------------------Barreras Horizontales =====================================================================

Barriers9.prototype = Object.create(Barriers8.prototype);
Barriers9.prototype.constructor = Barriers9;
function Barriers9(){
  Barriers8.call(this);
  this.x= Math.ceil(Math.random() * 700/5)*5;
  this.y= 150
  this.width = 100;
  this.height = 20;
}

Barriers10.prototype = Object.create(Barriers9.prototype);
Barriers10.prototype.constructor = Barriers10;
function Barriers10(){
  Barriers9.call(this);
  this.y=this.y+90
  this.height=30
}

Barriers11.prototype = Object.create(Barriers10.prototype);
Barriers11.prototype.constructor = Barriers11;
function Barriers11(){
  Barriers10.call(this);
  this.y=this.y+90
  this.width= 50
  this.height=20
}

Barriers12.prototype = Object.create(Barriers11.prototype);
Barriers12.prototype.constructor = Barriers12;
function Barriers12(){
  Barriers11.call(this);
  this.y=this.y+90
  this.width=150
  this.x = Math.ceil(Math.random() * 500/5)*5;//para no encajonar a player 2 un x menor
}
///////

// function Barriers3() {
//   this.x = 350;
//   this.y = 200;
//   this.width = 90;
//   this.height = 100;
//   this.color = 'black'
//   }
  
//   Barriers3.prototype.draw = function () {
//   ctx.fillStyle = this.color;
//   // ctx.fillRect(this.x, this.y, this.width, this.height);
//   ctx.fillRect(canvas.width/2-45,canvas.height/2-50,this.width, this.height);
//   ctx.clearRect(canvas.width/2-22.5,canvas.height/2-25,this.width,this.height/2);
//   }
//   function movim (){setInterval(function(){
//     if (this.x=this.x+90){this.x=this.x+10;
//     }}, 1000);
// }



//======== barrera central

// Barriers3.prototype.collision = function(player) {

//   //colision izda
//   if(this.x == player.x + player.width &&
//     this.y < player.y + player.height &&
//     this.height + this.y > player.y) {
//     player.x -=5
//     this.color = 'red'        
// }
// //colision izda
// else if (this.x == player.x -this.width  &&
//     this.y < player.y + player.height &&
//     this.height + this.y > player.y){
//     player.x +=5
//     this.color = 'purple'  
//     }
//         //colision arriba

// else if (this.x < player.x + player.width &&
//      this.x + this.width > player.x &&
//      this.y == player.y + player.height &&
//      this.height + this.y > player.y){
//         player.y -=5
//         this.color = 'green'  
//         }
//         //colision abajo

// else if (this.x < player.x + player.width &&
//             this.x + this.width > player.x &&
//             this.y < player.y + player.height &&
//      this.height + this.y == player.y){
//                player.y +=5
//                this.color = 'yellow'  
//       }

// 


// (this.x < player.x + player.width &&
// this.x + this.width > player.x &&
// this.y < player.y + player.height &&
// this.height + this.y > player.y)

//   player.x + player.width >= this.x && 
//   this.x + this.width >= player.x && 
//   player.y + player.height >= this.y && 
//   this.y + this.height >= player.y
//  this.y && this.x == player.x