const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var object;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
object=Bodies.rectangle(400,200,50,50);
World.add(world,object);
}

function draw() {
  background(0);  
  rectMode(CENTER);
  Engine.update(engine);
rect (object.position.x,object.position.y,50,50);
 
}