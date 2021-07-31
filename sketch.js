//variables
var ground;
var ironMan, ultron;
var ironManImg1, ironManImg2, ultronImg1, ultronImg2,spaceImg,spaceImg2;
var edges;
var PLAY=1;
var END=0 ;
var gameState=PLAY;
var ultronsGroup;
var score=0;
var restart;

function preload(){
  //loaded the images
  ironManImg1 = loadImage("ironman1.png");
  ironManImg2 = loadImage("ironman2.png");
  spaceImg = loadImage("spaceImg.png");
  ultronImg1 = loadImage("ultron1.png");
  ultronImg2 = loadImage("ultron2.png");
  spaceImg2 = loadImage("spaceImg2.png");
}

function setup() {
  //created the canvas
  createCanvas(1000,550);
  //created the objects and added images
  ground = createSprite(350, 275, 200, 20);
  ironMan = createSprite(50,280,20,10);
  ironMan.addImage("ironManFlying",ironManImg1);
  ground.addImage("bgImg",spaceImg);
  //adjusting the background
  ground.scale=ground.scale+0.5;
  var edges = createEdgeSprites();
  ultronsGroup=new Group();
  
}

function draw() { 
  //setting the background
  background(spaceImg2);  
//textSize, Font, Stroke;
/*text("")
 if(keyDown("space"){
  gameState=PLAY
}*/
  //adding velocity to ground making it infinite
  if(gameState===PLAY){

 //restart.visible=false;

    ground.velocityX = -4;
    if(ground.x<0){
      ground.x = ground.width/2
    }

    if(ultronsGroup.isTouching(ironMan)){
      ironMan.destroy();
      gameState=END;
    }
    //if(ironMan.isTouching)
    //ironMan.collide(edges[1]);
    //ironMan.collide(edges[3]);
    
      //controls for ironMan
    if(keyDown(UP_ARROW)){
      ironMan.y = ironMan.y-4
    }
    if(keyDown(DOWN_ARROW)){
      ironMan.y = ironMan.y+4
    }
    //call the functions
    spawnUltrons();

  }
else if(gameState===END){
  ground.velocityX=0;
  ultronsGroup.destroyEach();
  restart.visible=true;
  
if(mousePressedOver(restart)){
  reset();
}

}

  drawSprites();
  textSize(18)
  fill("white")
  text("Lives:"+ score, 500,100)
}
//function to spawn ultrons randomly
function spawnUltrons(){
  if(frameCount%120===0){
    ultron = createSprite(1000,300,20,20);
    ultron.addImage("ultronFlying",ultronImg1);
    ultron.velocityX = -4
    ultron.y = Math.round(random(50,500));
    ultron.lifetime=250;
    ultronsGroup.add(ultron);
  }
}

function reset(){
gameState=PLAY;
score=0;

}