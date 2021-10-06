var score =0;
var background , bottle1, bottle2, bottle3, bottle4, bottle5, bottle6, bullet, M1887;

var backgroundImg , bottle1Img , bottle2Img , bottle3Img , bottle4Img, bottle5Img, bottle6Img, bulletImg,
 M1887Img;

 var bottle1Group , bottle2Group, bottle3Group, bottle4Group, bottle5Group, bottle6Group, bulletGroup,
  M1887Group;

  var life =3;
  var score =0;
  var gameState = 1

  function preload(){
    M1887Img = loadImage("M1887.png")
    bottle1Img = loadImage("bottle1.png")
    bottle2Img = loadImage("bottle2.png")
    bottle3Img = loadImage("bottle3.png")
    bottle4Img = loadImage("bottle4.png")
    bottle5Img = loadImage("bottle5.png")
    bottle6Img = loadImage("bottle6.png")
    backgroundImg = loadImage("background.png")
    bulletImg = loadImage("bullet.png")
  }

  function setup(){
    createCanvas (800,800)

    backBoard = createSprite(50,width/2,100,height)
    backBoard,addImage(backgroundImg)

    M1887 = createSprite(100, height/2, 50,50)
    M1887.addImage(M1887Img)
    M1887,scale=0.2;

    bulletGroup = createGroup();
    bottle1Group = createGroup();
    bottle2Group = createGroup();
    bottle3Group = createGroup();
    bottle4Group = createGroup();
    bottle5Group = createGroup();
    bottle6Group = createGroup();

    scoreboard= createElement("h1");
  }

  function draw(){
    background("red")

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    M1887.y=mouseY  

    if (frameCount % 60 === 0) {
      drawbottle1();
    }

    if (frameCount % 70 === 0) {
      drawbottle2();
    }

    if (frameCount % 80 === 0) {
      drawbottle3();
    }

    if (frameCount % 90 === 0) {
      drawbottle4();
    }

    if (frameCount % 100 === 0) {
      drawbottle5();
    }

    if (frameCount % 110 === 0) {
      drawbottle6();
    }

    if(keyDown("space")){
      shootbullet();
    }

    if(bottle1Group.collide("backBoard")){
      bottle1Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle2Group.collide("backBoard")){
      bottle2Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle3Group.collide(backBoard)){
      bottle3Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle4Group.collide(backBoard)){
      bottle4Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle5Group.collide(backBoard)){
      bottle5Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle6Group.collide(backBoard)){
      bottle6Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle1Group.collide(bulletGroup)){
      bottle1Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle2Group.collide(bulletGroup)){
      bottle2Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle3Group.collide(bulletGroup)){
      bottle3Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle4Group.collide(bulletGroup)){
      bottle4Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle5Group.collide(bulletGroup)){
      bottle5Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    if(bottle6Group.co(bulletGroup)){
      bottle6Group.destroyEach();
      if(life>0){
        score=score+1
      }
    }

    drawSprites();

  }
}

function drawbottle1(){
  bottle1 = createSprite(800,random(20,780),40,40);
  bottle1.addImage(bottle1Img);
  bottle1.scale = 0.1;
  bottle1.velocityX = -8;
  bottle1.lifetime = 400;
  bottle1Group.add(bottle1);
}

function drawbottle2(){
  bottle2 = createSprite(800,random(20,780),40,40);
  bottle2.addImage(bottle2Img);
  bottle2.scale = 0.1;
  bottle2.velocityX = -8;
  bottle2.lifetime = 400;
  bottle2Group.addImage(bottle2);
}

function drawbottle3(){
  bottle3 = createSprite(800,random,(20,780),40,40);
  bottle3.addImage(bottle3Img);
  bottle3.scale = 0.1;
  bottle3.velocityX = -8;
  bottle3.lifetime = 400;
  bottle3Group.addImage(bottle3)
}

function drawbottle4(){
  bottle4 = createSprite(800,random,(20,780),40,40);
  bottle4.addImage(bottle4Img);
  bottle4.scale = 0.1;
  bottle4.velocityX = -8;
  bottle4.lifetime = 400;
  bottle4Group.addImage(bottle4)
}

function drawbottle5(){
  bottle5 = createSprite(800,random,(20,780),40,40);
  bottle5.addImage(bottle5Img);
  bottle5.scale = 0.1;
  bottle5.velocityX = -8;
  bottle5.lifetime = 400;
  bottle5Group.addImage(bottle5)
}

function drawbottle6(){
  bottle6 = createSprite(800,random,(20,780),40,40);
  bottle6.addImage(bottle6Img);
  bottle6.scale = 0.1;
  bottle6.velocityX = -8;
  bottle6.lifetime = 400;
  bottle6Group.addImage(bottle6)
}

