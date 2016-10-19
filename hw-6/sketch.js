// homework 7.2

// pacman hw

var pacMan=[];


function setup() {

  createCanvas(600,600);

  for (var i = 0; i < 10; i++) {
    var x= random(width);
    var y= random(height);
    pacMan.push= (new Pacman(x,y));
  }

}

function draw() {

background(0);

for (var i = 0; i < pacMan.length; i++) {
  pacMan[i].display();
}

// Pacman.displayPac1();
// Pacman.displayPac2();
// Pacman.displayPac3();


}
