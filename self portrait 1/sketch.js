// hoemwork 2.1

// description: sketching shapes

var horizontalCenter = 400;

function setup() {
  createCanvas(500,500);
  background(255,255,0);

}

function draw() {
  ellipse(horizontalCenter-10,250,150,100);
  ellipse(horizontalCenter+10,100,150,100);
  ellipse(horizontalCenter,400,150,100);
  ellipse(horizontalCenter,10,150,100);

}
