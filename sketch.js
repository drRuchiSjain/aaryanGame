
var backGround;
var bowlerStump,batsmanStump;
var batsmanStumpImage;
var bowlerStumpImage;
var batting;

function preload(){
backGround = loadImage("background.png");
batsmanStumpImage = loadImage("singleStump.png");
bowlerStumpImage = loadImage("singleStump.png");
batsmanImage = loadImage("newbats2r.png"); 
bowlerImage = loadImage("bowl1r.png");
batting = loadAnimation("newbats1r.png","newbats2r.png","newbats1r.png");
bowling = loadAnimation("bowl1r.png","bowl2r.png","bowl1r.png");
fielder1Img = loadImage("fielder1r.png");
fielder2Img = loadImage("fielder2r.png");
wicketKeeperImg = loadImage("wicketKeepers.png");
ballImg = loadImage("ballr.png");

}

function setup(){
createCanvas(800,700);

//creating batsman stump
batsmanStump = createSprite(700,300,100,100);
batsmanStump.addImage(batsmanStumpImage);
batsmanStump.scale = 0.25;

//creating bowler stump

bowlerStump = createSprite(95,300,100,100);
bowlerStump.addImage(bowlerStumpImage);
bowlerStump.scale = 0.25;

//creating batting frame
batsman = createSprite(600, 250, 100,100);
batsman.addAnimation("batpose",batsmanImage);
//batsman.addAnimation("batting", batting);

//creating bowler frame
bowler = createSprite(135, 300, 100,100);
bowler.addAnimation("bowlpose",bowlerImage);
//bowler.addAnimation("bowling", bowling);

//creating Fielders
fielder1 = createSprite(350,100,100,100);
fielder1.addImage(fielder1Img);
fielder1.scale = 0.5;

fielder2 = createSprite(280,550,100,100);
fielder2.addImage(fielder2Img);
fielder2.scale = 0.5;


wicketKeeper = createSprite(750,300,100,100);
wicketKeeper.addImage(wicketKeeperImg); 
wicketKeeper.scale = 0.5;


ball = createSprite(165,260,100,100);
ball.addImage(ballImg);
ball.scale = 0.03;



} 

function draw(){
background(backGround);
drawSprites();
if (keyDown("enter")){
    bowler.addAnimation("bowlpose",bowling);
    ball.velocityX = Math.floor(Math.random()*10);
      
}
if (keyDown("space")){
    batsman.addAnimation("batpose",batting);
}
if(ball.isTouching(batsman)){
    ball.velocityX = -(Math.floor(Math.random()*10));
    ball.velocityY = (Math.floor(Math.random()*5));
}

if((ball.isTouching(fielder1)) || (ball.isTouching(fielder2)) ){
    console.log("batsman is out!!")
    stroke("white");
    strokeWeight(4);
    textSize(20);
    text("Out !!", 400,300);
}



}