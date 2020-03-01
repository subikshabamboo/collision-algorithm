  var movingRect ,fixedRect;


  function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,400,50,80);
  movingRect.shapeColor = "violet";
  fixedRect = createSprite(600,400,80,50);
  fixedRect.shapeColor = "violet";
}

  function draw() {
  background(255,255,255); 
  
   movingRect.x = World.mouseX;
   movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
  fixedRect.x - movingRect.x <fixedRect.width/2+movingRect.width/2&&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y - movingRect.y <fixedRect.height/2+movingRect.height/2){

  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "blue"
    

  }
  else{
  movingRect.shapeColor = "violet";
  fixedRect.shapeColor = "violet";

}


drawSprites();
}