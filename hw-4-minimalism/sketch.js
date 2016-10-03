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
random(0,50);
}
ellipse(100,300,150,150);

}
