// homework 5

// minimalism hw
var blocks=[];
var whiteblocks=[];


function setup() {
createCanvas(600,400);

  for (var i = 0; i < 100; i++) {
    var x=random(0,width);
    var y=random(0,height);
    whiteblocks.push(new WhiteBlock(x,y));
    blocks.push(new Block(x,y));
    }
}

function draw() {

background(255);

  for (var i = 0; i < blocks.length; i++) {

    whiteblocks[i].display();
    whiteblocks[i].sizeup();
    blocks[i].display();
    blocks[i].grow();


      }


}
