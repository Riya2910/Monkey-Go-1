
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 500)
   monkey = createSprite(50,160,20,50);
  monkey.addAnimation( "monkey_running",monkey_running );
  monkey.scale=0.1
  
  
ground = createSprite(200,480,1000,20);
  ground.velocityX=-4
 ground.x = ground.width /2
  console.log(ground.X)
  
  
}


function draw() {
  background("white")
   if(keyDown("space")) {
        monkey.velocityY = -12;
      
   }
     
    monkey.velocityY = monkey.velocityY + 0.8
  
   if (ground.x < 0){
      ground.x = ground.width/2;
     
     
   }
monkey.collide(ground);
  fruits();
  obstacles();
  
  stroke("white")
  textSize(20);
  fill("white")
  text("score:"+ score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100, 50);
drawSprites()
  
}

function fruits(){
  if (frameCount % 80 === 0) {
  
  position = Math.round(random(120,200));
  banana = createSprite(200, 200, 20, 20)
  banana.addImage(bananaImage)
  banana.scale=0.1
  if (position==1){
    banana.y=200
    banana.velocityX=-7
  }
  else
    if(position==2){
      banana.y=0
      banana.velocityX=-7
    }
    
  }
}
function obstacles(){
  if (frameCount % 60 === 0){
   var obstacle = createSprite(600,450,10,40);
   obstacle.velocityX = -6
   obstacle.addImage(obstaceImage)
   
              
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   
 }
}
  






