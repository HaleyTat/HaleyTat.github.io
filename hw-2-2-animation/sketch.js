//homework 2.2

// description: animation

// var horizontalCenter= width/2
// var diameter= 100
var col=map(mouseX,0,500,0,255);

function setup() {

createCanvas(500,500);

}

function draw() {
  background(col);

  noStroke();
  fill(135,206,235);
  rect(mouseX,150,80,40);

  noStroke();
  fill(135,206,235);
  ellipse(xValue,300,50,50);

  // noStroke();
  // fill((135,206,235);
  // ellipse(diameter,horizontalCenter,70,70);


}
