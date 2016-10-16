// homework 5

// minimalism hw
var blocks=[];



function setup() {
createCanvas(600,400);

  for (var i = 0; i < 10; i++) {
    var x=random(0,width);
    var y=random(0,height);
    blocks.push(new Block(x,y));
    }
}

function draw() {

background(255);

  for (var i = 0; i < blocks.length; i++) {
    blocks[i].display();
    blocks[i].grow();


      }


}
