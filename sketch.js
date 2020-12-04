var car,wall;
var speed,weight;
var displayer;


function setup() {
  createCanvas(1600,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50,200,50,50);
  wall=createSprite(1500,200,60,height/2);
  displayer=createSprite(1200,50,50,50);
  
}

function draw() {
  background("black");
  car.velocityX=speed;
  

if(wall.x-car.x<(car.width/2-wall.width/2)) {
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22500;

if(deformation>180){
  car.shapeColor=color(255,0,0);
  displayer.shapeColor=color(255,0,0);
}
if(deformation<180 && deformation>100) {
  car.shapeColor=color(230,230,0);
  displayer.shapeColor=color(230,230,0);
}
if(deformation<100){
  car.shapeColor=color(0,255,0);
  displayer.shapeColor=color(0,255,0);
}
}




  drawSprites();
  fill("white");
  textSize(20);
  text(deformation,1300,50);

 fill("orange");
 textSize(30);
  text("DEFORMATION TESTER",500,50);
}