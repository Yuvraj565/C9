var box;
var box1;

function setup() {
  createCanvas(800,800);
  box1 = createSprite(300, 400, 30, 30);
  box = createSprite(400,400,30,30);
  box.shapeColor = "blue"
  box1.shapeColor = "red"
}

function draw() 
{
   background(155);
  if (keyIsDown(RIGHT_ARROW)) 
  {
    box.position.x = box.position.x + 5;
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.position.x= box.position.x - 5;
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.position.y = box.position.y - 5;
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.position.y = box.position.y + 5;
  }

  if(keyIsDown(RIGHT_ARROW)){
    box1.x += 5
  }

  if (keyIsDown(LEFT_ARROW)){
    box1.x -= 5
  }
  
  if (keyIsDown(UP_ARROW)){
    box1.y -= 5
  }

  if (keyIsDown(DOWN_ARROW))[
    box1.y += 5
  ]
  drawSprites();
}




