var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 500;


//CONSTRUCTORES

var player = new Player();
var dmgOb2 = new dmgOb();
var dmgOb = new dmgOb();
var barriers = new Barriers();
var healthOb = new healthOb();


function game() {
  
  
  player.movePlayer();
  player.draw();
  // player.icono(); para cargar la imagen
  // player.gameOver();

  dmgOb.draw();
  dmgOb.collision(player);
  dmgOb2.draw();
  dmgOb2.collision(player);
  barriers.draw();
  barriers.collision(player); 
  healthOb.draw();
  healthOb.collision(player);


  ctx.fillText("player1_x: " + player.x, 10,20);
  ctx.fillText("player1_y: " + player.y, 10,35);
  ctx.fillText("Health: " + player.health, 10,50);
}

var interval = setInterval(game, 1000/60);
