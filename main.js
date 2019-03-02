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
var healthOb = new healthOb();


function game() {
  
  // Background.draw(game);
  player.draw();
  player.movePlayer();
  player.updatePoints();
  // player2.draw();
  // player2.movePlayer();
  player2.updatePoints();


  dmgOb.draw();
  dmgOb.collision(player);
  dmgOb2.draw();
  dmgOb2.collision(player);
  barriers.draw();
  barriers.collision(player); 
  healthOb.draw();
  healthOb.collision(player);

// player.icono(); //para cargar la imagen
  player.gameOver();

  ctx.fillText("p1_x: " + player.x, 10,20);
  ctx.fillText("p1_y: " + player.y, 10,35);
  ctx.fillText("Health: " + player.health, 10,50);
  ctx.fillText("p2_x: " + player2.x, 400,20);
  ctx.fillText("p2_y: " + player2.y, 400,35);
  ctx.fillText("Health: " + player2.health, 400,50);
}

var interval = setInterval(game, 1000/60);
