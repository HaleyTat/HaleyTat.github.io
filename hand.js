function handChar1(x,y){

    this.x=x;
    this.y=y;
    this.handX=width*0.35;
    this.handY=height*0.75;
    this.handX2=width*0.4;
    this.handPos=0;
    this.handWait=60;
    this.timer4=0;

    this.handPtr=0;
    this.SeqID4=0;

    this.handSeq4 = [
            [[0,0.5], [1,0.5], [0,1], [3,1]],
            [[3,0.5], [0,0.5], [3,1]],
            [[1,1], [2,1], [1,1]],
            [[0,4]]
    ];



}

handChar1.prototype.display=function(){

    this.newHandMvt();

    push();

    translate();
    // // hand
    // noStroke();
    // fill(255,255,0);
    // ellipse(this.handX,this.handY,((width*0.3)*0.5),((width*0.3)*0.35));
    // // finger 1
    // stroke(0);
    // line(width*0.3525,height*0.7,width*0.412,height*0.7);
    // // finger 2
    // stroke(0);
    // line(width*0.3525,height*0.75,width*0.425,height*0.75);
    // // finger 3
    // stroke(0);
    // line(width*0.3525,height*0.8,width*0.412,height*0.8);

    if (this.handPos === 0) {
        this.mvt_Hand1();
        this.mvt_Fingers1();
    } else if (this.handPos === 1) {
        this.mvt_Hand2();
        this.mvt_Fingers2();
    } else if (this.handPos === 2) {
        this.mvt_Hand1();
        this.mvt_Fingers1();
    } else if (this.handPos === 3) {
        this.mvt_Hand2();
        this.mvt_Fingers2();

    }
    pop();

};

handChar1.prototype.newHandMvt= function(){
    this.timer4++;

    if (this.timer4 >= this.handWait) {
        this.handPtr++;

        if (this.handPtr>=this.handSeq4[this.SeqID4].length) {
            this.SeqID4= floor( random(this.handSeq4.length));
            this.handPtr=0;
        }

        this.handPos= this.handSeq4[this.SeqID4][this.handPtr][0];
        this.handWait= this.handSeq4[this.SeqID4][this.handPtr][1] * frameRate();

        this.timer4=0;
    }
};
handChar1.prototype.mvt_Hand1= function(){

    // hand
    noStroke();
    fill(255,255,0);
    ellipse(this.handX,this.handY,((width*0.3)*0.5),((width*0.3)*0.35));

};

handChar1.prototype.mvt_Hand2= function(){

    // hand
    noStroke();
    fill(255,255,0);
    ellipse(this.handX2,this.handY,((width*0.3)*0.5),((width*0.3)*0.35));

};

handChar1.prototype.mvt_Fingers1= function(){
    // finger 1
    stroke(0);
    line(width*0.3525,height*0.7,width*0.412,height*0.7);
    // finger 2
    stroke(0);
    line(width*0.3525,height*0.75,width*0.425,height*0.75);
    // finger 3
    stroke(0);
    line(width*0.3525,height*0.8,width*0.412,height*0.8);

};

handChar1.prototype.mvt_Fingers2= function(){
    // finger 1
    stroke(0);
    line(width*0.4025,height*0.7,width*0.462,height*0.7);
    // finger 2
    stroke(0);
    line(width*0.4025,height*0.75,width*0.475,height*0.75);
    // finger 3
    stroke(0);
    line(width*0.4025,height*0.8,width*0.462,height*0.8);

};
