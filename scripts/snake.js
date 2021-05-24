const htmlBody = document.getElementById("body");
const mainCanvas = document.getElementById("canvas");
const innerCanvas = mainCanvas.getContext("2d");
const scoreDispaly = document.getElementById("score");
const alerts = document.querySelector(".alerts");
const highscoreDisplay = document.getElementById("highscore");
// scoreDisplay.innerText = `High Score: ${points}`;
const snake = {
  size: 20,
  dimentionX: 20,
  dimentionY: 20,
  direction: null,
  x: 0,
  y: 0,
  points: 0,
  body: [],
};

htmlBody.addEventListener("keydown", (e) => {
  if (
    e.key === "ArrowUp" ||
    e.key === "ArrowDown" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowLeft"
  ) {
    snake.direction = e.key;
  }
});

setInterval(painCanvas, 100);
function painCanvas() {
  innerCanvas.clearRect(0, 0, mainCanvas.width, mainCanvas.height);
  scoresUpdate();
  takeSnakeNextDirecton();
  collisionCheck();
  updateSnake();
  drawFruit();
  drawSnakeBody();
}

function takeSnakeNextDirecton() {
  switch (snake.direction) {
    case "ArrowDown":
      snake.y += snake.dimentionX;
      break;
    case "ArrowLeft":
      snake.x -= snake.dimentionY;
      break;
    case "ArrowRight":
      snake.x += snake.dimentionY;
      break;
    case "ArrowUp":
      snake.y -= snake.dimentionX;
      break;
  }
}

function collisionCheck() {
  if (snake.x > mainCanvas.width) {
    resetGame();
    lossAlert("You fell off the Map");
    alert.class;
  }
  if (snake.x < 0) {
    resetGame();
    lossAlert("You fell off the Map");
  }
  if (snake.y > mainCanvas.height) {
    resetGame();
    lossAlert("You fell off the Map");
  }
  if (snake.y < 0) {
    resetGame();
    lossAlert("You fell off the Map");
  }

  if (snake.direction !== null) {
    for (i = 0; i <= snake.body.length - 1; i++) {
      if (snake.x == snake.body[i].x && snake.y == snake.body[i].y) {
        resetGame();
        lossAlert("You ate your tail");
      }
    }
  }
}

function updateSnake() {
  snake.body.push({
    x: snake.x,
    y: snake.y,
  });

  if (snake.body.length - 1 > snake.points) {
    snake.body.shift();
  }
}

function drawSnakeBody() {
  innerCanvas.fillStyle = "green";
  innerCanvas.fillRect(
    snake.body[snake.body.length - 1].x,
    snake.body[snake.body.length - 1].y,
    snake.size,
    snake.size
  );
  for (i = snake.body.length - 2; i >= 0; i--) {
    innerCanvas.fillStyle = "black";
    innerCanvas.fillRect(
      snake.body[i].x,
      snake.body[i].y,
      snake.size,
      snake.size
    );
  }
}

function resetGame() {
  snake.direction = null;
  (snake.x = 0), (snake.y = 0), (snake.points = 0), (snake.body = []);
}

function lossAlert(dead) {
  alerts.classList.remove("hidden");
  alerts.innerText = `${dead}`;
  setTimeout(() => {
    alerts.innerText = " ";
    alerts.classList.add("hidden");
  }, 3000);
}

function scoresUpdate() {
  scoreDispaly.innerText = `Score: ${snake.points}`;
  let highscore = localStorage.getItem("highScore");
  if (highscore !== null) {
    highscoreDisplay.innerText = `High Score: ${highscore}`;
  } else {
    highscoreDisplay.innerText = `High Score:`;
  }
}
