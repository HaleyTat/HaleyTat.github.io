// homework 5

// minimalism hw

function Block(x,y) {
   this.x=x;
   this.y=y;
   this.size=40;
   this.col=color(0);


// black block
this.display= function() {

    fill(this.col);
    rect(this.x,this.y,this.size,this.size);
   };

// this.clicked= function() {
//
//        this.col=color(250,240,230);
// };

// grow function
this.grow= function() {

  this.size=this.size+1;

     };
}

  function WhiteBlock(x,y) {
      this.x=x;
      this.y=y;
      this.size=10;

  this.display= function() {

      noStroke();
      fill(255);
      rect(this.posX,this.y,this.size,this.size);

  };
  // this.clicked= function() {
  //
  //        this.col=color(250,240,230);

  this.sizeup= function() {

      this.size=this.size+1;

};

}
