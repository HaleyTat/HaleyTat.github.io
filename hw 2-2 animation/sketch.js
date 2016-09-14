//hoemwork 2.1

//description: self-portrait

function setup() {

createCanvas(500,500);
}

function draw() {

  var horizontalCenter = width/2;

  background(127,255,212);

// hair
noStroke();
fill(165,42,42);
arc(240,230,400,400,360,350);

// right side of hair
noStroke();
fill(165,42,42);
arc(285,230,400,400,350,360);

// ear 1
stroke(255,218,185);
fill(255,218,185);
arc(380,190,100,80,350,360);

// ear 2
stroke(255,218,185);
fill(255,218,185);
arc(120,190,100,80,360,350);

  //head
  noStroke();
  fill(255,228,196);
  ellipse(250, 200, 290, 330);

  //neck
  noStroke();
  fill(255,228,196);
  rect(175,250,150,200);

  // eyelid 1
  fill(255,218,185);
  ellipse(horizontalCenter-50,170,80,40);

  // eyelid 2
  fill(255,218,185);
  ellipse(horizontalCenter+50,170,80,40);

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

// cheek 1
noStroke();
fill(250,240,230);
arc(200, 215, 140, 160, HALF_PI, PI);

// cheek 2
noStroke();
fill(250,240,230);
arc(300, 215, 140, 160, 0, HALF_PI);

// bangs
stroke(0);
fill(165,42,42);
arc(250, 140, 275, 235, PI, TWO_PI);

// chin
noStroke();
fill(250,240,230);
ellipse(horizontalCenter,340,60,50);

}
