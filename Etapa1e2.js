var x = 225;

function setup() {
  createCanvas(450, 400);
}

function draw() {
  background(0);
  rect(210, 50, 30, 30);
  if (keyIsDown(LEFT_ARROW))
    x = x - 5;

  if (keyIsDown(RIGHT_ARROW))
    x = x + 5;  
  ellipse(x, 350, 50, 30);
}