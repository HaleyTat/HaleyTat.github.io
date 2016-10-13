// homework 4.2

// minimalism hw
   var objectSquare={
   x:200,
   y:200,
   display: function() {
    noStroke();
    fill(0);
    rect(this.x,this.y,this.sideS,this.topS);
}

  };
  function setup() {
    createCanvas(600,400);
    background(255);
  }

  function draw() {
  objectSquare.display();
}
