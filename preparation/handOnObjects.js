//BALL BOUNCING ON THE SCREEN AND CHANGING COLOR WHEN THEY RUN INTO EACH OTHER

//SETTING UP THE CANVAS: 
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");//drawing area and type. 

//canvas dimensions set to screen size
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

//function to return randoms numbers in a specific range. 
function random(min, max){
    return Math.floor(Math.random() * (max-min+1)) + min;
}
//function to generate random colors. 
function randomRGB(){
    return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`;
}



//BALLS CLASS: will store all the data about the balls. 
class Ball{
    constructor(x, y, velX, velY, color, size){
        //x and y are coordinates and velX and velY just adds to them. Size is a radius.  
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    //DRAW: the draw method
    draw(){
        ctx.beginPath();//initiates drawing
        ctx.fillStyle = this.color;//choosing color
        ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);//degrees given in radians(2*pi = 6.2 = 360 degrees)
                    //the 0 represents the type of circle (whole, half or something else entirely)
        ctx.fill();//draws the image and fills it with color. 
    }

    //MOVEMENT: update function to move the balls and make sure they are always drawn on the screen.
    update(){

        if((this.x + this.size)>= width){//center plus radius > window, reverse by turning velocity negative. 
            this.velX = -(Math.abs(this.velX));  
        }
        if((this.x - this.size)<=0){//center plus radius < window, reverse
            this.velX = (Math.abs(this.velX));
        }
        if((this.y + this.size)>= height){//center + radius > window, reverse
            this.velY = -(Math.abs(this.velX)); 
        }
        if((this.y-this.size)<=0){//center + radius < window, reverse
            this.velY = (Math.abs(this.velY));
        }

        this.x += this.velX;
        this.y += this.velY;
    }

    //COLLISION: detecting when they run into each other.
    collisionDetection(){
        for(const ball of balls){
            if(!(this === ball)){
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if(distance < this.size + ball.size){
                    ball.color = this.color = randomRGB();
                }
            }
        }
    } 
}

//ANIMATING THE BALLS BALLS. 
    //step1: somewhere to store the balls.

const balls = [];//array to hold the balls
                //as long as it has less that 25, generate more. 
while (balls.length < 500){
    const size = random(10, 20);
    const ball = new Ball(
        random(0 + size, width - size), //x
        random(0 + size, height-size), //y
        random(-7, 7), //velx
        random(-7, 7), //vely
        randomRGB(),//existing function
        size,

    );
    balls.push(ball);//add to array
}
    //step2:LOOP: function to call the other functions.

function loop(){
    ctx.fillStyle = "rgba(0, 0, 0, 0.25)";//canvas color
    //ctx.fillRect(0, 0, width, height);//draws a rectangle on canvas. 

    for(const ball of balls){
        ball.draw();
        ball.update();
        ball.collisionDetection();
        
    }
    requestAnimationFrame(loop);
}
    //step3: collision detection.

//testing ball class. 
//const testball = new Ball(150, 150, 3, 7, "red", 100);
//testball.draw();
loop();

