
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var groundObj
var ball, leftSide, rightSide
var radius = 40
function setup() {
	createCanvas(800, 700);
var ball_options={
	isstatic: false,
	restitution: 0.3,
	friction: 0,
	density: 1.2
}

	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(260,100,radius/2,ball_options)
	World.add(world, ball)

	Engine.run(engine);
  
}


function draw() {
	
  groundObj= new ground(width/2,760,width,20)
  leftSide= new ground(1100, 600, 120, 20)
rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,radius,radius)
  groundObj.display();
  leftSide.display();  
  rightSide.display();
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball, ball.position,{x:85, y:-85})
}
}


