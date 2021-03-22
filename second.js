
const htmlBody= document.getElementById('body');
const mainCanvas=document.getElementById("canvas");
const innerCanvas = mainCanvas.getContext('2d');

// //PATHS;

const snake ={
    points:3,
    size:20,
    dx: 20,
    dy: 20,
    direction:null,
     body:[
         {x:0,y:0},
     ]
}


function drawSnake(){ 
    const snakeHead=snake.body.length-1;

    innerCanvas.clearRect(0,0, mainCanvas.width, mainCanvas.height)  
    //snake movement
    snake.body.push({
        x:snake.body[snakeHead].x, 
        y:snake.body[snakeHead].y
    }) 

    if(snake.body.length-1>snake.points){
        snake.body.shift();
    }

    switch(snake.direction){
        case 'ArrowDown':
        snake.body[snakeHead].y+= snake.dx;
        break;
        case "ArrowLeft":
        snake.body[snakeHead].x-= snake.dy;
        break
        case "ArrowRight": 
        snake.body[snakeHead].x+= snake.dy; 
        break 
        case "ArrowUp":
        snake.body[snakeHead].y-=snake.dx;
        break
        }
            //====ENDLESS WALL DETECTION=====
                if (snake.body[snakeHead].x+snake.size>mainCanvas.width){
                 snake.body[snakeHead].x=0;
                 }

                if(snake.body[snakeHead].x+snake.size<0){
                snake.body[snakeHead].x=mainCanvas.width;}

                if(snake.body[snakeHead].y +snake.size>mainCanvas.height){
                snake.body[snakeHead].y=0;
                }
                if(snake.body[snakeHead].y<0){
                    snake.body[snakeHead].y=mainCanvas.height;
                }
               
    

    for(i=0;i<=snake.body.length-1;i++){
         innerCanvas.fillStyle= "black";
    innerCanvas.fillRect(
        snake.body[i].x,
        snake.body[i].y, 
        snake.size,
        snake.size);

    }
  

drawFruit();

    }






htmlBody.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowUp"||e.key=== "ArrowDown"|| e.key=== "ArrowRight"||e.key=== "ArrowLeft"){
        snake.direction= e.key;
    }
  
    }) 
    
setInterval(drawSnake,200);

