let snake = {
  // Head of the snake position on X
  headX: WIDTH / 2,
  // Head of the snake position on Y
  headY: HEIGHT / 2,

  // Horizontal velocity
  directionX: 0,
  // Vertical velocity
  directionY: 0
};

// SIDE SIZE of one snake cell
const SIZE_PIXEL_SNAKE = 10

function drawSnakeInGameBoard(x = snake.headX, y = snake.headY) {
    const gameBoard = document.getElementById("gameBoard").getContext("2d");

    // Set the new position of the snakeHead with snake.head and snake.direction
    snake.headX = snake.headX + snake.directionX;
    snake.headY = snake.headY + snake.directionY;

    // Set the backgroundColor of the snake in the gameboard with a COLOR [RED, BLUE, etc.]
    gameBoard.fillStyle = WHITE;
    // Set the borderColor of the snake in the gameBoard with a COLOR [RED, BLUE, etc.]
    gameBoard.strokestyle = WHITE;

    // Fill the snake background in the gameBoard at is position
    // Example gameBoard.fillReact(top-x, top-y, size-snake-x, size-snake-y)
    gameBoard.fillRect(0, 0, SIZE_PIXEL_SNAKE, SIZE_PIXEL_SNAKE);
    // Fill the snake border in the gameBoard at is position
    // Example gameBoard.strokeRect(top-x, top-y, size-snake-x, size-snake-y)
    gameBoard.strokeRect(0, 0, 0, 0);
}
const initializeSnake = drawSnakeInGameBoard;

// /!\ CALL initializeSnake() to print the snake on the gameBoard /!\
// initializeSnake();