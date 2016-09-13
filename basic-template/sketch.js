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
  fill(255,228,196);
  ellipse(250, 200, 290, 340);

  //neck
  noStroke();
  fill(255,228,196);
  rect(175,250,150,200);

  //eye 1
  fill(256,256,256);
  ellipse(horizontalCenter-50,180,80,40);

  //eye 2
  fill(256,256,256);
  ellipse(horizontalCenter+50,180,80,40);

  //sides of nose
  fill(255,218,185);
  ellipse(270,250,30,30);
  ellipse(230,250,30,30);
  fill(250,240,230);
  ellipse(250,250,40,45);

  //middle of nose
  fill(250,240,230);
  rect(235,170,30,85);

  //mouth
  fill(240,128,128);
  ellipse(250,300,90,30);

  // pupils
  fill(0,0,0);
  ellipse(horizontalCenter+30,180,30,30);
  ellipse(horizontalCenter-70,180,30,30);

// line in middle of lips
  stroke(0);
  line(205,300,295,300);

// curve to upper lip
noFill();
stroke(0);
curve(175,310,235,240,265,310,295,310);

}
