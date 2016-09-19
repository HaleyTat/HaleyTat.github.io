//homework 2.2

// description: animation

// var horizontalCenter= width/2
// var diameter= 100

var yellow=255
var x=random(0,400);

function setup() {

createCanvas(500,500);
frameRate(24);
}

function draw() {
  var yellow=map(mouseX,0,500,0,255);
  background(255,yellow,0);

  noStroke();
  fill(135,206,235);
  rect(mouseX,150,80,40);

  noStroke();
  fill(135,206,235);
  ellipse(250,mouseY,50,50);

  // noStroke();
  // fill((135,206,235);
  // ellipse(diameter,horizontalCenter,70,70);


}
