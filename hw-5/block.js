// homework 5

// minimalism hw

function Block(x,y) {
   this.x=x;
   this.y=y;
   this.size=40;

// black block
this.display= function() {

    noStroke();
    fill(0);
    rect(this.x,this.y,this.size,this.size);

   };

// allows blocks to grow when mouse is pressed
this.grow= function() {

  this.size=this.size+1;

     };

}
