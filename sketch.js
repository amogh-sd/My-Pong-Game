
var ball,img,paddle, edges;
var score;


function preload() {
  /* preload your images here of the ball and the paddle */
  
  ball = loadImage("ball.png")
  paddle = loadImage("paddle.png")
  
  
  
  

    
  
  
}
function setup() {
  createCanvas(1300, 600);
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  /* give the ball an initial velocity of 9 in the X direction */
  
  //player = createSprite(375, mouseY, 10, 10);
  //player.addImage("paddleImage",paddle);
  //player.y = mouseY
  
  player = createSprite(1100, 300, 10, 10);
  player.addImage("paddleImage",paddle);
  player.scale = 2
  
  striker = createSprite(600, 500, 10 , 10)
  striker.addImage("ballImage", ball)
  striker.scale = 2


  score = 0
  
}

function draw() {
  
  
  background("red");
  
  text("Score: " + score, 50, 25)
  
  
  /* create Edge Sprites here */
  
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  //background = ("green")
  

  if (keyDown("space")) {
    striker.velocityX = Math.round(random(5, 10))
  }
  
  if (striker.bounceOff(player)) {
    randomVelocity();
    
    score = score + 1;

  }
  


  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    
    player.y = player.y -20
    
  }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
    
    player.y = player.y +20
    
  }
  

  
  
    edges=createEdgeSprites();
    striker.bounceOff(edges[0]);  
    striker.bounceOff(edges[3]);  
    striker.bounceOff(edges[2]);
    player.bounceOff(edges);
  
  drawSprites();
  
    if (striker.isTouching(edges[1])) {
   background = 300
  textSize = "50"
   text("Your Score: " + score, 650, 250)
  }
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  
striker.velocityY = Math.round(random(-10, 10))  

  
}

