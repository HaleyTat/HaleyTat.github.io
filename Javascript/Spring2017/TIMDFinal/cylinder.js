
function Cylinder(xInput, yInput, rD, fillCol) {

var a;  // Angle of rotation, angle offset between boxes, and number of boxes
var x;
var y;
var r;
var offset;
var offset2;
var num;
var dir;
var col;

// Cylinder.prototype.display(float xInput, float yInput, float rD, float fillCol){

  this.x=xInput;
  this.y=yInput;
  this.offset=PI/24.0;
  this.offset2=PI/18.0;
  this.num=20;
  this.r=rD;
  this.dir=random(1,4);
  this.col= fillCol;

  }

Cylinder.prototype.shapeDisplay= function(){

      //Cylinder 1

      for( i = 0; i < this.num; i++) {

      //creating shape and using lights() to cast shadow

      push();
      translate(this.x,this.y);
      stroke(this.col,this.col,this.col);

      //col controls fill color
      noFill();
      rotateX(this.a/2 + this.offset*i);

      //r controls size of box
      box(this.r, this.r, this.r);
      pop();
      }

      this.a+=0.01;

      for( i = 0; i < 1; i++) {

      //created four directions and various changes in location
        if( this.dir < 1){
        this.x++;
        this.y++;
          rotateY(this.a + this.offset*i);
      } else if ( this.dir < 2){
        this.x--;
        this.y++;
        rotateY(this.a + this.offset*i);
      } else if ( this.dir < 3 ){
        this.x++;
        this.y--;
        rotateY(this.a + this.offset*i);
      } else {
        this.x--;
        this.y--;
        rotateY(this.a + this.offset*i);
      }
        //created boundaries for the cylinders to stay within

        if (this.x > 1000 || this.y > 700) {
        this.dir=4;

        } else if ( this.x < 10 || this.y < 10){
       this.dir=1;
        }
      }

};
