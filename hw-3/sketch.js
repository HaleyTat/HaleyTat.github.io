// hw-3

// conditional statement hw
 // var begin=0;
 // var rectangleGrow=begin+10;

function setup() {

createCanvas(800,800);
background(135,206,250);
}

function draw() {
  // textSize(40);
// if (0=="0") {
  // text(100,100,"true")
// } else {
  // text("false",100,100);
// }
  if (mouseY>=400) {
    fill(0,0,255);
  } else {
    fill(0,255,255,100);
  }
  rect(300,300,250,175);
  // if (mousePressed()) {
  //  rect(rectangleGrow,100,250,175);
  // }
  // rect(300,300,250,175);
}
