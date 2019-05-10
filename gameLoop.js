// Speed of the game in milliseconds
const GAME_SPEED = 100;

// /!\ Call gameLoop() to start the main loop to run the game /!\
// gameLoop();

function gameLoop() {
   setTimeout(function onTick() {

      resetGameBoard();
      drawSnakeInGameBoard();

      gameLoop();
   }, GAME_SPEED)
}