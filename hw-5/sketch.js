// homework 6.1

// minimalism hw
var blocks=[];
var whiteblocks=[];


function setup() {
  createCanvas(600,400);

  for (var i = 0; i < 40; i++) {
    var x=random(0,width);
    var y=random(0,height);
    blocks.push(new Block(x,y));
    whiteblocks.push(new WhiteBlock(x,y));
  }
}

// function mousePressed() {
//
//   for (var i = 0; i < blocks.length; i++) {
//     blocks[i].clicked();
//     blocks[i].grow();
//   }
// }

function draw() {

  background(255);

  // if (mousePressed()) {
  //   fill(255);
  //   rect(this.posX,this.posY,this.size,this.size);


  if (mouseIsPressed) {
    for (var j = 0; j < blocks.length; j++) {
      blocks[j].grow();
      whiteblocks[j].sizeup();

    }
  }


  for (var m = 0; m < whiteblocks.length; m++) {
    blocks[m].display();
    whiteblocks[m].display();
  }

  // for (var i = 0; i < blocks.length; i++) {
  //   blocks[i].display();
    // blocks[i].grow();
    // whiteblocks[i].display();
    // whiteblocks[i].sizeup();
  // }


  // }

}
