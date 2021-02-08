var canvas = document.getElementById("breakingout");
var ctx = canvas.getContext("2d");


function drawball() {
    ctx.beginPath();
    ctx.arc(x, y, ballradius, 0, 2*Math.PI);
    ctx.fillStyle = "#0005dd";
    ctx.fill();
    ctx.closePath();
}

function checkCorner() {   
    if(y + dy < ballradius || y + dy > canvas.height - ballradius) {dy = -dy;}
    if(x + dx > canvas.width - ballradius || x + dx < ballradius) {dx = -dx;}
}

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height - paddleheight, paddlewidth, paddleheight);
    ctx.fillStyle = "#0005dd";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    checkCorner();
    drawball();
    x+= dx;
    y+= dy;
}


var dx = 2;
var dy = -1;
var rightpressed = false;
var leftpressed = false;
var paddlewidth = 80;
var paddleheight = 12;
var paddleX = (canvas.width - paddlewidth) / 2;
var x = canvas.width / 2;
var y = canvas.height - 30;
var ballradius = 10;

setInterval(draw, 10);