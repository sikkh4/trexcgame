var groundmg, ground;
var groundinv;
var trex ,trex_running;
var nuvensmg, nuvensmg2;


function preload(){
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  groundmg = loadImage("ground.png");
  nuvensmg = loadImage("cloud.png");
  nuvensmg2 = loadImage("cloud.png");

  obstaculo1 = loadImage("obstacle1.png");
  obstaculo2 = loadImage("obstacle2.png");
  obstaculo3 = loadImage("obstacle3.png");
  obstaculo4 = loadImage("obstacle4.png");
  obstaculo5 = loadImage("obstacle5.png");
  obstaculo6 = loadImage("obstacle6.png");
}


function setup(){
  createCanvas(1000,200)
  
  //crie um sprite de trex
  trex = createSprite(50,180,50,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.7;

  //sprite do chão
  ground = createSprite(200, 180, 1600, 10);
  ground.addImage(groundmg);
  ground.x=ground.width/2;

  groundinv = createSprite(200, 192, 1600, 10);
  groundinv.visible=false;
}


function draw(){
  background("white");
  if (keyDown("space") && trex.y>=129){
  trex.velocityY=-12;         
  }

  trex.velocityY=trex.velocityY+0.9;
  trex.collide(groundinv);
   
 
  ground.velocityX=-9;
  if (ground.x<0){
  ground.x=ground.width/2;
}
criar_obstaculos();

criar_nuvens();

  drawSprites();

}

function criar_obstaculos(){
  if (frameCount%60===0){
    var obstaculos = createSprite (900, 192, 50, 50);
    obstaculos.velocity=-5;
    obstaculos.lifetime=300;
  }

}

function criar_nuvens(){
  if (frameCount%60===0){
    var nuvens=createSprite(1500, 30, 50, 50);
    nuvens.velocityX=-5;
    nuvens.addImage(nuvensmg);
    nuvens.y=Math.round(random(65,10));
    nuvens.depth=trex.depth; 
    //console.log(trex.depth);
    trex.depth=trex.depth+1;
  }

  if (frameCount%60===0){
    var nuvens2=createSprite(1300, 30, 50, 50);
    nuvens2.velocityX=-5;
    nuvens2.addImage(nuvensmg2);
    nuvens2.scale=0.5;
    nuvens2.y=Math.round(random(35,5));
    nuvens2.depth=trex.depth;
    //console.log(nuvens2.depth);
    trex.depth=trex.depth+1;
  }
}

