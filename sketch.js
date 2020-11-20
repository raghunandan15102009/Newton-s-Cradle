
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var bob, bob1, bob2, bob3, bob4;
var chain, chain1, chain2, chain3, chain4; 
var roof;

function setup() {
  createCanvas(8000, 2000);
  engine = Engine.create();
  world = engine.world;
  roof = new Roof(400,10,500,20);
  bob = new Bob(200, 350);
  bob1 = new Bob(300, 350);
  bob2 = new Bob(400, 350);
  bob3 = new Bob(500, 350);
  bob4 = new Bob(600, 350);
  chain = new Chain(bob.body,roof.body,-200,0);
  chain1 = new Chain(bob1.body,roof.body,-100,0);
  chain2 = new Chain(bob2.body,roof.body,0,0);
  chain3 = new Chain(bob3.body,roof.body,100,0);
  chain4 = new Chain(bob4.body,roof.body,200,0);
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(255);
  bob.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  chain.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  roof.display();
  drawSprites();
  if(keyDown(UP_ARROW)){
   Matter.Body.setStatic(bob.body,isStatic=false);
   Matter.Body.applyForce(bob.body,bob.body.position,{x:-40,y:10});
  }
}



