const mainCanvas=document.getElementById("canvas");
const ctx = mainCanvas.getContext('2d');

// ctx.fillStyle=" red";
// ctx.fillRect(10,10, 20,20);
// ctx.fillStyle="orange";
// ctx.fillRect(50,10,20,20);

// //strokeRect()
// ctx.lineWidth = 5;
// ctx.strokeStyle = 'green';
// ctx.strokeRect( 40,40,50,50);

// ctx.clearRect(14 ,14,10,10);

// ctx.fillStyle = "yellow";
// ctx.fillText("hello world", 200, 20);


// //PATHS;

const snake ={
    x:0,
    y:0,
    size:20,
    dx: 1,
    dy: 1,
}
 function drawSnake(){  
    ctx.clearRect(0,0, mainCanvas.width, mainCanvas.height)
    ctx.fillStyle= "red";
    ctx.fillRect(snake.y,snake.x, 20,20);
    requestAnimationFrame(drawSnake);
    snake.x+= snake.dx;
    snake.y+= snake.dy;
 }

 drawSnake();