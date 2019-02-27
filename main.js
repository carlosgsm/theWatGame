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
  
  player.movePlayer()
  player.draw()
  dmgOb.draw();
  dmgOb.collision(player);
  dmgOb2.draw();
  dmgOb2.collision(player);
  barriers.draw();
  barriers.collision(player); 
  healthOb.draw();
  healthOb.collision(player);
 

  ctx.fillText("player1_x: " + player.x, 400,40);
  ctx.fillText("player1_y: " + player.y, 400,60);
  ctx.fillText("Health: " + player.health, 400,80);


  
}

var interval = setInterval(game, 1000/60);
