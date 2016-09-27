// hw-3

// conditional statement hw
  var begin=0;
  begin=begin+10;

function setup() {

createCanvas(800,800);
background(135,206,250);
}

function draw() {
  rect(300,300,250,175);
  if (mouseY>=400) {
    fill(0,0,255);
  } else if (mousePressed()) {
     rect(begin,100,250,175);
  }else {
    fill(0,255,255,100);
  }
  rect(300,300,250,175);
}
