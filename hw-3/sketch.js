// hw-3

// conditional statement hw
// var circleMove=0;
function setup() {

createCanvas(800,800);
}

function draw() {
  background(135,206,250);
  var speed=3;
  var x=0;
  // fill(0,0,255);
  // noStroke();
  // rect(circleMove,300,250,150);
  // circleMove++;
fill(255);
ellipse(x,200,100,100);

if (x>width || x<0) {
  ellipse(x,300,80,80);
  speed=speed*-1;
}
x=x+speed;
 // else {
  // ellipse(x,b,b,d)
}

// if (mouseY>=300) {
  //  fill(0);
 // } else {
  // fill(255);
// }
// rect(300,300,250,150);
}
// else if (mousePressed()) {
  //  rect(begin,100,250,175);
