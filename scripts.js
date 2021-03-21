const htmlBody= document.getElementById('body');
const mainCanvas=document.getElementById("canvas");
const innerCanvas = mainCanvas.getContext('2d');

// //PATHS;

const snake ={
    points:1,
    x:0,
    y:0,
    size:20,
    dx: 20,
    dy: 20,
    direction:null,
    length:1,
     body:[
     ]
}
// snake.body.push({x:100,y:100});
// console.log(snake.body[1].x)

 function drawSnake(){  
    
    // wall detection
    if (snake.x+snake.size>mainCanvas.width || snake.x<0){
    snake.dy *= -1;
    }
     if (snake.y +snake.size>mainCanvas.height||snake.y<0){
        snake.dx*=-1;  
    }


    innerCanvas.clearRect(0,0, mainCanvas.width, mainCanvas.height)  
    innerCanvas.fillStyle= "black";
    innerCanvas.fillRect(
        snake.x,
        snake.y, 
        snake.size,
        snake.size);
     
    //snake movement
    switch(snake.direction){
    case 'ArrowDown':
    snake.y+= snake.dx;
    break;
    case "ArrowLeft":
    snake.x-= snake.dy;
    break
    case "ArrowRight": 
    snake.x+= snake.dy; 
    break 
    case "ArrowUp":
    snake.y-=snake.dx;
    break
    }
    snake.body.push({x:snake.x,y:snake.y})
    //console.log(snake.x+ ` ads `+snake.y)
       
        snake.body.forEach(block=>{ 
            innerCanvas.fillStyle= "yellow";
            innerCanvas.fillRect(
                block.x,
                block.y, 
                snake.size,
                snake.size);
                innerCanvas.fillRect(block.x,block.y, snake.size,snake.size);
        })
        snake.body.pop(); 
        // innerCanvas.fillStyle= "red";
        // innerCanvas.fillRect(
        //     snake.x+snake.dx,
        //     snake.y,
        //     snake.size,
        //     snake.size);

            //   innerCanvas.fillStyle= "red";
   

    // snake.body[0]={x:snake.x,y:snake.y}


        
    

    requestAnimationFrame(drawSnake);    
}
htmlBody.addEventListener("keydown", (e)=>{
    if(e.key === "ArrowUp"||e.key=== "ArrowDown"|| e.key=== "ArrowRight"||e.key=== "ArrowLeft"){
        snake.direction= e.key;
    }
    }) 
drawSnake();

   





