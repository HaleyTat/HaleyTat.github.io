// homework 7.2

// pacman hw

var button;

function setup() {
  createCanvas(800,400);
  createP("California Nevada Washington Montana");
}

function draw() {

background(255,240,230);

button= createButton('click me');
button.position(20,20); 

// createP("California, Nevada, Washington, Montana");
// textSize(36);
// text('California, Nevada, Washington, Montana',0,100,windowWidth,100);

}
