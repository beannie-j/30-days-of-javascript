// https://codepen.io/b4rb4tron/pen/wjyXNJ
console.log("hello bouncing balls");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;  
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

canvas.width = windowWidth;
canvas.height = windowHeight;

// function isCanvasSupported() {
//     console.log(!!ctx);
//     return !!ctx;
// }
function getRandomColor() {
    let colors =["#242582", "#553D67", "#F64C72", "#997382", "#2F2FA2", "#E76F51", "#FADA5E"];
    let num = getRandomInt(0, colors.length);
    return colors[num];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

class Ball {
    static gravity = 0.2;   // gravity
    static factor = 0.9;    // velocity reduction factor per bounce  
    constructor() {
        this.radius = getRandomInt(15, 36);
        this.x = getRandomInt(this.radius, windowWidth);
        this.y = this.radius;
        this.color = getRandomColor();
        this.vx = 2;    // velocity of ball
        this.vy = 0;
        this.isPaused = false;
        console.log("new ball created");
    }

    draw() {   
        console.log("drawing ball");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = getRandomColor();
        ctx.fill();
        ctx.stroke();
    }

    update() {
        // update velocity
        this.vy += Ball.gravity;
        // update position
        this.x += this.vx;
        this.y += this.vy;
        // handle bouncing
        if (this.y > canvasHeight - this.radius) {
            this.y = canvasHeight - this.radius;
            this.vy *= -Ball.factor;
        }

        if (this.x > canvasWidth + this.radius) {
            this.x =- this.radius;
        }

        this.draw();
    }
}

let balls = [];
let ball = new Ball();
ball.draw();

setInterval(() => {

});

function dropBall() {
    ball.update();
    requestAnimationFrame(dropBall)
};

dropBall();

