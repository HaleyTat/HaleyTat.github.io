// TIMD Project 1

var Heads=[];
// var img;

function setup() {
  // img=loadImage('images/blacknwhitecliff.jpeg');
  createCanvas(windowWidth,windowHeight);
}

function mousePressed(){

var h= new Head(random(0,width),0);

    Heads.push(h);
}

function draw() {

background(0);
// image(img,0,0);
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
