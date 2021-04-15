const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var ground1,ground2;
 var engine,world;
 var img;

 function preload() {
   img = loadImage("hexa.png")
}
 
 function setup() {
  createCanvas(400,400);
  
   engine = Engine.create();
    world = engine.world;

    
  ground1 = new Ground(0,398,1000,20);
  ground2 = new Ground(240,230,130,20);

  box1 = new Box(200,200,20,20);
  box2 = new Box(220,200,20,20);
  box3 = new Box(240,200,20,20);
  box4 = new Box(260,200,20,20);
  box5 = new Box(280,200,20,20);

  box6 = new Box(210,170,20,20);
  box7 = new Box(230,170,20,20);
  box8 = new Box(250,170,20,20);
  box9 = new Box(270,170,20,20);

  box10 = new Box(218,100,20,20);
  box11 = new Box(239,100,20,20);
  box12 = new Box(259,100,20,20);

  box13 = new Box(229,50,20,20);
  box14= new Box(249,50,20,20);
  
  box15 = new Box(239,25,20,20);
 
   polygon = Bodies.circle(50,200,20);
   World.add(world,this.polygon)

   slingshot = new SlingShot(this.polygon,{x:100,y:200})

  
}


function draw() {
  background("pink"); 
  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box13.display();
  box12.display();
  box14.display();
  box15.display();
  ground1.display();
  ground2.display();
  
  imageMode(CENTER);
  image(img , polygon.position.x , polygon.position.y ,40,40);

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition (this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}

function keyPressed()
{
  if(keyCode == 32)
  {
    slingshot.attach(this.polygon);
  }
}