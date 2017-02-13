// TIMD Project 1

// var Heads=[];
var img;
var animals=[];

function preload(){
    for (var j = 0; j < 2; j++) {
        animals[j]= loadImage('images/animal'+ j + '.png');

    }
}

function setup() {
  img=loadImage('images/cliffimage.jpeg');
  createCanvas(800,800);
}

function mousePressed(){

var a= new Animal(random(0,800),1);

    animals.push(a);
}

function draw() {

background(img);

for (var i = 0; i < Heads.length; i++) {
    Heads[i].move();
    Heads[i].display();
}

if (Heads[i].lifespan < 0) {
    Heads.splice(i,1);
}

}
