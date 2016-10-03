// homework 4.2

// minimalism hw
 var objectSpot={
 x:10,
 y:20,
};
function setup() {
  createCanvas(600,600);
  objectSpot.x=random(600);
}

function draw() {
background(255);
fill(0);
ellipse(objectSpot.x,400,80,80);

}
