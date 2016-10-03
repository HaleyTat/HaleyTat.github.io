// homework 4.2

// minimalism hw

// var objectSpot={
// x:10,
// y:20,
// z:50,
// };

function setup() {
  createCanvas(600,600);
}

function draw() {
background(255);
fill(0);
ellipse(200,400,80,80);

if (mouseIsPressed) {
fill(255,0,255);
if (mouseX<=200) {
  fill(200,0,0);
} else {
  fill(250,240,230);
}
ellipse(100,300,150,150);

}
}
