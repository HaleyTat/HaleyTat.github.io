// homework 4.2

// minimalism hw
var objectSquare={
x:200,
y:200,
left:40,
top:40,
// speed:1,
display: function () {
 noStroke();
 fill(0);
 rect(this.x,this.y,this.left,this.top);
},

grow: function() {
  this.top=this.top;
  this.left=this.left;

  if (mouseIsPressed) {
    this.left=this.left+1;
    this.top=this.top+1;
}
},
secSquare: function() {
  noStroke();
  fill(255);
  rect(100,100,this.left,this.top);

if (mouseIsPressed) {
  this.left=secSquare+1;
  this.top=this.left+1;
}
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
