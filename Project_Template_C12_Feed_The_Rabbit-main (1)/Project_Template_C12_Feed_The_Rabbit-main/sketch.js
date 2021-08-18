//Sprite Variables
var garden,rabbit;
var apple,leaf;

//Image Variables
var gardenImg,rabbitImg;
var appleImg,leafImg;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg= loadImage("apple.png");
  leafImg= loadImage("orangeLeaf.png");
}

function setup(){
  createCanvas(400,400);
  
 // Moving background
 garden=createSprite(200,200);
 garden.addImage(gardenImg);

 //creating rabbit 
 rabbit = createSprite(180,340,30,30);
 rabbit.scale =0.09;
 rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  //Moving the Rabbit
  rabbit.x=World.mouseX;

  //Rabbit Collision (that sounds weird XD)
  edges= createEdgeSprites();
  rabbit.collide(edges);

  //Garden's depth
  garden.depth=1;

  //Rabbit's Depth
  rabbit.depth=3;

  //Execute function whenever frame count is divisible by 80
 
  var select_sprites = Math.round(random(1,2));
 if (frameCount % 80 == 0) {

 if (select_sprites == 1) {
  createApples();

 }else{
  createLeaves();
 }

 }

 drawSprites();


 //(This an example) I want to take an apple out of the screen when it touches the rabbit. But for some
 //reason, it doesn't appears.
 //I inspected it, and the console is telling me that  Cannot read property 'isTouching' of undefined
 // I tried several times to change it thinking it was a [.remove();] issue, but it isn't, as you can see.
 //Thank you :)

 if (apple.isTouching(rabbit)){
  apple.y=500;
 }

}


//Functions for creating apples and leaves:     

//Function for creating apples at random X positions
function createApples() {
  apple = createSprite(random( 50, 350),40, 10, 10); 

  //Adding image for the apples
  apple.addImage(appleImg);

  //Scaling the apples
  apple.scale=0.08;

  //Adding movement for the apples
  apple.velocityY=3;

  //Apple's lifetime
  apple.lifetime= 400/3;

  //Apple Depth
  apple.depth=3;
}

//Function for creating leaves at random X positions
function createLeaves() {
  leaf = createSprite(random(50, 350),40, 10, 10); 

  //Adding image for the leaves
  leaf.addImage(leafImg);

  //Scaling the leaves
  leaf.scale=0.08;
  
  //Adding movement for the leaves
  leaf.velocityY=2;

  //Leaves lifetime
  leaf.lifetime= 400/3;

  leaf.depth=3;
}

