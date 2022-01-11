
var backGround;
var bowlerStump,batsmanStump;
var batsmanStumpImage;
var bowlerStumpImage;
var batting;

function preload(){
backGround = loadImage("background.png");
batsmanStumpImage = loadImage("singleStump.png");
bowlerStumpImage = loadImage("singleStump.png");
batsmanImage = loadImage("bats3r.png"); 
batting = loadAnimation("bats1r.png","bats3r.png","bats2r.png");
bowling = loadAnimation("bowl1r.png","bowl2r.png","bowl1r.png");

}

function setup(){
createCanvas(800,700);

//creating batsman stump
batsmanStump = createSprite(630,300,100,100);
batsmanStump.addImage(batsmanStumpImage);
batsmanStump.scale = 0.4;

//creating bowler stump

bowlerStump = createSprite(162,300,100,100);
bowlerStump.addImage(bowlerStumpImage);
bowlerStump.scale = 0.4;

//creating batting frame
batsman = createSprite(385, 100, 100,100);
batsman.addImage(batsmanImage);
//batsman.addAnimation("batting", batting);

bowler = createSprite(162, 300, 100,100);
//bowler.addImage(bowlerImage);
bowler.addAnimation("bowling", bowling);


} 

function draw(){
background(backGround);
drawSprites();
}