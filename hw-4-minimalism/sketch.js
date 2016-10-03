// homework 4.2

// minimalism hw
 var objectSpot={
 x:10,
 y:20,
 z:10,
};
function setup() {
  createCanvas(600,600);
  frameRate(5);
  background(255);
}

function draw() {
objectSpot.x=random(width);
objectSpot.y=random(height);
objectSpot.z=random(255);

for (objectSpot.x>400; objectSpot.y < 300;) {
 fill(0,0,255);
 }

noStroke();
fill(0,255,0,objectSpot.z);
ellipse(objectSpot.x,objectSpot.y,40,40);

}
