
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var roof;
 var bob1,bob2,bob3,bob4;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400, 95, 300, 20);

	bob1 = new Bob(300,400,50);
	bob2 = new Bob(350,400,50);
	bob3 = new Bob(400,400,50);
	bob4 = new Bob(450,400,50);
	bob5 = new Bob(500,400,50);

	rope1 = new Rope(bob1.body,{x:300,y:100});
	rope2 = new Rope(bob2.body,{x:350,y:100});
	rope3 = new Rope(bob3.body,{x:400,y:100});
	rope4 = new Rope(bob4.body,{x:450,y:100});
	rope5 = new Rope(bob5.body,{x:500,y:100});
	
	

	Engine.run(engine);
  
}


function draw() {


  rectMode(CENTER);
  background("yellow");
  
roof.display();

bob1.display();
 rope1.display();

 bob2.display();
 rope2.display();

 bob3.display();
 rope3.display();
 
 bob4.display();
 rope4.display();
 
 bob5.display();
 rope5.display();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){
	
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:730,y:-730});
	
	}
	
	
	}


