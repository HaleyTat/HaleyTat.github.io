// homework 5

// minimalism hw
var blockArray=[];

// move:function() {
  // this.speed=this.speed+1;
  // this.y=this.y+this.speed;

  // if (this.y>=height) {
    // this.speed=this.speed*-1;
  // }
// }
function setup() {
createCanvas(600,400);

for (var i = 0; i < 12; i++) {
  blockArray.push(new Block(0));
}
}

function draw() {
background(255);

  for (var i = 0; i < blockArray.length; i++) {
    blockArray[i].display();
      }


}
