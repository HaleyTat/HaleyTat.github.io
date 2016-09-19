//homework 2.2

// description: animation

// var horizontalCenter= width/2
// var diameter= 100

var yellow=255
var spot={
  x:50,
  y:100
};

function setup() {

createCanvas(500,500);
frameRate(24);
}

function draw() {
  // screen changes color from right to left
  var yellow=map(mouseX,0,500,0,255);
  background(255,yellow,0);
// rect side to side
  noStroke();
  fill(135,206,235);
  rect(mouseX,150,80,40);
// circle up and down
  noStroke();
  fill(135,206,235);
  ellipse(250,mouseY,50,50);

  spot.x=random(0,width);
  spot.y=random(0,height);
  // yellow=random(0,255);
  fill(135,206,235,100);
  ellipse(spot.x,spot.y,30,30);

  // noStroke();
  // fill((135,206,235);
  // ellipse(diameter,horizontalCenter,70,70);


}
