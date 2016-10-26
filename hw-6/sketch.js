// homework 7.2

// pacman hw

var pacX=[10,50,100,150,200];
var pacY=[100,200,300,400,500];
var sizePac=50;
var speed1=1;
var speed2=2;
var speed3=3;
var eyeSize=5;
var mouthSize1= 70;
var mouthSize2= 0;

function setup() {

  createCanvas(600,600);

}

function draw() {

  background(0);

// changes direction and speed of mouth and pacman head
  if (pacX[4]>width) {
    mouthSize2=65;
    mouthSize1=230;
    speed1=-1;
    speed2=-2;
    speed3=-3;
    pacY[0]=random(0,height);
    pacY[1]=random(0,height);
    pacY[2]=random(0,height);
    pacY[3]=random(0,height);
    pacY[4]=random(0,height);

    } else if (pacX[0]<0) {
    mouthSize2=0;
    mouthSize1=70;
    speed1=1;
    speed2=2;
    speed3=3;
    pacY[0]=100;
    pacY[1]=200;
    pacY[2]=300;
    pacY[3]=400;
    pacY[4]=500;
    }
// changes it back to normal

  // pacman 1
    fill(255,255,0);
    ellipse(pacX[0],pacY[0],sizePac,sizePac);
  // pacman 1 mouth
    fill(0);
    arc(pacX[0],pacY[0],sizePac,sizePac, mouthSize2, mouthSize1);
  // pacman 1 eye
    fill(0);
    ellipse(pacX[0],pacY[0]-10,eyeSize,eyeSize);
  // pacman 2
    fill(255,255,0);
    ellipse(pacX[1],pacY[1],sizePac,sizePac);
    // pacman 2 mouth
    fill(0);
    arc(pacX[1],pacY[1],sizePac,sizePac, mouthSize2, mouthSize1);
  // pacman 2 eye
    fill(0);
    ellipse(pacX[1],pacY[1]-10,eyeSize,eyeSize);
  // pacman 3
    fill(255,255,0);
    ellipse(pacX[2],pacY[2],sizePac,sizePac);
  // pacman 3 mouth
    fill(0);
    arc(pacX[2],pacY[2],sizePac,sizePac, mouthSize2, mouthSize1);
  // pacman 3 eye
    fill(0);
    ellipse(pacX[2],pacY[2]-10,eyeSize,eyeSize);
  // pacman 4
    fill(255,255,0);
    ellipse(pacX[3],pacY[3],sizePac,sizePac);
  // pacman 4 mouth
    fill(0);
    arc(pacX[3],pacY[3],sizePac,sizePac, mouthSize2, mouthSize1);
  // pacman 4 eye
    fill(0);
    ellipse(pacX[3],pacY[3]-10,eyeSize,eyeSize);
  // pacman 5
    fill(255,255,0);
    ellipse(pacX[4],pacY[4],sizePac,sizePac);
    fill(0);
  // pacman 5 mouth
    arc(pacX[4],pacY[4],sizePac,sizePac, mouthSize2, mouthSize1);
    fill(0);
  // pacman 5 eye
    ellipse(pacX[4],pacY[4]-10,eyeSize,eyeSize);

// movement for the pacMEN
    pacX[0]=pacX[0]+speed1;
    pacX[1]=pacX[1]+speed2;
    pacX[2]=pacX[2]+speed1;
    pacX[3]=pacX[3]+speed3;
    pacX[4]=pacX[4]+speed2;


}
