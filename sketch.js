
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  
	ball=new Ball(150,470)

	ground=new Ground(600,500,width,40)

	d1=new Box(860,400,20,120)
	d2=new Box(960,470,220,20)
	d3=new Box(1060,400,20,120)
	d4=new Box(890,350,40,20)
	d5=new Box(1030,350,40,20)

	g1= new IBox(600,0,width,20)
	g2=new IBox(0,228,20,height)
	g3=new IBox(1200,228,20,height)





	Engine.run(engine);
  
}


function draw() {
 
  background(255);
  

 ball.display()
 ground.display()
 d1.display()
 d2.display()
 d3.display()
 d4.display()
 d5.display()

 g1.display()
 g2.display()
 g3.display()
 textSize(20)
	textFont("roman")
 text("put the paper ball into the dustbin",570,30)
 text ("DUSTBIN",920,400)


 if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:10,y:-9})
}
if(keyDown("w")){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:-2})
}
if(keyDown("s")){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:0,y:2})
}
if(keyDown("a")){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:-2,y:0})
}
if(keyDown("d")){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:2,y:0})
}
  drawSprites();
 
}



