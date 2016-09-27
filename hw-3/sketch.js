// hw-3

// conditional statement hw
var circleMove=0;

function setup() {

createCanvas(800,800);
}

function draw() {
  background(135,206,250);
  fill(0,0,255);
  noStroke();
  rect(circleMove,300,250,150);
  circleMove=circleMove+10;
// if (mouseY>=300) {
  //  fill(0);
 // } else {
  // fill(255);
// }
// rect(300,300,250,150);
}
// else if (mousePressed()) {
  //  rect(begin,100,250,175);
