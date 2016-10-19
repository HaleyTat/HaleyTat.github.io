// homework 7.2

// pacman hw


function Pacman(x,y) {

  this.x=x;
  this.y=y;
  // this.posXX=200;
  // this.posYY=350;
  this.size=60;
  // dir=1;
  // this.posX=100;
  // this.posY=200;
  // this.r=red;
  // this.b=blue;
  // this.g=green;

  this.display= function() {

    // translate(this.x,this.y);

    // first pacman
    fill(255,0,0);
    ellipse(this.x,this.y,this.size,this.size);
  };
}
//
// this.displayPac2= function() {
// // second pacman
//     fill(255);
//     ellipse(this.posX,this.posY,this.size,this.size);
//
// };
//
// this.displayPac3= function() {
//   // third pacman
//       fill(255);
//       ellipse(this.posX,this.posY,this.size,this.size);
// };
