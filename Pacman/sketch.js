//hoemwork 2.1

//description: self-portrait

var pacNumber=1;
var pacMan=[];

function setup() {

    createCanvas(windowWidth,windowHeight);

    for (var i = 0; i < pacNumber; i++) {
        var size=round(random(40,80));
        var x=round(random(size,windowWidth-size));
        var y=round(random(size,windowHeight-size));
        pacMan.push(new Pacman(x,y,size));
    }
}


function draw() {

    background(250,240,230);

    for (var i = 0; i < pacMan.length; i++) {
        pacMan[i].display();
        pacMan[i].move();
}
}
