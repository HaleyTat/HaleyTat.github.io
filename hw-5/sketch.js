// homework 5

// minimalism hw
var squaresMulti={
x:200,
y:200,
sideS:40,
topS:40,
// speed:1,
display: function() {
 noStroke();
 fill(0);
 rect(this.x,this.y,this.sideS,this.topS);
},
grow: function() {

  if (mouseIsPressed) {
    this.sideS=this.sideS+1;
    this.topS=this.topS+1;
}
this.display();
},
};


// move:function() {
  // this.speed=this.speed+1;
  // this.y=this.y+this.speed;

  // if (this.y>=height) {
    // this.speed=this.speed*-1;
  // }
// }
function setup() {
createCanvas(600,400);
}

function draw() {
background(255);

// if (this.display>=height) {
  // fill(255,0,0);
// }
// white square
squaresMulti.display();
// objectSquare.move();
// makes square grow
squaresMulti.grow();
}
