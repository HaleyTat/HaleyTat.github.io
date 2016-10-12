// homework 4.2

// minimalism hw
var objectSquare={
x:200,
y:200,
speed:1,

display: function () {
 noStroke();
 fill(0);
 rect(this.x,this.y,60,60);
},

move:function() {
  this.speed=this.speed+1;
  this.y=this.y+this.speed;

  if (this.display>=400) {
    this.speed=this.speed*-1;
  }
}
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
objectSquare.move();
}
