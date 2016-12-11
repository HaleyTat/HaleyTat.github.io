// final project

//description: two classes of side profiles talking to one another

function PersonOne(x,y){

    this.x=width*0.25;
    this.y=height*0.4;
    this.eyeX1=this.x*1.05;
    this.eyeY1=this.x*0.75;
    this.eyeSpace2=this.eyeX1*0.15;
    this.sizeHead= (width*0.2);
    this.mouth1=PI/4;
    this.mouthX1=this.x*1.15;
    this.mouthY1=this.x*1.05;
    this.mouthSize1=(width*0.3)*0.08;
    this.eyeSize1=(width*0.3)*0.05;
}

PersonOne.prototype.display= function(){
    // head
    noStroke();
    fill(255,255,0,150);
    ellipse(this.x,this.y,this.sizeHead,this.sizeHead);
    // eye 1
    noStroke();
    fill(0);
    ellipse(this.eyeX1,this.eyeY1,this.eyeSize1,this.eyeSize1);
    // // eye 2
    noStroke();
    fill(0);
    ellipse(this.eyeX1+this.eyeSpace2,this.eyeY1,this.eyeSize1,this.eyeSize1);
    // open mouth
    noStroke();
    fill(0);
    ellipse(this.mouthX1,this.mouthY1,this.mouthSize1,this.mouthSize1);
    // closed mouth
    // noFill();
    // stroke(0);
    // curve(70,270,80,285,100,285,120,270);

};

PersonOne.prototype.mvt_unibrow= function(){

    // unibrow
    noFill();
    stroke(0);
    curve(this.eyeX1,this.eyeY1,this.eyeX1*0.25,this.eyeY1,this.eyeX1*0.3,this.eyeY1,this.eyeX*0.5,this.eyeY1);


};
