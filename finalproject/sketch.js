// final project

//description: two classes of side profiles talking to one another

var person1=[];
var person2=[];

function setup() {

    createCanvas(500,500);

    for (var i = 0; i < 1; i++) {
        var s=width/2-150;
        var t=215;
        var size1=10;
        person1.push(new PersonOne(s,t,size1));
        var u=width/2+100;
        var v=235;
        var size2=20;
        person2.push(new PersonTwo(u,v,size2));
    }
}

function draw() {

    background(255);

    for (var i = 0; i < person1.length && person2.length ; i++) {
        person1[i].display();
        person2[i].picture();
    }

}
