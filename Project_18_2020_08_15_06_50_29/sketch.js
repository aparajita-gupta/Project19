//Global Variables
var bananaImage, obstacleImage;
var obstaclesGroup, bananasGroup, backgroundPic, score, player, player_running, backgroundImage;



function preload() {
  backgroundImage = loadImage("jungle.jpg");
  player_running = loadAnimation("Monkey_03.png", "Monkey_02.png", "Monkey_01.png", "Monkey_10.png", "Monkey_08.png", "Monkey_09.png", "Monkey_07.png", "Monkey_05.png", "Monkey_06.png", "Monkey_04.png");
  bananaImage = loadImage("Banana.png");
  obstacleImage = loadImage("stone.png");
  groundImage = loadImage("ground.jpg");
}


function setup() {
  createCanvas(600, 300);

  backgroundPic = createSprite(0, 0, 600, 300);
  backgroundPic.addImage("bg", backgroundImage);
  backgroundPic.scale = 1.5;
  backgroundPic.x = backgroundPic.width / 2;
  backgroundPic.velocityX = -3;
  
  ground = createSprite(200, 180, 400, 120);
  ground.addImage("groundPic", groundImage);
  ground.x = ground.width/2;
  ground.visible = false;

  player = createSprite(100,240,20,50);
  player.addAnimation("running", player_running);
  player.scale = 0.15;

  obstaclesGroup = new Group();
  bananasGroup = new Group();
}


function draw() {
  background(255);
  
  spawnBananas();
  spawnStones();
  
  if(backgroundPic.x < 0){
    backgroundPic.x = backgroundPic.width/2;
  }
   
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if (bananasGroup.isTouching(player)) {
    score = score + 2;
  }

  switch (score) {
    case 10: xxxplayer.scale = 0.12;
      break;
    case 20: player.scale = 0.14;
      break;
    case 30: player.scale = 0.16;
      break;
    case 40: player.scale = 0.18;
      break;
    default: break;
  }

  if (obstaclesGroup.isTouching(player)) {
    player.scale = 0.2;
  }
  drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score:" + score, 500, 50);
}

function spawnStones(){
  if(frameCount % 80 === 0) {
    var stone = createSprite(400,365,10,40);
    stone.addImage(obstacleImage);
    stone.velocityX = -6;
    stone.scale = 0.2;
    stone.lifetime = 70;
    stonesGroup.add(stone);
  }
}
function spawnBananas(){
  if(frameCount % 80 === 0) {
    var banana = createSprite(200,285,10,10);
    banana.y = Math.round(random(165,265));
    banana.addImage(banana);
    banana.velocityX = -6;
    banana.scale = 0.05;
    banana.lifetime = 70;
    bananasGroup.add(bananaImage);
  }
  }