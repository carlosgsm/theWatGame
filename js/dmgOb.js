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
      this.x=Math.floor(Math.random() * canvas.width);
      this.y = Math.floor(Math.random() * canvas.height)
      console.log('TE QUEMAS')
  }
  else if(
    player2.x + player2.width >= this.x && 
    this.x + this.width >= player2.x && 
    player2.y + player2.height >= this.y && 
    this.y + this.height >= player2.y
    ) {
      player.health =player.health-10
      this.x=Math.floor(Math.random() * canvas.width);
      this.y = Math.floor(Math.random() * canvas.height)
            console.log('TE QUEMAS2')
  }
}



dmgOb.prototype.vuelta = function (){setTimeout(function() {if(this.x==1000){
{this.x=Math.floor(Math.random() * canvas.width);
  this.y = Math.floor(Math.random() * canvas.height);
}
              console.log('se piro')
            }  
            else {;
          }
        },1000);//no aplica bien el delay, solo la primera vez
          }

          
            
          // setTimeout(function(){ 
          //   this.x=Math.floor(Math.random() * canvas.width);
          //   this.y = Math.floor(Math.random() * canvas.height)
          // }, 3000);

//  dmgOb.prototype.vuelta = function () {setTimeout(function()
//   {if(dmgOb.x==1000){
// {dmgOb.x=Math.floor(Math.random() * canvas.width);}

//               console.log('se piro')
//             }  
//             else {console.log('NO se piro');
//           }
//             },3000);
//           }

          













// function dmgObn() {
//   this.x = Math.floor(Math.random() * canvas.width);
//   this.y = Math.floor(Math.random() * canvas.height);
//   this.width = 30;
//   this.height = 30;
//    }

//    var dmgimg = new Image();
//    dmgimg.src = "images/virus1.png";

//   dmgObn.prototype.draw = function draw() {
//     ctx.drawImage(dmgimg, this.x, this.y, this.width, this.height); 
// }

// setTimeout(function() {if(dmgObn.x=1000){


//               console.log('se piro')
//             }  
//             else {console.log('NO se piro');
//           }
//             },1000);
                 
// dmgObn.prototype.collision = function(player) {
//               if(
//                 player.x + player.width >= this.x && 
//                 this.x + this.width >= player.x && 
//                 player.y + player.height >= this.y && 
//                 this.y + this.height >= player.y
//                 ) {
//                   player2.health =player2.health-10
//                   this.x = 1000
//                   console.log('TE QUEMAS')
//               }
//               else if(
//                 player2.x + player2.width >= this.x && 
//                 this.x + this.width >= player2.x && 
//                 player2.y + player2.height >= this.y && 
//                 this.y + this.height >= player2.y
//                 ) {
//                   player.health =player.health-10
//                   this.x = 1000
//                   console.log('TE QUEMAS2')
//               }
//             }
              


 
//       setTimeout(function() {if(confirm("La palmaste PLAYER1.No vales para una mierda, marcha al fornite || Play again?")) {
//           window.location.href = "http://elpais.com";
//           player.health =100
//           player2.health =100
//         }  
//         else {alert("Mala ruina tengas!");
//       }
//         },1000);
//     }         