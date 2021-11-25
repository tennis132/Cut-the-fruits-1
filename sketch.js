var knife;
var knifeimg;
var alien;
var aliensimg;
var fruitsprite;
var fruit1img;
var fruit2img;
var fruit3img;
var fruit4img;


function preload()
{
knifeimg = loadImage("knife.png")
alienimg = loadAnimation("alien1.png", "alien2.png")

fruit1img = loadImage("fruit1.png")
fruit2img = loadImage("fruit2.png")
fruit3img = loadImage("fruit3.png")
fruit4img = loadImage("fruit4.png")
}

function setup()
{
  createCanvas(800,600)
knife = createSprite(100,100)
  knife.addImage("knife", knifeimg)

}

function draw()
{
background("lightblue")
drawSprites()
knife.x = mouseX
knife.y = mouseY
spawn_aliens()
fruits()
}

function spawn_aliens()
{
  if(frameCount%60==0)
  {
    alien = createSprite (800, random(0,600))
    alien.addAnimation("alien", alienimg)
    alien.velocityX = -6
  }
}

function fruits()
{
if(frameCount%60==0)
{
fruitsprite = createSprite(800, random(0,600))
fruitsprite.velocityX = -6


var select = Math.round(random(1,4))
switch(select)
{
case 1: fruitsprite.addImage("fruit1", fruit1img)
fruitsprite.scale = 0.2
  break;

case 2: fruitsprite.addImage("fruit2", fruit2img)
fruitsprite.scale = 0.2
  break;

case 3: fruitsprite.addImage("fruit3", fruit3img)
fruitsprite.scale = 0.2
  break;

case 4: fruitsprite.addImage("fruit4", fruit4img)
fruitsprite.scale = 0.2
  break;

  default:
    break;
}




}


}