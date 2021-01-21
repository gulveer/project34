const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var world, engine;

var back;
var ground, hero, rope;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15;
var monster;
function preload() {
//preload the images here
 back = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(1370, 660);
  engine = Engine.create();
	world = engine.world;
  
  // create sprites here
  ground = new Ground(350,480,1000,10);
  hero = new Hero(200,200,30);
  rope = new Fly(hero.body,{x:200, y:200});
  monster = new Monster(800,100,100);
 
  block1 = new Block(400,300,30,30);
  block2 = new Block(400,300,30,30);
  block3 = new Block(400,300,30,30);
  block4 = new Block(400,300,30,30);
  block5 = new Block(400,300,30,30);
  block6 = new Block(500,300,30,30);
  block7 = new Block(500,300,30,30);
  block8 = new Block(500,300,30,30);
  block9 = new Block(500,300,30,30);
  block10 = new Block(600,300,30,30);
  block11 = new Block(600,300,30,30);
  block12 = new Block(600,300,30,30);
  block13 = new Block(600,300,30,30);
  block14 = new Block(600,300,30,30);
  block15 = new Block(600,300,30,30);
  
 Engine.run(engine)
}

function draw() {
  background(back);

  Engine.update(engine);
  
  ground.display();
  hero.display();
  rope.display();
  monster.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x: mouseX, y: mouseY});
  
  }
  
function mouseReleased(){
  rope.fly();   
  
  
  }

