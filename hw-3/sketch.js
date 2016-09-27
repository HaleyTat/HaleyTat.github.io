// hw-3

// conditional statement hw
  // var begin=0;
  // begin=begin+10;

function setup() {

createCanvas(800,800);
background(135,206,250);
}

function draw() {
if (mouseY>=300) {
   fill(0);
  //  rect(300,200,200,150);
 } else {
  fill(255);
  // rect(300,200,200,150);
}
rect(300,300,250,150);
}
// else if (mousePressed()) {
  //  rect(begin,100,250,175);
