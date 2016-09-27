// homework 4.2

// conditional statement hw
var circleMove=0;

function setup() {
createCanvas(800,800);
}

function draw() {
  background(135,206,250);
  // moving retcangle fom left to right
   fill(0,0,255);
   noStroke();
   rect(circleMove,300,250,150);
   circleMove++;

// button which changes from black to white
 if (mouseY>=300) {
    fill(0);
  } else {
   fill(255);
 }
 rect(300,300,250,150);
}
//Example from Daniel Shiffman and still so confused on bouncing ball

// noStroke();
// fill(0);
// ellipse(300,200,100,100);
// if (x>width || x<0) {
  // speed=speed*-1;
// }
// x=x+speed;
 // else {
  // ellipse(x,b,b,d)
// }
