var mouseEvent="";
canvas= document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
var color="red"
var width="2"
var newWidth= screen.width - 70;
var newHeight= screen.height - 300;
var screenWidth= screen.width
var currentX, currentY, lastX, lastY

/*addEventListener("mousedown", mouseDownFunction);
    function mouseDownFunction(e) {
        color= document.getElementById("colorInput").value;
        width= document.getElementById("widthInput").value;
        mouseEvent="mousedown"
    }

addEventListener("mouseup",mouseUpFunction);
    function mouseUpFunction(e) {
        mouseEvent="mouseup"
    }

addEventListener("mouseleave",mouseLeaveFunction);
    function mouseLeaveFunction(e) {
        mouseEvent="mouseleave"
    }

addEventListener("mousemove", mouseMoveFunction);
    function mouseMoveFunction(e) {
        mouseEvent="mouseleave"
    }

if (mouseEvent == mouseDownFunction) {
    color= document.getElementById("colorInput").value;
    width= document.getElementById("widthInput").value;
}*/
if (screenWidth < 992) {
    document.getElementById("myCanvas").width= newWidth;
    document.getElementById("myCanvas").height= newHeight;
    document.body.style.overflow="hidden";
}

canvas.addEventListener("touchstart", touchStartFunction);
    function touchStartFunction(e) {
        console.log("starting")
        lastX=e.touches[0].clientX- canvas.offsetLeft;
        lastY=e.touches[0].clientY- canvas.offsetTop;
    }

canvas.addEventListener("touchmove", touchMoveFunction);
    function touchMoveFunction(e) {
        console.log("moving")
        currentX=e.touches[0].clientX- canvas.offsetLeft;
        currentY=e.touches[0].clientY- canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo (lastX,lastY);
        ctx.lineTo (currentX,currentY);
        ctx.stroke();
        lastX=currentX;
        lastY=currentY;
    }