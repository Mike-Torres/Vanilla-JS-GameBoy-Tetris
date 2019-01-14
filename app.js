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

//A Button
canvasContext.fillRect(500,500, 100, 50);

//B Button
canvasContext.fillStyle = '#5a65f1';
canvasContext.fillRect(400, 600, 100, 50);

//up arrow
canvasContext.fillStyle = '#5a65f1';
canvasContext.fillRect(150, 575, 50, 75);
//right arrow
canvasContext.fillStyle = '#5a65f1';
canvasContext.fillRect(200, 650, 75, 50);
//down arrow
canvasContext.fillStyle = '#5a65f1';
canvasContext.fillRect(150, 700, 50, 75);
//left arrow
canvasContext.fillStyle = '#5a65f1';
canvasContext.fillRect(75, 650, 75, 50);


};
