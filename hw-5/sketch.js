// homework 4.2

// minimalism hw
var objectSquare={
x:200,
y:200,
left:40,
top:40,
speed:1,

display: function () {
 noStroke();
 fill(0);
 rect(this.x,this.y,this.left,this.top);
},

grow: function() {
  this.top=this.top;
  this.left=this.left;

  if (mouseIsPressed) {
    this.size=this.size+1;
    this.left=this.left+1;
  }
}

// move:function() {
  // this.speed=this.speed+1;
  // this.y=this.y+this.speed;

  // if (this.y>=height) {
    // this.speed=this.speed*-1;
  // }
// }
};

function setup() {
 createCanvas(600,400);
}

function draw() {
background(255);

// if (this.display>=height) {
  // fill(255,0,0);
// }
objectSquare.display();
objectSquare.grow();
// objectSquare.move();
}
