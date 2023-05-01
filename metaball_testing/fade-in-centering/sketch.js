var fade;
var fadeAmount = -50

function setup() {
  createCanvas(600, 600);
  textSize(100)
  fade = 0
}

function draw() {
  background(255, 255, 255);
  stroke(51);
  strokeWeight(2);
  noFill();
  circle(300, 300, 600);

  // plum
  stroke(51);
  strokeWeight(0);
  fill(236, 157, 237, fade)
  circle(300, 300, 300)

  // teal
  stroke(51);
  strokeWeight(0);
  fill(32, 178, 170, fade)
  circle(300, 300, 240)

  // navy
  stroke(51);
  strokeWeight(0);
  fill(25, 25, 112, fade)
  circle(300, 300, 130)

  // gray
  stroke(51);
  strokeWeight(0);
  fill(65, 74, 76, fade)
  circle(300, 300, 60)
  
  if (fade<0) fadeAmount=1; 
 
  if (fade>255) fadeAmount=-100; 
 
  fade += fadeAmount; 
  print(fade)
}