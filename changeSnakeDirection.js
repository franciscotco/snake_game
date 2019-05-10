// KEY CODE
const LEFT_KEY = 37;
const RIGHT_KEY = 39;
const UP_KEY = 38;
const DOWN_KEY = 40;

function changeSnakeDirection(event) {
   const keyPressed = event.keyCode;

  // Condition which compare the "KEY PRESSED" by the user with a "KEY CODE"
  if (keyPressed === LEFT_KEY) {
    snake.directionX = -10;
    snake.directionY = 0;
  }
   
  //  UP
  //   snake.directionX = 0;
  //   snake.directionY = -10;
   
  //  RIGHT
  //   snake.directionX = 10;
  //   snake.directionY = 0;
   
  //  DOWN
  //   snake.directionX = 0;
  //   snake.directionY = 10;
}

// /!\ CALL the line bellow for initialize the listener to trigger the function changeSnakeDirection when the user press a key on the keypad /!\
// document.addEventListener("keydown", changeSnakeDirection);