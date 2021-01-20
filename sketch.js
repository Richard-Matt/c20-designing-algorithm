var movingrect;
var fixedrect;

function setup() {
  createCanvas(800,400);
  movingrect = createSprite(400, 200, 50, 50);
  movingrect.shapeColor = "red";
  movingrect.debug = true;

  fixedrect = createSprite(400, 200, 80, 80);
  fixedrect.shapeColor = "blue";
  fixedrect.debug = true;

}

function draw() {
  background("black");  

  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

  // AN algorithm for collision

  if (movingrect.x - fixedrect.x < movingrect.width/2 + fixedrect.width/2 &&
      fixedrect.x - movingrect.x < movingrect.width/2 + fixedrect.width/2 &&
      movingrect.y - fixedrect.y < movingrect.height/2 +fixedrect.height/2 &&
      fixedrect.y - movingrect.y < movingrect.height/2 +fixedrect.height/2 )
      {
  
 movingrect.shapeColor = "yellow";
fixedrect.shapeColor = "yellow";

  }

  else{
    movingrect.shapeColor = "orange";
    fixedrect.shapeColor = "orange";

  }



  drawSprites();
}