var one, two;

function setup() {
  createCanvas(800, 400);
  one = createSprite(400, 200, 50, 50);
  one.shapeColor = 'blue';
  two = createSprite(300, 100, 100, 100);
  two.shapeColor  = 'blue';
}

function draw() {
  background('black');
two.x = mouseX;
two.y = mouseY; 
if (one.x-two.x < one.width/2+two.width/2
  && two.x - one.x <one.width/2+two.width/2
  && two.y - one.y <one.height/2+two.height/2 && one.y - two.y <one.height/2+two.height/2) {
    

    one.shapeColor = 'white'
    two.shapeColor = 'white'
   
  }
  else {
    one.shapeColor = 'blue';
    two.shapeColor = 'blue'
  }
  drawSprites();

}

