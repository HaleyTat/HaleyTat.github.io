// homework 7.2

// pacman hw

var pacman= [];


function setup() {

  createCanvas(600,600);

  for (var i = 0; i < 10; i++) {
    var x= random(width);
    var y= random(height);
    pacman.push= (new Pacman(x,y));
  }

}

function draw() {

background(0);

for (var i = 0; i < pacman.length; i++) {
  pacman[i].displayPac1();
}

// Pacman.displayPac1();
// Pacman.displayPac2();
// Pacman.displayPac3();


}
