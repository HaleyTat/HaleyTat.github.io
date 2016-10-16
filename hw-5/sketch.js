// homework 5

// minimalism hw
var blocks=[];
var whiteblocks=[];


function setup() {
createCanvas(600,400);

  for (var i = 0; i < 50; i++) {
    var x=random(0,width);
    var y=random(0,height);
    blocks.push(new Block(x,y));
    whiteblocks.push(new WhiteBlock(x,y));
    }
}

function mousePressed() {

  for (var i = 0; i < whiteblocks.length; i++) {
    whiteblocks[i].clicked();
  }
}

function draw() {

background(255);

// if (mousePressed()) {
//   fill(255);
//   rect(this.posX,this.posY,this.size,this.size);

  for (var i = 0; i < blocks.length; i++) {

    blocks[i].display();
    blocks[i].grow();
    whiteblocks[i].display();
    whiteblocks[i].sizeup();
}

      // }

}
