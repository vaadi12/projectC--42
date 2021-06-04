
var bgImg, iss,issImg,spacecraft,spacecraftImg1,spacecraftImg2,spacecraftImg3,spacecraftImg4

function preload(){
bgImg=loadImage("spacebg2.jpg")
issImg=loadImage("iss.png")
spacecraftImg1=loadImage("spacecraft1.png");
spacecraftImg2=loadImage("spacecraft4.png");
spacecraftImg3=loadImage("spacecraft3.png");
spacecraftImg4=loadImage("spacecraft2.png");
}

function setup() {
  createCanvas(800,400);
  iss=createSprite(200, 150, 50, 50);
  iss.addImage(issImg);
  iss.scale=0.6
  spacecraft=createSprite(500,300,40,40);
  spacecraft.addAnimation("atrest",spacecraftImg1);
  spacecraft.addAnimation("atright",spacecraftImg2);
  spacecraft.addAnimation("atleft",spacecraftImg3);
  spacecraft.addAnimation("bothsides",spacecraftImg4)

  spacecraft.scale=0.25
  spacecraft.setCollider("rectangle",0,0,spacecraft.width/6,spacecraft.height/6);
  iss.setCollider("rectangle",0,0,iss.width/4,iss.height/4);
}

function draw() {
  background(bgImg); 
  if(spacecraft.isTouching(iss)){
    textSize(50)
    fill(255, 255, 128)
    text("DOCKING SUNCCESSFUL!!",100,200)
    spacecraft.visible(false);
    iss.visible(false)
    
  } 
  if (keyDown(RIGHT_ARROW) ) {
    spacecraft.position.x += 10
 spacecraft.changeAnimation("atright",spacecraftImg2)
}
if (keyDown(LEFT_ARROW) ) {
  spacecraft.position.x -=10
 spacecraft.changeAnimation("atleft",spacecraftImg3)
}
 if(keyIsDown(UP_ARROW)){
  spacecraft.position.y = spacecraft.position.y-10
  
 }
 if(keyDown(DOWN_ARROW)){
  spacecraft.changeAnimation("bothsides",spacecraftImg4)
 }

 

  drawSprites();
}