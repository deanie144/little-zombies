const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var stones = [];
var bridge;
var base;
var jointLink;
var wall1;
var wall2;




function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);


  bridge = new Bridge(15, {x: width / 2 - 400, y: height / 2 });
   base = new Base(100,500,200,20);
  wall1=new Base(200,180,300,200);
  wall2=new Base(50, 180, 300, 200);

  Matter.Composite.add(bridge.Body, jointPoint);
  jointLink = new Base(width - 600, height / 2 + 10, 40, 20);
   
  for(var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }

}

function draw() {
  background(51);
  Engine.update(engine);

  bridge.show()
  base.show()
  stone.show()

}
