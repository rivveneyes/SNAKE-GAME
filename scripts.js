const htmlBody= document.getElementById('body');
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
    dx: 5,
    dy: 5,
    direction:null,
}

console.log(mainCanvas.width)
 function drawSnake(){  
    ctx.clearRect(0,0, mainCanvas.width, mainCanvas.height)
    ctx.fillStyle= "black";
    ctx.fillRect(snake.y,snake.x, snake.size,snake.size);
    requestAnimationFrame(drawSnake);
    //wall detection
    if (snake.y+snake.size>mainCanvas.width || snake.y<0){
    snake.dy *= -1;
    }
     if (snake.x+snake.size>mainCanvas.height||snake.x<0){
        snake.dx*=-1;  
    }
    //snake movement
    switch(snake.direction){
    case 'ArrowDown':
    snake.x+= snake.dx;
    break;
    case "ArrowLeft":
    snake.y-= snake.dy;
    break
    case "ArrowRight": 
    snake.y+= snake.dy; 
    break 
    case "ArrowUp":
    snake.x-=snake.dx;
    break
    }
    
}
htmlBody.addEventListener("keydown", (e)=>{
    console.log(e.key)
    
    if(e.key === "ArrowUp"||e.key=== "ArrowDown"|| e.key=== "ArrowRight"||e.key=== "ArrowLeft"){
        console.log('snake up')
        snake.direction= e.key;
    }
    }) 
drawSnake();

   





