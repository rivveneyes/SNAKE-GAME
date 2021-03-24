
const applePlaced={     
    x:maxRandomNumber(Math.floor((Math.random()*mainCanvas.width))),
      y:maxRandomNumber(Math.floor((Math.random()*mainCanvas.height)))
  }


function maxRandomNumber(number){
if(number%20 ==0){
    x=((Math.floor(number/20))*20)
    return x ;
}
else {
    return ((Math.floor(number/20)*20)+20);
}
}
function newPlace(){
applePlaced.x=maxRandomNumber(Math.floor((Math.random()*mainCanvas.width-20)))
applePlaced.y=maxRandomNumber(Math.floor((Math.random()*mainCanvas.height-20)))
return 
}

function drawFruit(){
    innerCanvas.fillStyle= "red";
    innerCanvas.fillRect(
        applePlaced.x,
        applePlaced.y, 
        snake.size,
        snake.size);
        if(snake.body[snake.body.length-1].x===applePlaced.x
            &&snake.body[snake.body.length-1].y===applePlaced.y){
            snake.points+=1
            newPlace();
        }
}
