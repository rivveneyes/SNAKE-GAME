
const htmlBody= document.getElementById('body');
const mainCanvas=document.getElementById("canvas");
const innerCanvas = mainCanvas.getContext('2d');

// //PATHS;

const snake ={
    points:1,
    size:20,
    dx: 20,
    dy: 20,
    direction:null,
     body:[
         {x:0,y:0},
     ]
}
let snakeHead=snake.body.length-1;

function painCanvas(){  
    innerCanvas.clearRect(0,0, mainCanvas.width, mainCanvas.height)         
   updateSnakeBody(); 
   colissionCheck();
   snakeMovement();
    drawSnakeBody();
    drawFruit();

    }


htmlBody.addEventListener("keydown", (e)=>{
    // if(snake.direction=="ArrowDown"&&e.key=="ArrowUp"){ 
    //     return         
    // }
     
    if(e.key === "ArrowUp"||e.key=== "ArrowDown"|| e.key=== "ArrowRight"||e.key=== "ArrowLeft"){
        snake.direction= e.key;

}
    }) 
        
setInterval(painCanvas,100);


function updateSnakeBody(){
    snakeHead=snake.body.length-1;
   
    snake.body.push({
        x:snake.body[snakeHead].x, 
        y:snake.body[snakeHead].y
    })     

    if(snake.body.length-1>snake.points){
        snake.body.shift();
    }

    
}
function drawSnakeBody(){
    for(i=0;i<=snake.body.length-1;i++){
        innerCanvas.fillStyle= "black";
    innerCanvas.fillRect(
       snake.body[i].x,
       snake.body[i].y, 
       snake.size,
       snake.size);
    
    }
    }

function snakeMovement(){
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
    }
function colissionCheck(){
     //=========WALL DETECTION========
     if (snake.body[snakeHead].x+snake.size>mainCanvas.width){
        snake.body[snakeHead].x=0;
       }
     if(snake.body[snakeHead].x+snake.size<0){
       snake.body[snakeHead].x=mainCanvas.width;
       }
       if(snake.body[snakeHead].y +snake.size>mainCanvas.height){
       snake.body[snakeHead].y=0;
       }
       if(snake.body[snakeHead].y<0){
           snake.body[snakeHead].y=mainCanvas.height;
       }
    //    console.log(snake.body[])

}