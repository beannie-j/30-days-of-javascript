const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;  
const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

canvas.width = windowWidth;
canvas.height = windowHeight;

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

let balls = [];

class Ball {
    constructor() {
        this.radius = getRandomInt(15, 36);
        this.x = getRandomInt(this.radius, windowWidth);
        this.y = this.radius;
        this.color = getRandomColor();
        this.dx = 1;
        this.dy = 1;
        this.velocity = 0.2;
        this.gravity = 0.99;
    }

    draw() {   
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.stroke();
    }

    update() {
        this.y += this.dy;
        this.x += this.dx;
        if (this.y + this.radius >= windowHeight) {
            this.dy = -this.dy * this.gravity;
        } else {
            this.dy += this.velocity;
        }
        if (this.x + this.radius > windowHeight || this.x - this.radius < 0) {
            this.dx = - this.dx;
        }
    }
}

function init() {
    for (let i = 0; i < 10; i++) {
        balls.push(new Ball());
    }
}

init();

function animateBall() {
    requestAnimationFrame(animateBall);
    ctx.clearRect(0, 0, windowWidth, windowHeight);
    for (let i = 0; i < balls.length; i++) {
        balls[i].update();
        balls[i].draw();
    }
};

animateBall();

setInterval(() => {
    balls.push(new Ball());
    balls.splice(0, 1);
 }, 3000);
