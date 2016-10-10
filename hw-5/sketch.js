// homework 4.2

// minimalism hw
var objectSquare={
x:200,
y:200,
display: function() {
 noStroke();
 fill(0);
 rect(this.x,this.y,60,60);
}

};
function setup() {
 createCanvas(600,400);
 background(255);
}

function draw() {

if (mouseIsPressed) {
  fill(255,0,0);
}
objectSquare.display();
}
