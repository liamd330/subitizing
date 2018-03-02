var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');


//var numberOfShapes = document.getElementById("numberInput");
var numberOfShapes = Math.floor(Math.random() * 10);


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
    
