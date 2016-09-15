// personal work

// expressionistic code drawing

var horizontalCenter=400;
var circleY=0;
var circleYY=0;

function setup() {

createCanvas(800,800);
background(255,248,220);
}

function draw() {
 noStroke();
 fill(255,255,0);
 ellipse(horizontalCenter,circleY,100,100);

 noStroke();
 fill(255,255,0);
 ellipse(100,circleYY,100,100);

circleY=circleY+1;

circleYY=circleYY+1;
}
