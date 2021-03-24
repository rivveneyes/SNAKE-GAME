const htmlBody= document.getElementById('body');
const mainCanvas=document.getElementById("canvas");
const innerCanvas = mainCanvas.getContext('2d');

htmlBody.addEventListener("keydown", (e)=>{
    // if(snake.direction=="ArrowDown"&&e.key=="ArrowUp"){ 
    //     return         
    // }
     
    if(e.key === "ArrowUp"||e.key=== "ArrowDown"|| e.key=== "ArrowRight"||e.key=== "ArrowLeft"){
        snake.direction= e.key;
        }
    }) 

const snake ={
    points:0,
    size:20,
    x:0,
    y:0,
    dx:20,
    dy:20,
    direction:null,
     body:[
    
     ]
}

///snake {snake head chord}
let snakeHead=snake.body.length;
///snake {furute chord}
let snakeFurutre=0
function painCanvas(){  
    innerCanvas.clearRect(0,0, mainCanvas.width, mainCanvas.height);
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
    
            snake.body.push({      
                x:snake.x, 
                y:snake.y
    
            })        
           
            if(snake.body.length-1>snake.points){
                snake.body.shift() 
            }
           console.log(snake.body.length)


              console.log("acitve")
              
        //    for (i=0;i<snake.body.lenght-1;i++){
               
        //     if(snake.body[snake.body.lenght-1].x==snake.body[i].x&&
        //         snake.body[snake.body.lenght-1].y==snake.body[i].y){
        //             console.log("your done for now ")
        //         }
        //     }




           
        
        
  
    drawFruit();
    drawSnakeBody();     
}
setInterval(painCanvas,150);

function snakeMovement(){
    switch(snake.direction){
        case 'ArrowDown':
        snake.body[0].y+= snake.dx;
        break;
        case "ArrowLeft":
        snake.body[0].x-= snake.dy;
        break
        case "ArrowRight": 
        snake.body[0].x+= snake.dy; 
        break 
        case "ArrowUp":
        snake.body[0].y-=snake.dx;
        break
        }
    snake.body.push({      
            x:snake.body[0].x, 
            y:snake.body[0].y
        })

    }    


function updateSnakeBody(){
 console.log(snake.body.length)
    if(snake.body.length-2>snake.points){
        snake.body.unshift();    
        console.log("hit")
    }

}

function drawSnakeBody(){
    

    for(i=snake.body.length-1;i>=0;i--){
        innerCanvas.fillStyle= "black";
    innerCanvas.fillRect(
       snake.body[i].x,
       snake.body[i].y, 
       snake.size,
       snake.size);
    }
    }



//================SETTER===============

    