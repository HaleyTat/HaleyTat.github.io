// homework 7.2

// pacman hw


 function Pacman () {

    this.x=350;
    this.y=300;
    this.posXX=200;
    this.posYY=350;
    this.size=60;
    dir=1;
    this.posX=100;
    this.posY=200;
    this.r=red;
    this.b=blue;
    this.g=green;

}

this.displayPac1= function() {

    // translate(this.x,this.y);

// first pacman
    fill(255);
    ellipse(this.x,this.y,this.size,this.size);
};

this.displayPac2= function() {
// second pacman
    fill(255);
    ellipse(this.posX,this.posY,this.size,this.size);

};

this.displayPac3= function() {
  // third pacman
      fill(255);
      ellipse(this.posX,this.posY,this.size,this.size);
};
