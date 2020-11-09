const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    rect = new rect (200,380 ,300,200)


    var ground_options ={
        isStatic: true
    }
    var ball_options = {
        restitution: 0
    }
    ground = Bodies.rectangle(200,390,400,20,ground_options);
    World.add(world,ground);
    ball = Bodies.circle (200,100,30,ball_options);
    World.add(world,ball);
    console.log(ground);

}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    circle(ball.position.x,ball.position.y,30);
    rect.display();
    ground.display();            
}