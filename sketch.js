var quadrado
function setup() {
  createCanvas(400,400);
quadrado = createSprite(200, 200, 50, 50)

}

function draw() 
{
  background(30);
  drawSprites()
if(keyDown("d")){
quadrado.x +=2
}
}




