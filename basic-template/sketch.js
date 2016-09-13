//hoemwork 2.1

//description: self-portrait

//fill(256,256,256);
//ellipse(horizontalCenter-10,180,80,40);
//fill(256,256,256);
//ellipse(horizontalCenter,180,80,40);

function setup() {

createCanvas(500,500);
}

function draw() {

  var horizontalCenter = width/2;

  background(127,255,212);

  //head
  noStroke();
  fill(250,240,230);
  ellipse(250, 200, 290, 340);

  //neck
  noStroke();
  fill(250,240,230);
  rect(175,250,150,200);

  //eye 1
  fill(256,256,256);
  ellipse(horizontalCenter-50,180,80,40);

  //eye 2
  fill(256,256,256);
  ellipse(horizontalCenter+50,180,80,40);

  //sides of nose
  fill(256,256,256);
  ellipse(270,250,30,30);
  ellipse(230,250,30,30);
  ellipse(250,250,50,50);

  //middle of nose
  fill(256,256,256);
  rect(235,200,30,70);

  //mouth
  fill(256,256,256);
  ellipse(250,300,90,30);
}
