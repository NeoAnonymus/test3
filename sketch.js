
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boxLeft,boxMiddle,boxRight;
var ground1;
var ball1;


function preload()
{

}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground1 = new ground(600,590,1200,20)

	ball1 = new ball(150,570,25)
	

	boxLeft = new box(750,530,20,100)
	boxLeft.shapeColor = color(255,0,0)

	boxMiddle = new box(840,570,200,15)
	boxMiddle.shapeColor = color(255,0,0)

	boxRight = new box (950,530,20,100)
	boxRight.shapeColor = color(255,0,0)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  


  boxLeft.display();
  boxMiddle.display();
  boxRight.display();

  ground1.display();

  ball1.display();
 

  drawSprites();
 
}
function keyPressed(){
if(keyCode === UP_ARROW){
//Matter.Body.applyForce(ball1.body,ball1.body.position,{x:120,y:-100})

}

}



