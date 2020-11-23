const Engine= Matter.Engine;
const World=Matter.World;
const Bodies= Matter.Bodies;

var engine, world, g;
var box1, box2;
function setup() {
  createCanvas(400,400);

  engine=Engine.create();
  world=engine.world;
  g=new Ground(200,350,400,20)   
  box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,50); 

}

function draw() {
  background(0);  
  Engine.update(engine)
  g.display()
  box1.display()
  box2.display()
  
}