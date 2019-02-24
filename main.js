var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.height = 500;
canvas.width = 500;
counter = 0;
var isPause = false;

var player = new Player();
var obstacle = new Obstacle();

function Pause() {
  document.addEventListener('keydown', function(e) {
    switch(e.keyCode) {
      case 32:
        isPause = !isPause
        isPause ? clearInterval(interval) : interval = setInterval(game, 1000/60);
    }
  }.bind(this))
}

function game() {
  Pause()
  // counter += 1;
  // if(counter % 10 === 0)obstaclesArray.push(new Obstacle());// lepuedo quitar el counter
  player.movePlayer()
  player.draw()
  obstacle.draw();
  obstacle.damage();
  ctx.fillText("player1_x: " + player.x, 400,40);
  ctx.fillText("player1_y: " + player.y, 400,60);
  ctx.fillText("Health: " + player.health, 400,80);
  obstacle.collision(player);

  //  obstaclesArray.forEach(function(obstacle) {
  //   obstacle.draw();
  //   // obstacle.move();
  //   //obstacle.collision(player);
  // })
}

var interval = setInterval(game, 1000/60);
