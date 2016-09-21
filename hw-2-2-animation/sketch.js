//homework 2.2

// description: animation

// var horizontalCenter= width/2
// var diameter= 100

var bleColor=255;
var grn=255;
var rectangleX=0;
// rectangleX=rectangleX+1;
var spot={
  x:50,
  y:100
};

function setup() {

createCanvas(500,500);
}

function draw() {
  // screen changes color from right to left
  var bl=map(mouseX,0,500,0,255);
  var rd=map(mouseX,0,500,255,0);
  var rectangleX=0;
  // rectangleX=rectangleX+1;
  background(0,0,bleColor);
// rect side to side
  noStroke();
  fill(135,206,235);
  rect(mouseX,150,80,40);
  rect(mouseX,250,80,40);
  rect(mouseX,350,80,40);
//moving square
noStroke();
fill(135,206,235);
rect(rectangleX,50,50,50);
rectangleX=rectangleX+1;
// circle up and down
  noStroke();
  fill(135,206,235);
  rect(100,mouseY,10,150);
// moving rectangles
frameRate(20);
  spot.x=random(0,width);
  spot.y=random(0,height);
  fill(135,206,235,100);
  rect(spot.x,spot.y,60,30);

}
