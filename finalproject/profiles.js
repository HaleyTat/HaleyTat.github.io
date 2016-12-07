// final project

//description: two classes of side profiles talking to one another

function PersonOne(s,t,size1){

    this.x=s;
    this.y=t;
    this.mouth1=PI/4;
    this.mouthSize=15;
    this.eyeSize1=size1;
}

PersonOne.prototype.display= function(){
    // head
    noStroke();
    fill(255,255,0,150);
    ellipse(70,250,120,150);
    // eye 1
    noStroke();
    fill(0);
    ellipse(this.x-20,this.y,this.eyeSize1,this.eyeSize1);
    // eye 2
    noStroke();
    fill(0);
    ellipse(this.x,this.y,this.eyeSize1,this.eyeSize1);
    // open mouth
    // noStroke();
    // fill(0);
    // ellipse(this.x-5,this.y+68,this.mouthSize,this.mouthSize);
    // closed mouth
    noFill();
    stroke(0);
    curve(70,270,80,285,100,285,120,270);
    // unibrow
    noFill();
    stroke(0);
    curve(this.x-55,this.y,this.x-25,this.y-15,this.x+5,this.y-15,this.x+45,this.y);

};


function PersonTwo(u,v,size2) {

    this.u=u;
    this.v=v;
    this.mouthSize2=30;
    this.mouth2=PI/4;
    this.eyeSize2=size2;


}

PersonTwo.prototype.picture= function(){
    // head
    noStroke();
    fill(246,192,235);
    ellipse(400,250,200,270);

    // open eye 1
    noStroke();
    fill(0);
    ellipse(this.u,this.v,this.eyeSize2,35);

    // open eye 2
    noStroke();
    fill(0);
    ellipse(this.u+85,this.v,this.eyeSize2,35);

    // closed eye 1
    // noFill();
    // stroke(0);
    // curve(300,200,320,250,360,250,380,200);
    // closed eye 2
    // noFill();
    // stroke(0);
    // curve(400,200,420,250,460,250,480,200);

// EYELASHES
// steps=6;
// for ( var g = 0; g <= steps; g++) {
//     var t=g/steps;
//     var x=curvePoint(400,420,460,480,t);
//     var y=curve(200,250,250,200,t);
//     var tx=curveTangent(400,420,460,480,t);
//     var ty=curveTangent(200,250,250,200,t);
//     var a=atan2(ty, tx);
//      a-=PI/2;
//     line(x,y,cos(a)*8+x,sin(a)*8+y);
// }
    // hair
    noStroke();
    fill(250,51,224);
    ellipse(360,130,150,90);
    // mouth
    stroke(255,0,255);
    fill(255,0,255);
    curve(340,200,370,350,420,350,440,200);
    // nose
    triangle(365,275,377,250,389,275);
    // eyebrow1
    noFill();
    stroke(0);
    curve(300,230,320,190,360,190,380,230);
    // eyebrow2
    noFill();
    stroke(0);
    curve(400,230,420,190,460,190,480,230);

};
