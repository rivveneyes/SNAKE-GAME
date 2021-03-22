
//if snake eats fruit change location by 
let applePlaced={
    x:Math.floor((Math.random()*mainCanvas.width)),
    y:Math.floor((Math.random()*mainCanvas.height))       
}


function drawFruit(){
    innerCanvas.fillStyle= "red";
    innerCanvas.fillRect(
        applePlaced.x,
        applePlaced.y, 
        snake.size,
        snake.size);
}
