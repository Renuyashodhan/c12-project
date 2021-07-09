var Runner
function preload(){
  //pre-load images

Runner1 = loadAnimation("Runner-1.png","Runner-2.png") }
function setup(){
  createCanvas(400,400);
  //create sprites here



Runner = createSprite(180,160,20,50);
Runner.addAnimation("running",Runner1);
Runner.scale = 0.2;
}

function draw() {


  background("blue")


drawSprites();

}




