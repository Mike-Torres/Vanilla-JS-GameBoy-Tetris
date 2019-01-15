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
canvasContext.beginPath();
canvasContext.arc(530, 625, 50, 0, 2 * Math.PI);
canvasContext.fillStyle = '#5a65f1';
canvasContext.fill();
canvasContext.stroke();

//B Button
canvasContext.beginPath();
canvasContext.arc(420, 700, 50, 0, 2 * Math.PI);
canvasContext.fillStyle = '#5a65f1';
canvasContext.fill();
canvasContext.stroke();


//-------------------------------------------------------------------------
//                    Up/Down/Left/Right Buttons

//up arrow

canvasContext.fillStyle = 'black';
canvasContext.fillRect(150, 625, 50, 75);

//right arrow
canvasContext.fillStyle = 'black';
canvasContext.fillRect(200, 700, 75, 50);

//down arrow
canvasContext.fillStyle = '#black';
canvasContext.fillRect(150, 750, 50, 75);

//left arrow
canvasContext.fillStyle = '#black';
canvasContext.fillRect(75, 700, 75, 50);

//-------------------------------------------------------------------------
//                        Pause/Sound/Reset


//pause
canvasContext.beginPath();
canvasContext.arc(420, 500, 30, 0, 2 * Math.PI);
canvasContext.fillStyle = '#423638';
canvasContext.fill();
canvasContext.stroke();


//Sound
canvasContext.beginPath();
canvasContext.arc(320, 500, 30, 0, 2 * Math.PI);
canvasContext.fillStyle = '#423638';
canvasContext.fill();
canvasContext.stroke();

//Reset
canvasContext.beginPath();
canvasContext.arc(220, 500, 30, 0, 2 * Math.PI);
canvasContext.fillStyle = '#ff0026';
canvasContext.fill();
canvasContext.stroke();

//--------------------------------------------------------------------------
//                     Text For All Buttons

//Up
canvasContext.font = 'bold 20px Arial';
canvasContext.fillStyle = 'black';
canvasContext.fillText("Up", 161, 610);

//right
canvasContext.font = 'bold 20px Arial';
canvasContext.fillStyle = 'black';
canvasContext.fillText("Right", 280, 730);

//down
canvasContext.font = 'bold 20px Arial';
canvasContext.fillStyle = 'black';
canvasContext.fillText("Down", 150, 850);

//left
canvasContext.font = 'bold 20px Arial';
canvasContext.fillStyle = 'black';
canvasContext.fillText("Left", 30, 730);

//Rotation
canvasContext.font = 'bold 25px Arial';
canvasContext.fillStyle = 'black';
canvasContext.fillText("Rotation", 513, 715);

//Drop
canvasContext.font = 'bold 25px Arial';
canvasContext.fillStyle = 'black';
canvasContext.fillText("Drop", 420, 790);

//Pause
canvasContext.font = ' bold 15px Arial';
canvasContext.fillStyle = 'black';
canvasContext.fillText("Pause(P)", 392, 550);

//Sound
canvasContext.font = 'bold 15px Arial';
canvasContext.fillStyle = 'black';
canvasContext.fillText("Sound(S)", 292, 550);


//Reset
canvasContext.font = 'bold 15px Arial';
canvasContext.fillStyle = 'black';
canvasContext.fillText("Reset(R)", 192, 550);


};
