// homework 7.2

// pacman hw

// var pacmans=[];

function setup() {

createCanvas(600,600);

}

function draw() {

// background(0);
  // background(255);

background(255);

Pacman.display();


}


function Pacman() {

    this.x=20;
    this.y=300;
    this.posX=30;
    this.posY=400;
    this.speed=1;
    dir=1;
    size=60;
    eyeY=280;
    eyeSize=5;


this.display= function() {

fill(255,255,0);
ellipse(this.x,this.y,this.size,this.size);
fill(0);
ellipse(this.posX,this.eyeY,this.eyeSize,this.eyeSize);

};


}
