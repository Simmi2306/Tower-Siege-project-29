const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

var chain;




function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,240,10);

  
  
  // 1 Pyramid
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);
  
  // 2 Pyramid
  //level one
  newBlock1 = new Block(600,150,30,40);
  newBlock2 = new Block(630,150,30,40);
  newBlock3 = new Block(660,150,30,40);
  newBlock4 = new Block(690,150,30,40);
  newBlock5 = new Block(720,150,30,40);
  newBlock6 = new Block(750,150,30,40);
  newBlock7 = new Block(780,150,30,40);
  //level two
  newBlock8 = new Block(630,110,30,40);
  newBlock9 = new Block(660,110,30,40);
  newBlock10 = new Block(690,110,30,40);
  newBlock11 =new Block(720,110,30,40);
  newBlock12 = new Block(750,110,30,40);
  //level three
  newBlock13 = new Block(660,70,30,40);
  newBlock14 = new Block(690,70,30,40);
  newBlock15 = new Block(720,70,30,40);
  //level four
  newBlock16 = new Block(690,30,30,40);

  polygon=Bodies.circle(50,200,20);
  World.add(world,polygon);

  slingShot=new Slingshot (this.polygon,{x:100,y:200});

  
  
 

  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("skyblue")
  newBlock1.display();
  newBlock2.display();
  newBlock3.display();
  newBlock4.display();
  newBlock5.display();
  newBlock6.display();
  newBlock7.display();
  fill("pink")
  newBlock8.display();
  newBlock9.display();
  newBlock10.display();
  newBlock11.display();
  newBlock12.display();
  fill("turquoise")
  newBlock13.display();
  newBlock14.display();
  newBlock15.display();
  fill("grey")
  newBlock16.display();

  

  imageMode(CENTER);
  image(polygon_img,polygon.position.x,polygon.position.y,40,40);

  slingShot.display();

  fill("orange")
  text("TOWER SIEGE GAME",50,50);
  text("Hit The Tower With The Help Of Shooter Given To You",50,80);
  text("Tower 1",350,330);
  text("Tower 2",650,230);
  text("Shooter",65,250);
  

 

}

function mouseDragged(){
  Matter.Body.setPosition(this.polygon, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingShot.fly();
}