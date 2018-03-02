

function go() {

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');    
    
ctx.clearRect(0, 0, 400, 400);
    
var numberOfShapesInput = document.getElementById("numberInput").value;
var numberOfShapes = Math.ceil(Math.random() * numberOfShapesInput);

    
do {
    var xCoord = Math.floor(Math.random() * 350);
    var yCoord = Math.floor(Math.random() * 350);

    var red = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    

    ctx.fillStyle = 'rgb(' + red + ',' + blue + ',' + green + ')';
    ctx.fillRect(xCoord, yCoord, 50, 50);
    numberOfShapes -= 1;
}

while (numberOfShapes > 0);
    
var timer = document.getElementById("millisecondInput").value;

function clear() {
    ctx.clearRect(0, 0, 400, 400);
}

setTimeout(clear, timer);
    
    }