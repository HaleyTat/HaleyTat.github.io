// final project

//description: two classes of side profiles talking to one another

var person1;
var person2;
var flower;
var hand;
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
    flower = new Flowers();

}

function draw() {

    // time1=map(mouseX,0,500,100,255);
    background(128, 229, 255);
    // heartBG();

    person1.display();
    person2.picture();
    flower.display();

    textSize(20);
    text('click to see the happy ending',width*0.35,height*0.9,width*0.55,height*0.9);

    if (mouseIsPressed) {
        heartBG();
    }

}

function heartBG(){
    noStroke();
    fill(255, 153, 255);
    ellipse(width*0.498,height*0.3,((width*0.4)*0.09),((width*0.4)*0.09));
    ellipse(width*0.527,height*0.3,((width*0.4)*0.09),((width*0.4)*0.09));
    fill(255, 153, 255);
    triangle(width*0.47875,height*0.3,width*0.5115,height*0.395,width*0.5461,height*0.3);

}
