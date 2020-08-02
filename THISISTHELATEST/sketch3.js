var bg;
var platform;
var platformIMG;
var tile1;
var tile2;
var tile3;  
var player,player_idle,player_stand,player_attack;

var player2,player2_stand, player2_attack,player2_idle;

var energy1,energy2,energy3,energy4,energy5,energy6;

var player1_score=0,player2_score=0;

var player_dead;
var player2_dead;
var dead1=0;
var dead2=0;
function preload()
{
  bg=loadImage("Backgrounds/TheGhouls.png");
tile1=loadImage("platforms/false platform.png")
tile2=loadImage("platforms/hard platform.png")
//playeridle=loadAnimation("idle.png","idle1.png")

energy1=loadImage("ENERGYBAR6.png")
energy2=loadImage("ENERGYBAR5.png")
energy3=loadImage("ENERGYBAR4.png")
energy4=loadImage("ENERGYBAR3.png")
energy5=loadImage("ENERGYBAR2.png")
energy6=loadImage("ENERGYBAR1.png")

player_idle=loadAnimation("walk/four.png");
player_stand=loadAnimation("walk/one.png","walk/two.png","walk/three.png","walk/four.png","walk/five.png")
player_attack=loadAnimation("attack/one.png","attack/two.png","attack/three.png","attack/four.png","attack/five.png","attack/six.png","attack/seven.png")
  


player2_idle=loadAnimation("walk2/three.png")
player2_stand=loadAnimation("walk2/one.png","walk2/two.png","walk2/three.png","walk2/four.png","walk2/five.png")
  player2_attack=loadAnimation("attack2/one.png","attack2/two.png","attack2/three.png","attack2/four.png","attack2/five.png")


  //player_dead=loadAnimation("Knight_02__DIE_004.png","Knight_02__DIE_006.png","Knight_02__DIE_007.png","Knight_02__DIE_009.png");
  
  player_dead=loadAnimation("Knight_02__DIE_009.png");

 // player2_dead=loadAnimation("Knight_03__DIE_004.png","Knight_03__DIE_005.png","Knight_03__DIE_006.png","Knight_03__DIE_008.png");
 
 player2_dead=loadAnimation("Knight_03__DIE_008.png");
  //--------player1
  energ=createSprite(100,50);

  energ.addImage("energy6",energy6)
  energ.addImage("energy2",energy2)
  energ.addImage("energy3",energy3)
  energ.addImage("energy4",energy4)
  energ.addImage("energy5",energy5)
  energ.addImage("energy1",energy1)
  energ.scale=0.5;
  /////////--------------player2
  energ1=createSprite(800,50);

  energ1.addImage("energy12",energy6)
  energ1.addImage("energy8",energy2)
  energ1.addImage("energy9",energy3)
  energ1.addImage("energy10",energy4)
  energ1.addImage("energy11",energy5)
  energ1.addImage("energy7",energy1)
  energ1.scale=0.5;



  }
function setup() {
  createCanvas(displayWidth-80,displayHeight);
  

  platform2= createSprite(displayWidth/2-50,displayHeight/2+290,displayWidth,displayHeight/4);
  platform2.addImage(tile2);
  platform2.scale=4.5;



player=createSprite(200,450);
player.addAnimation("player_idle",player_idle);
  player.addAnimation("player_stand",player_stand);
 player.addAnimation("player_attack",player_attack);
 player.addAnimation("player_dead",player_dead);
  player.scale=0.3;



player2=createSprite(800,450);
  player2.addAnimation("player2_idle",player2_idle);
  player2.addAnimation("player2_stand",player2_stand);
  player2.addAnimation("player2_attack",player2_attack);
  player2.addAnimation("player2_dead",player2_dead);
  player2.scale=0.3;


 

   player.setCollider("rectangle",0,0,650,550);
   player2.setCollider("rectangle",0,0,650,550);


}

function draw() {
  background(bg);
  fill ("red");
  textSize(30);
  text ("score:" + player1_score,100,100);
  text ("score:" + player2_score,800,100);
 
  
  if(player1_score>=5 && player1_score<10)
  {
   energ1.changeImage("energy11")
   energ1.scale=0.5;
  }
  else if(player1_score>=10 && player1_score<15)
  {
   energ1.changeImage("energy10")
   energ1.scale=0.5;
  }
  else if(player1_score>=15 && player1_score<20)
  {
   energ1.changeImage("energy9")
   energ1.scale=0.5;
  }
  else if(player1_score>=20 && player1_score<25)
  {
   energ1.changeImage("energy8")
   energ1.scale=0.1;
  }
  else if(player1_score>=25 && player1_score<30)
  {
   energ1.changeImage("energy7")
   energ1.scale=0.5;
   player2.changeAnimation("player2_dead");
   dead2=1;
   
  }

  if(player2_score>=5 && player2_score<10)
  {
   energ.changeImage("energy5")
   energ.scale=0.5;
  }
  else if(player2_score>=10 && player2_score<15)
  {
   energ.changeImage("energ4")
   energ.scale=0.5;
  }
  else if(player2_score>=15 && player2_score<20)
  {
   energ.changeImage("energy3")
   energ.scale=0.5;
  }
  else if(player2_score>=20 && player2_score<25)
  {
   energ.changeImage("energy2")
   energ.scale=0.1;
  }
  else if(player2_score>=25 && player2_score<30)
  {
   energ.changeImage("energy1")
   energ.scale=0.5;
   player.changeAnimation("player_dead");
   dead1=1;
   
  }



 
 


  if(keyWentDown("d") && dead1===0){
    player.velocityX=3;
   player.changeAnimation("player_stand");
    
  } 
  if(keyWentUp("d")){
    player.velocityX=0;
   player.changeAnimation("player_idle");
   
  }
  if(keyWentDown("a") && dead1===0){
    player.velocityX=-3;
   player.changeAnimation("player_stand");
    
  } 
  if(keyWentUp("a")  ){
    player.velocityX=0;
   player.changeAnimation("player_idle");
   
  }

  if(keyWentDown("t")  && dead1===0) 
  {
    player.changeAnimation("player_attack");
    if(player.isTouching(player2))
    player1_score++;
  
    
  }
  if(keyWentUp("t")){
    player.changeAnimation("player_idle");
  }
  /*if( && dead1===0)
  {
    player2.changeAnimation("player2_dead");
    dead1=2;
  }*/

//---------player2-----------------------------------------------
  if(keyWentDown("RIGHT_ARROW")&& dead2===0)
  {
    player2.velocityX=3;
   player2.changeAnimation("player2_stand");
    
  } 
  if(keyWentUp("RIGHT_ARROW")){
    player2.velocityX=0;
   player2.changeAnimation("player2_idle");
   
  }
  if(keyWentDown("LEFT_ARROW")&& dead2===0){
    player2.velocityX=-3;
   player2.changeAnimation("player2_stand");
    
  } 
  if(keyWentUp("LEFT_ARROW")){
    player2.velocityX=0;
   player2.changeAnimation("player2_idle");
   
  } 

  if(keyWentDown("UP_ARROW")&& dead2===0) 
  {
    player2.changeAnimation("player2_attack");
    if(player2.isTouching(player))
   
    player2_score++;
 
    
  }
  if(keyWentUp("UP_ARROW")){
    player2.changeAnimation("player2_idle");
  }

  
  drawSprites();
}