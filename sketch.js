const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(920,90,70,70);
    box2 = new Box(850,90,70,70);
   
    box3 = new Box(950,160,70,70);
    box4 = new Box(880,160,70,70);
    
    box10=new Box(910,-80,70,70);
    box5 = new Box(810,160,70,70);
    box8=new Box(990,90,70,70);
box9=new Box(950,10,70,70);
    bird = new Bird(200,50);
    box6=new Box(880,10,70,70);
   box7=new Box(1020,160,70,70);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    background("cyan");
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
  //  pig1.display();
    //log1.display();
box9.display();
box10.display();
    box3.display();
    box4.display();
  //  pig3.display();
   // log3.display();
box7.display();
    box5.display();
    //log4.display();
   // log5.display();
box6.display();
box8.display();
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}