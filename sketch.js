var movingRect;
var fixedRect;
var ob1;
var ob2;
function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 100, 100);
  ob1 = createSprite(270, 300, 100, 40);
  ob2 = createSprite(30, 300, 100, 40);
  fixedRect = createSprite(300, 300, 100, 40);
  ob1.velocityX = -2;
  ob2.velocityX = +2;
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(isTouching(movingRect, ob2)){
    movingRect.shapeColor = "red";
    ob2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    ob2.shapeColor = "green";
  }
  bounceOff(ob1, ob2);

   drawSprites();
}

