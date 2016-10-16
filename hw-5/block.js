// homework 5

// minimalism hw

function Block(x,y) {
   this.x=x;
   this.y=y;
   this.size=40;
   this.posX=random(0,width);
   this.posY=random(0,height);

// black block
this.display= function() {

    fill(250,240,230);

   };

this.clicked= function() {


    fill(255);
    rect(this.posX,this.posY,this.size,this.size);

// grow function
this.grow= function() {

  this.size=this.size+1;

     };
};
}

  function WhiteBlock(x,y) {
      this.x=x;
      this.y=y;
      this.size=10;

  this.display= function() {

      noStroke();
      fill(255);
      rect(this.x,this.y,this.size,this.size);

  };

  this.sizeup= function() {

      this.size=this.size+1;

};
}
