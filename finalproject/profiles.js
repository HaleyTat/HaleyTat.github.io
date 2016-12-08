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
