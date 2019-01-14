let canvas;
let canvasContext;

window.onload = function(){
  console.log("hello")
canvas = document.getElementById('gameCanvas');
canvasContext = canvas.getContext('2d');

canvasContext.fillStyle = '#FBC610';
canvasContext.fillRect(0,0,canvas.width, canvas.height);
canvasContext.fillStyle = '#5a65f1';
//-------------------------------------------------------
//                          A & B Buttons


//A Button
canvasContext.fillRect(500, 625, 100, 50);

//B Button
canvasContext.fillStyle = '#5a65f1';
canvasContext.fillRect(380, 700, 100, 50);

//-------------------------------------------------------------------------
//                    Up/Down/Left/Right Buttons

//up arrow

canvasContext.fillStyle = '#692a35';
canvasContext.fillRect(150, 625, 50, 75);

//right arrow
canvasContext.fillStyle = '#692a35';
canvasContext.fillRect(200, 700, 75, 50);

//down arrow
canvasContext.fillStyle = '#692a35';
canvasContext.fillRect(150, 750, 50, 75);

//left arrow
canvasContext.fillStyle = '#692a35';
canvasContext.fillRect(75, 700, 75, 50);

//-------------------------------------------------------------------------
//                        Pause/Sound/Reset

//Pause
canvasContext.fillStyle = '#423638';
canvasContext.fillRect(400, 500, 55, 30);

//Sound
canvasContext.fillStyle = '#423638';
canvasContext.fillRect(300, 500, 55, 30);

//Reset
canvasContext.fillStyle = '#ff0026';
canvasContext.fillRect(200, 500, 55, 30);




};
