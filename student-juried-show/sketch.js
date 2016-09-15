// personal work

// expressionistic code drawing

var horizontalCenter=400;
var circleY=0;
var circleYY=0;
var circleG=0

function setup() {

createCanvas(800,800);
}

function draw() {

 background(255,248,220);
 noStroke();
 fill(255,255,0);
 ellipse(horizontalCenter,circleY,100,100);

 noStroke();
 fill(255,255,0);
 ellipse(100,circleYY,100,100);

 noStroke();
 fill(255,255,0);
 ellipse(700,circleYY,100,100);

 noStroke();
 fill(0,191,255);
 ellipse(horizontalCenter,horizontalCenter,circleG,circleG);

// comes down
circleY=circleY+1;
// comes down
circleYY=circleYY+1;
// grows from center
circleG=circleG+5;

}
