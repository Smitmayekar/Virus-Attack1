var gameState = "play";
var score = 0;
var life = 3;
var deadvirusImg,virusImg,man,manImg,bgImg;
var invisibleGround,bg;
var platform, deadman;
var play,restart,gameOverImg, Droplet;

function preload(){

    var bgImg = loadImage("images/backgroundofgame.png");
    var deadvirusImg = loadImage("images/DeadVirus.png");
    var virusImg = loadImage("images/SentVirus.png");
    var manImg = loadAnimation('images/man1.png','images/man2.png','images/man3.png','images/man4.png','images/man5.png','images/man6.png');
    var manDead = loadAnimation('images/deadman1.png','images/deadman2.png','images/deadman3.png','images/deadman4.png','deadman6.png','images/deadman7.png','images/deadman8.png');
    var gameOver = loadImage("images/gameOver");
    var restartbutton = loadImage("images/restart.png");
    var sanitizerdroplet = loadImage("images/sanitizerdroplet.png");
    var playbutton = loadImage("images/play.png");

    var Gameover = loadSound("sounds/Gameover.wpp");
    var gamereward = loadSound("sounds/gamerewarsd.mp3");
    var jump = loadSound("sounds/jumpingsound.wav");
    var shooting = loadSound("sounds/shootingsound.mp3");
    

}

function setup(){
    createCanvas(windowWidth, windowHeight);

    bg = createSprite(0,0,width + 500, height + 100);
    bg.addImage(bgImg);
    bg.scale = 3;

    invisibleGround = createSprite(width/2, height-50,width,20);
    invisibleGround.visible = false;
    invisibleGround.velocityX = -5;
    invisibleGround.scale=3;

    man = createSprite(180,height-180,20,100);
    man.addAnimation("run",manImg);
    man.addAnimation("die",manDead);
    man.scale = 0.5;

    
}

function draw(){
    

}
