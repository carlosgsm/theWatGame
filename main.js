var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 500;

//CONSTRUCTORES

var player = new Player();
var player2 = new Player2();
var dmgOb2 = new dmgOb();
var dmgOb = new dmgOb();
var barriers = new Barriers();
var barriers2 = new Barriers2();
var healthOb = new healthOb();
var fastPill = new fastPill();
var slowBarrier = new slowBarrier();



function game() {

  player.draw();
  player.movePlayer();
  player.updatePoints();
  // player2.draw();
  // player2.movePlayer();
  player2.updatePoints();
  // audio.play();
  // gameOver();

  dmgOb.draw();
  dmgOb.collision(player);
  dmgOb2.draw();
  dmgOb2.collision(player);
  barriers.draw();
  barriers.collision(player); 
  barriers2.draw();
  barriers2.collision(player);
  healthOb.draw();
  healthOb.collision(player);
  fastPill.draw();
  fastPill.collision(player);
  slowBarrier.draw();
  slowBarrier.collision(player);
  
// player.icono(); //para cargar la imagen
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

//------------------------FUNCIONA GAME OVER para 2 jugadores
//   function gameOver(){
//     if (player.health <=0){
//       if(confirm("GAME OVER PLAYER1. Play again?")) {
//         player.health =100
//         player2.health =100
//     }
//     }
//     else if (player2.health <=0){
//       if(confirm("GAME OVER PLAYER2. Play again?")) {
//         player.health =100
//         player2.health =100
//     }
//   }
// }