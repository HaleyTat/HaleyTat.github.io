
var obj1 = [];

function setup() {
  createCanvas(1000,100);
  for (var i = 0; i < 20; i++) {
    obj1.push(new MyObj(200, "hey"));
  }

  frameRate(1);

}

function draw() {
  background(255);
  for (var i = 0; i < obj1.length; i++) {

  obj1[i].display();
  obj1[i].updatep1(floor(random(100,1000)));
  }
}
