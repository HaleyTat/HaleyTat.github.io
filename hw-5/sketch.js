// homework 4.2

// minimalism hw
  var blocks=[];

  function setup() {
    createCanvas(600,400);
    for (var i = 0; i < 10; i++) {
      blocks[i]= new Block();
    }
}

  function draw() {
  background(255);
  for (var i = 0; i < blocks.length; i++) {
    blocks[i].grow();
    blocks[i].display();
  }
}
function Block() {
   x=200;
   y=200;
   sideS=40;
   topS=40;
// black block
   this.display= function() {
    noStroke();
    fill(0);
    rect(this.x,this.y,this.sideS,this.topS);
   };
// allows blocks to grow when mouse is pressed
   this.grow= function() {
     if (mouseIsPressed) {
       this.sideS=this.sideS+1;
       this.topS=this.topS+1;
     }
// object its referring to
    this.display();
    };
}
