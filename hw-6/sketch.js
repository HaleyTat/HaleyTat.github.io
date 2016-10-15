// homework 4.2

// minimalism hw
 function Pacman (red,green,blue) {

    x=mouseX;
    y=mouseY;
    size=60;
    dir=1;
    this.r=red;
    this.b=blue;
    this.g=green;

}

Pacman.prototype.pacDraw= function() {

          push();

    translate(this.x,this.y);
    fill(this.r,this.g,this.b);
    ellipse(this.x,this.y,this.size,this.size);

          pop();

};

function setup() {
  createCanvas(600,600);

}

function draw() {
background(0);


}
