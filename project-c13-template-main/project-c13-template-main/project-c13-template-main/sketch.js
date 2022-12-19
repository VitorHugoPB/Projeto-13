var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}
function createApples(){
apple = createSprite(random(50, 350),40, 10, 10);
apple.addImage(appleImg);
apple.scale=0.07;
apple.velocity = 3;
apple.lifetime = 150;
}
function createOrange(){
orange = createSprite(random(50, 350),40, 10, 10);
orange.addImage(orangeImg);
orange.scale=0.07;
orange.velocity = 3;
orange.lifetime = 150;
}
function createRed(){
red = createSprite(random(50, 350),40, 10, 10);
red.addImage(redImg);
red.scale=0.07;
red.velocity = 3;
red.lifetime = 150;
}


function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//criar sprite do coelho
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);


  edges= createEdgeSprites();
  rabbit.collide(edges);
  createApples();
  createOrange();
  createRed();
  rabbit.x = World.mouseX


  drawSprites();
  
}
