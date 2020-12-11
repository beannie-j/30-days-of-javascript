const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const lineThickness = document.getElementsByClassName("slider")[0];

console.log(lineThickness.value);

let isDrawing = false;
const BORDER_WIDTH = 16;

// window on load
window.addEventListener("load", () => {
    console.log("Window loaded");
    canvas.height = window.innerHeight / 2;
    canvas.width = window.innerWidth / 2;
});

// resizing window
window.addEventListener("resize", () => {
    canvas.height = window.innerHeight / 2;
    canvas.width = window.innerWidth / 2;
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

// mouse move
canvas.addEventListener("mousemove", event => {
    draw(event);
});

// value change in slider
lineThickness.addEventListener('change', () => {
    console.log(lineThickness.value);
});


function draw(event) {
    if (!isDrawing) return;
    let lineWidth = lineThickness.value;

    let mousePosX = event.clientX - BORDER_WIDTH;
    let mousePosY = event.clientY - BORDER_WIDTH;
    
    ctx.lineWidth = lineWidth;
    ctx.lineCap = "round";
    ctx.lineTo(mousePosX, mousePosY);
    ctx.strokeStyle = "red";
    ctx.stroke();
}
