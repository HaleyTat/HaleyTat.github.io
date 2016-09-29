// homework 4.2

// conditional statement hw
var rectMove=0;
var ellPosX = 50;
var speed = 10;
var ellPosY= 200;
function setup() {
  createCanvas(800,800);
}

function draw() {
  background(135,206,250);
  // moving retcangle fom left to right
  fill(0,0,255);
  noStroke();

  push();
  if (mouseY>=300) {
    fill(0);
  } else {
    fill(255);
  }
  rect(300,300,250,150);
  pop();

  rect(rectMove,300,250,150);
  rectMove++;

  // button which changes from black to white

  //Example from Daniel Shiffman and still so confused on bouncing ball

  noStroke();
  fill(0);
  ellPosX=ellPosX+speed;
  // ellipse(300,200,100,100);
  if (ellPosX>=width || ellPosX<=0) {
    speed=speed * (-1);
  }

  ellipse(ellPosX,ellPosY,100,100);

  if (mouseIsPressed) {
    ellPosY=ellPosY+random(-10,10);
    if (ellPosY>=height || ellPosY<=0) {
      ellPosY=height*0.5;

    }


  }
}
