var bullet, wall;
var speed, weight,thickness;

function setup() {
  createCanvas(1600,400);
  weight = random(400, 1500);
  speed = random(55,90);
  thickness = random(22,83);
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1500, 200, thickness, height/2)
  bullet.shapeColor="white"
  wall.shapeColor="grey"
}

function draw() {
  background("black");  
  
  bullet.velocityX = speed;
  
  if(wall.x - bullet.x < (bullet.width+wall.width)/2)
  {


if(hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage= 0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
  {
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10)
  {
    wall.shapeColor=color(0,255,0);
  }

}
  }

  
drawSprites();  
}



function hasCollided(lbullet, lwall)
{
bulletRightEdge= lbullet.x + lbullet.width;
wallLeftEdge= lwall.x;
if (bulletRightEdge>=wallLeftEdge)
{
  return true
}else{
return false;
}

}
