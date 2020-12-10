const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let isDrawing = false;

// window on load
window.addEventListener("load", () => {
    console.log("Window loaded");
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

// resizing window
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

// mouse down
canvas.addEventListener("mousedown", event => {
    isDrawing = true;
    draw(event);
});

// mouse up
canvas.addEventListener("mouseup", () => {
    isDrawing = false;
    ctx.beginPath();
});

canvas.addEventListener("mousemove", event => {
    draw(event);
});

function draw(event) {
    if (!isDrawing) return;
    let mousePosX = event.clientX;
    let mousePosY = event.clientY;
    
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.lineTo(mousePosX, mousePosY);
    ctx.stroke();

    // mousePosX = event.clientX;
    // mousePosY = event.clientY;
    // ctx.beginPath();
    // ctx.moveTo(mousePosX, mousePosY);
}
