 var boy;
 var boyimg;
 var dog,dogimg,dog2;
 var ob1,ob2,ob3,ob1img,ob2img,ob3img,ob4,ob5,ob6;
 var school,schoolimg;
var wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,
wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,wall28,wall29,wall30,wall31,wall32,wall33,wall34,wall35,
wall36,wall37,wall38,wall39,wall40,wall41;
 var chance = 0;

function preload(){
   boyimg = loadImage("boyimg.png");
   ob1img = loadImage("ob1.png");
   schoolimg = loadImage("schoolimg.png");
   ob2img = loadImage("ob2.png");
   ob3img = loadImage("ob3.png");
   dogimg = loadImage("dogimg.png");

}

 function setup(){
   createCanvas(1200,1200);
    boy = createSprite(50,50,50,50);
    boy.addImage("boyimg",boyimg);
    boy.scale = 0.2; 

    ob1 = createSprite(720,470,50,50);
    ob1.addImage(ob1img);
    ob1.scale = 0.3;

    ob4 = createSprite(260,475,50,50);
    ob4.addImage(ob1img);
    ob4.scale = 0.3;

    ob5 = createSprite(470,889,50,50);
    ob5.addImage(ob1img);
    ob5.scale = 0.2;

    ob2 = createSprite(500,570,50,50);
    ob2.addImage(ob2img);
    ob2.scale = 0.5;
    ob2.velocityX = 3;

    ob6 = createSprite(500,830,50,50);
    ob6.addImage(ob2img);
    ob6.scale = 0.5;
    ob6.velocityX = 3;


    dog = createSprite(530,700,10,10);
    dog.addImage(dogimg);
    dog.scale = 0.2;
    dog.velocityX = 5;

    dog2 = createSprite(300,970,10,10);
    dog2.addImage(dogimg);
    dog2.scale = 0.2;
    dog2.velocityX = 5;

    school = createSprite(50,1150,50,50);
    school.addImage("schoolimg",schoolimg);
    school.scale = 0.2

    wall1 = createSprite(450,120,300,10);
    wall2 = createSprite(50,120,200,10);
    wall3 = createSprite(150,240,10,250);
    wall4 = createSprite(300,165,10,100);
    wall5 = createSprite(55,220,200,10);
    wall6 = createSprite(850,120,200,10)
    wall7 = createSprite(750,165,10,100);
    wall8 = createSprite(600,165,10,100);
    wall9 = createSprite(450,220,310,10);
    wall10 = createSprite(850,220,210,10);
    wall11 = createSprite(85,370,140,10);
    wall12 = createSprite(20,430,10,120);
    wall13 = createSprite(300,350,10,280);
    wall14 = createSprite(230,495,150,10);
    wall15 = createSprite(600,280,10,130);
    wall16 = createSprite(530,350,150,10);
    wall17 = createSprite(750,320,10,330);
    wall18 = createSprite(680,490,150,10);
    wall19 = createSprite(450,419,10,145);
    wall20 = createSprite(10,490,30,10);
    wall21 = createSprite(380,495,150,10);
    wall22 = createSprite(830,490,150,10);
    wall23 = createSprite(160,640,320,10);
    wall24 = createSprite(680,640,450,10);
    wall25 = createSprite(320,700,10,130);
    wall26 = createSprite(450,700,10,130);
    wall27 = createSprite(150,760,350,10);
    wall28 = createSprite(680,760,470,10);
    wall29 = createSprite(200,900,600,10);
    wall30 = createSprite(800,900,320,10);
    wall31 = createSprite(500,960,10,130);
    wall32 = createSprite(640,1050,10,310);
    wall33 = createSprite(250,1030,510,10);
    wall34 = createSprite(900,700,10,100);
    wall35 = createSprite(450,700,5,100);
    wall36 = createSprite(500,950,5,100);
    wall37 = createSprite(0,960,5,100);
    wall38 = createSprite(900,560,5,100);
    wall39 = createSprite(0,560,5,100);
    wall40 = createSprite(0,825,5,100);
    wall41 = createSprite(920,850,5,100);
  
  }



function draw(){
  background("blue");

 dog.bounceOff(wall34);
 dog.bounceOff(wall35);
 dog2.bounceOff(wall36);
 dog2.bounceOff(wall37);
 ob2.bounceOff(wall38);
 ob2.bounceOff(wall39);
 ob6.bounceOff(wall40);
 ob6.bounceOff(wall41);

 if(boy.isTouching(ob1)){
   boy.y = 0;
   boy.x = 900;
   chance = chance + 1;
 };

 if(boy.isTouching(ob2)){
   boy.y = 0;
   boy.x = 900;
   chance = chance + 1;
 };

 
  if(boy.isTouching(school)){
    fill("red");
    stroke('black');
    textSize(60);
    text("YOU WON",width/2-200,height/2)
  };

 if(keyDown("LEFT_ARROW")){
   boy.x = boy.x -10;
 };

 if(keyDown("RIGHT_ARROW")){
   boy.x = boy.x +10;
 };

 if(keyDown("DOWN_ARROW")){
   boy.y = boy.y +10;
 };

 if(keyDown("UP_ARROW")){
   boy.y = boy.y -10;
 };

 //camera.x = boy.x;
 //camera.y = boy.y;

  drawSprites();

  fill("black");
  textSize(40);
  text("CHANCE = "+chance,width/2,50);
  
  if(chance === 3){
    fill("red");
    stroke('black');
    textSize(60);
    text("YOU LOSE",width/2-200,height/2)
  };

}