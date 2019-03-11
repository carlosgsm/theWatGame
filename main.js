var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 800;

//CONSTRUCTORES
var slowBarrier = new slowBarrier();

var player = new Player();
var player2 = new Player2();

var dmgOb = [new dmgOb(),new dmgOb(),new dmgOb(),new dmgOb(),new dmgOb(),new dmgOb(),new dmgOb(),new dmgOb()]
var healthOb = [new healthOb(),new healthOb(),new healthOb(),new healthOb(),new healthOb(),]// var dmgOb2 = new dmgOb();

var barriers = new Barriers();
var barriers2 = new Barriers2();
var barriers4 = new Barriers4();
var barriers5 = new Barriers5();
var barriers6 = new Barriers6();
var barriers7 = new Barriers7();
var barriers8 = new Barriers8();
var barriers9 = new Barriers9();
var barriers10 = new Barriers10();
var barriers11 = new Barriers11();
var barriers12 = new Barriers12();

var fastPill = new fastPill();
var healthBottle = new healthBottle();
var portal = new Portal();
var portal2 = new Portal2();

// var barriers3 = new Barriers2();
// var barriers4 = [new Barriers2(),new Barriers2()]
// var barriersP2 = [new BarriersP2(),new BarriersP2(),new BarriersP2(),new BarriersP2()]


function game() {
  // audio.play();
  // gameOver();
  // player.draw();
  // player2.zombie();
  
  player.draw();
  player2.draw();

  player.movePlayer();
  player2.movePlayer();

  player.updatePoints();
  player2.updatePoints();

  //---------------------------------BARRERAS 
  barriers.draw();
  barriers.collision(player); 
  barriers2.draw();
  barriers2.collision(player);
  barriers4.draw();
  barriers4.collision(player);
  barriers5.draw();
  barriers5.collision(player);
  barriers6.draw();
  barriers6.collision(player);
  barriers7.draw();
  barriers7.collision(player);
  barriers8.draw();
  barriers8.collision(player);
  barriers9.draw();
  barriers9.collision(player);
  barriers10.draw();
  barriers10.collision(player);
  barriers11.draw();
  barriers11.collision(player);
  barriers12.draw();
  barriers12.collision(player);
  //---------------------------------OBJETOS DE DAMAGE
  dmgOb[0].draw();
  dmgOb[0].collision(player); 
  dmgOb[1].draw();
  dmgOb[1].collision(player);
  dmgOb[2].draw();
  dmgOb[2].collision(player);
  dmgOb[3].draw();
  dmgOb[3].collision(player);
  dmgOb[4].draw();
  dmgOb[4].collision(player);
  dmgOb[5].draw();
  dmgOb[5].collision(player);
  dmgOb[6].draw();
  dmgOb[6].collision(player);
  dmgOb[7].draw();
  dmgOb[7].collision(player);
  //---------------------------------OBJETOS DE HEAL
  healthOb[0].draw();
  healthOb[0].collision(player); 
  healthOb[1].draw();
  healthOb[1].collision(player);
  healthOb[2].draw();
  healthOb[2].collision(player);
  healthOb[3].draw();
  healthOb[3].collision(player);
  healthOb[4].draw();
  healthOb[4].collision(player);
  healthBottle.draw();
  healthBottle.collision(player);
  //---------------------------------OBJETOS VARIOS
  fastPill.draw();
  fastPill.collision(player);
  portal.draw();
  portal.collision(player);
  portal2.draw();
  portal2.collision(player);
  
  // slowBarrier.draw();  // aparece por delante en lugar de por detras, probando el orden de llamada, no cambia...
  // slowBarrier.collision(player);
  
    // player.gameOver();

  ctx.fillText("p1_x: " + player.x, 10,20);
  ctx.fillText("p1_y: " + player.y, 10,35);
  ctx.fillText("Health: " + player.health, 10,50);
  ctx.fillText("p2_x: " + player2.x, 400,20);
  ctx.fillText("p2_y: " + player2.y, 400,35);
  ctx.fillText("Health: " + player2.health, 400,50);
}

var interval = setInterval(game, 1000/60);

// var audio = new Audio('audios/421_Disco_Bach_Loop.mp3');
// audio.play();

//PRUEBA CONSTRUCTOR VARIOS

// counter += 1;
  // if(counter % 10 === 0)obstaclesArray.push(new dmgOb());
  // obstaclesArray.forEach(function(dmgOb) {
  //   dmgOb.draw();
    
  // })

//------------------------FUNCIONA GAME OVER para 2 jugadores arreglar el gameover, se muestra a posteriori
//   function gameOver(){
//     if (player.health <=85){
//       function displayGameOver(){
//         document.getElementById("imggameover").style.display = "block";
//         }
//         displayGameOver();

//       setTimeout(function() {if(confirm("La palmaste PLAYER1.No vales para una mierda, marcha al fornite || Play again?")) {
//           window.location.href = "game.html";
//           player.health =100
//           player2.health =100
//         }  
//         else {alert("Mala ruina tengas!");
//         window.location.href = "index.html";
//       }
//         },1000);
//     }
    
//     else if (player2.health <=0){
//       if(confirm("GAME OVER PLAYER2. Play again?")) {
//         player.health =100
//         player2.health =100
//     }
//   }
// }




 // barriers3.draw();
  // barriers3.collision(player);
  // slowBarrier.draw();
  // barriers4[1].draw();
  // barriers4[1].collision(player);
  // barriers4[0].draw();
  // barriers4[0].collision(player);
  // barriersP2[1].draw();
  // barriersP2[1].collision(player);
  // barriersP2[0].draw();
  // barriersP2[0].collision(player);
  // barriersP2[2].draw();
  // barriersP2[2].collision(player);
  // barriersP2[3].draw();
  // barriersP2[3].collision(player);
  // dmgOb2.draw();
  // dmgOb2.collision(player);