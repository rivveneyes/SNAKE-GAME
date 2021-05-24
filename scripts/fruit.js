const applePlaced = {
  x: maxRandomNumber(Math.floor(Math.random() * mainCanvas.width)),
  y: maxRandomNumber(Math.floor(Math.random() * mainCanvas.height)),
};

function maxRandomNumber(number) {
  if (number % 20 === 0) {
    return number === 700 ? number - 20 : number;
  } else {
    let edgelimits = Math.floor(number / 20) * 20;
    return edgelimits < 20 ? edgelimits + 20 : edgelimits;
  }
}
function updateHighscore(points) {
  let highScore = JSON.parse(localStorage.getItem("highScore"));
  if (highScore == null || highScore < points) {
    localStorage.setItem("highScore", JSON.stringify(points));
  }
}
function newPlace() {
  applePlaced.x = maxRandomNumber(
    Math.floor(Math.random() * mainCanvas.width - 20)
  );
  applePlaced.y = maxRandomNumber(
    Math.floor(Math.random() * mainCanvas.height - 20)
  );
  return;
}

function drawFruit() {
  innerCanvas.fillStyle = "red";
  innerCanvas.fillRect(applePlaced.x, applePlaced.y, snake.size, snake.size);
  if (
    snake.body[snake.body.length - 1].x === applePlaced.x &&
    snake.body[snake.body.length - 1].y === applePlaced.y
  ) {
    snake.points += 1;

    updateHighscore(snake.points);
    newPlace();
  }
}
