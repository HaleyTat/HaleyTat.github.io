// homework 4.2

// minimalism hw
var objectSquare={
x:200,
y:200,
sideS:40,
topS:40,
// speed:1,
display: function () {
 noStroke();
 fill(0);
 rect(this.x,this.y,this.sideS,this.topS);
},
secSquare: function() {
  noStroke();
  fill(255);
  rect(100,100,this.sideS,this.topS);
},
grow: function() {

  if (mouseIsPressed) {
    this.sideS=this.sideS+1;
    this.topS=this.topS+1;
}
this.display();
this.secSquare();
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
// first black square
objectSquare.display();
// white square
objectSquare.secSquare();
// objectSquare.move();
// makes square grow
objectSquare.grow();
}
