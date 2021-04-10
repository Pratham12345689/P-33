var bg;
var snow;

function preload(){
  bg=loadImage("snow2.jpg");
  snow=loadImage("snow4.webp");
}



function setup() {
  createCanvas(800,400);
 
}

function draw() {
  background(bg);  

  s=createSprite(400, 200, 50, 50);
  s.addImage(snow);
  s.scale=0.2;
  drawSprites();

 
}