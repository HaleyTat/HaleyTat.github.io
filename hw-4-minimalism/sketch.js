// homework 4.2

// minimalism hw
 var objectSpot={
 x:10,
 y:20,
};
function setup() {
  createCanvas(600,600);
  frameRate(10);
  background(255);
}

function draw() {
objectSpot.x=random(width);
objectSpot.y=random(height);
fill(0);
ellipse(objectSpot.x,objectSpot.y,80,80);

}
