// TIMD Final

var c1;
var c2;
var c3;
var c4;


function setup() {
  //size(640, 360, P3D);
  createCanvas(600,600, WEBGL);

  c1 = new Cylinder(500, 250, 100, 0);
  c2 = new Cylinder(500, 300, 100, 0);
  c3 = new Cylinder(500, 350, 100, 0);
  c4 = new Cylinder(500, 400, 100, 0);


  frameRate(30);

}


function draw() {


  background(255);
  //calling 13 cylinders to be displayed

  c1.shapeDisplay();
  c2.shapeDisplay();
  c3.shapeDisplay();
  c4.shapeDisplay();


  //created a distance variable to help measure the distances
  //between c1 and c2's x and y

  // var d = dist(c1.x, c2.x, c1.y, c2.y);
  //
  //  //the background turns black after 26 seconds
  //
  //
  //   if ( this.d < c1.r + c2.r || c2.r > 200 ) {
  //
  //     //cylinders change color
  //
  //     c1.col=0;
  //     c2.col=1;
  //     c3.col=2;
  //     c4.col=3;
  //     c5.col=0;
  //     c6.col=0;
  //     c7.col=0;
  //     c8.col=0;
  //     c9.col=0;
  //     c10.col=0;
  //     c11.col=0;
  //     c12.col=0;
  //     c13.col=0;
  //
  //     //cylinders increase in size
  //
  //      c1.r++;
  //      c2.r++;
  //      c3.r++;
  //      c4.r++;
  //      c5.r++;
  //      c6.r++;
  //      c7.r++;
  //      c8.r++;
  //      c9.r++;
  //      c10.r++;
  //      c11.r++;
  //      c12.r++;
  //      c13.r++;
  //
  //
  //
  //   } else if ( this.d > c1.r + c2.r || c7.r > 100) {
  //
  //     //changing the fill of the floating boxes
  //
  //     //c1.col=0;
  //     c2.col=0;
  //     c3.col=0;
  //     c4.col=0;
  //     c5.col=0;
  //     c6.col=0;
  //     c7.col=0;
  //     c8.col=0;
  //     c9.col=0;
  //     c10.col=0;
  //     c11.col=0;
  //     c12.col=0;
  //     c13.col=0;
  //
  //      //changing the size of the boxes
  //
  //       c1.r--;
  //       c2.r--;
  //       c3.r--;
  //       c4.r--;
  //       c5.r--;
  //       c6.r--;
  //       c7.r--;
  //       c8.r--;
  //       c9.r--;
  //       c10.r--;
  //       c11.r--;
  //       c12.r--;
  //       c13.r--;
  //
  //       }

}
