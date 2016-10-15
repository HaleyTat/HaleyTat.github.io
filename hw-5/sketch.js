// homework 5

// minimalism hw
var blockArray=[];



function setup() {
createCanvas(600,400);

  for (var i = 0; i < 10; i++) {
    blockArray.push(new Block(200,200));
    }
}

function draw() {

background(255);

  for (var i = 0; i < blockArray.length; i++) {
    blockArray[i].display();


      }


}
