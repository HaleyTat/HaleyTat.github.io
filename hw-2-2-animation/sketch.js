//homework 2.2

// description: animation

 // function preload() {
 // img = loadImage("gifcombo2");

// }

function setup() {

createCanvas(500,500);

}

function draw() {
  background(255,182,193);

  noStroke();
  fill(135,206,235);
  rect(mouseX,150,80,40);

  noStroke();
  fill(135,206,235);
  arc(200,mouseY,50,50,90,340,OPEN);

}
