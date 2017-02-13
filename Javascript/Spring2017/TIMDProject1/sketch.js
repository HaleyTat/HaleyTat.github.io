// TIMD Project 1

var Heads=[];


function setup() {
  createCanvas(windowWidth,windowHeight);
  loadImage("cliffimage.jpg");
}

function mousePressed(){

var h= new Head(random(0,width),0);

    Heads.push(h);
}

function draw() {

// background(loadImage("cliffimage.jpg"));
noStroke();
fill(0,200,255);
rect(width/3,height/8,width*-0.5,height*0.8);
noStroke();
fill(0, 107, 179);
triangle(width*0.33,height/8,width*0.5,height/5,width*0.83,height/8);

for (var i = 0; i < Heads.length; i++) {
    Heads[i].move();
    Heads[i].display();
}


}
