// hw-3

// conditional statement hw
var beginning=0;
var rectangleGrow=beginning+10;

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
  rect(300,300,250,175);
  if (mouseY>=400) {
    fill(0,0,255);
  } else {
    fill(255,0,255,100);
  }
  if (mousePressed()) {
    rect(rectangleGrow,300,250,175);
  }
  // rect(300,300,250,175);
}
