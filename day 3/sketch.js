const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(600,480,100,100);
    box2 = new Box(600,700,100,100);
    box3 = new Box(900,480,100,100);
    box4 = new Box(900,700,100,100);
    ground = new Ground(600,height,1200,20)
    shtick = new Log(750, 600, 0.5 * PI, 455)
    ee = new Log(750, 0, 0.5 * PI, 455)
    pig = new Pig(60, 130);
    hog = new Pig(140, 270);
}

function draw(){
    background(0); 
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    shtick.display();
    pig.display();
    hog.display();
    ee.display();
}