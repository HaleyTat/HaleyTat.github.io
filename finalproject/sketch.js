// final project

//description: two classes of side profiles talking to one another

var person1;
var person2;
var time1;

function setup() {

    createCanvas(windowWidth,windowHeight);


    var s=(width*-0.3);
    var t=0;
    // var size1=width*0.3;
    person1 = new PersonOne(u,v);
    var u=width*0.8;
    var v=height*0.47;
    person2 = new PersonTwo(u,v);

    setTimeout(ellipseBG,3000);
}

function draw() {

    // time1=map(mouseX,0,500,100,255);
    background(150,200,0,70);



    person1.display();
    person2.picture();


}

function ellipseBG(){
    noStroke();
    fill(240,150,0,180);
    ellipse(250,50,30,30);
    setTimeout(ellipseBG,3000);
}
