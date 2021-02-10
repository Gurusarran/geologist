
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var hammer1;
var plane1;
var stone1;
var ball1;




function setup() {
	var canvas= createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;


  hammer1= new Hammer(70,320,70,PI/4);
  plane1= new Plane(600,height,1200,50);
  stone1= new Stone(700,700,50,50);
  ball1= new Rubber(200,500,30);
  box1 = new Stone(600,320,70,70);
  


  


	//Create the Bodies Here.


	
  
}


function draw() {
  
  background("lightblue");

  
  Engine.update(engine);
  


  hammer1.display();
  plane1.display();
  
  ball1.display();
  box1.display();
  
  drawSprites();
 
}



