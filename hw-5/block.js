// homework 5

// minimalism hw

function Block() {
   x=200;
   y=200;
   sideS=40;
   topS=40;
}
// black block
Block.prototype.display= function() {

    push();

    noStroke();
    fill(0);
    rect(this.x,this.y,this.sideS,this.topS);

    pop();
    this.grow();
   };

// allows blocks to grow when mouse is pressed
Block.prototype.grow= function() {

    this.sideS=this.sideS;
    this.topS=this.topS;

     if (mouseIsPressed) {
       this.sideS=this.sideS+1;
       this.topS=this.topS+1;
     }
};
