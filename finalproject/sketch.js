// final project

//description: two classes of side profiles talking to one another

var person1;
var person2;
var time1;

function setup() {

    createCanvas(windowWidth,windowHeight);


    var s=width/2-150;
    var t=215;
    var size1=10;
    person1 = new PersonOne(s,t,size1);
    var u=width/2+100;
    var v=235;
    var size2=20;
    person2 = new PersonTwo(u,v,size2);

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
