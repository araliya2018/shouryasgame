var bg

function preload()
{
bg=loadImage("Backgrounds/game_background_1.png");  
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);  
  drawSprites();
}