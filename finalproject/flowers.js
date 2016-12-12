// final project

//description: two classes of side profiles talking to one another
function Flowers(x,y){

    this.x=x;
    this.y=y;
    this.stemX=width*0.4;
    this.stemX2=width*0.45;
    this.stemY1=height*0.75;
    this.stemY2=height*0.5;
    this.handX=width*0.35;
    this.handY=height*0.75;
    this.handX2=width*0.4;
    // translation parameters
    this.timer3=0;
    this.flowPos=0;
    this.flowWait=60;

    this.flowPtr=0;
    this.SeqID3=0;

    this.flowSeq3 = [
            [[0,0.5], [1,0.5], [0,1], [3,1]],
            [[3,0.5], [0,0.5], [3,1]],
            [[1,1], [2,1], [1,1]],
            [[0,4]]
];
}
Flowers.prototype.display= function(){

    this.newFlowermvt();

    push();

    // stroke(0);
    translate(this.x, this.y);
    // line(this.stemX,this.stemY1,this.stemX,this.stemY2);

    if (this.flowPos === 0) {
        this.mvt_stem();
        this.mvt_petals();
        this.mvt_middle();
        this.mvt_Hand1();
        this.mvt_Fingers1();
    } else if (this.flowPos === 1) {
        this.mvt_stem2();
        this.mvt_petals2();
        this.mvt_middle2();
        this.mvt_Hand2();
        this.mvt_Fingers2();
    } else if (this.flowPos === 2) {
        this.mvt_stem();
        this.mvt_petals();
        this.mvt_middle();
        this.mvt_Hand1();
        this.mvt_Fingers1();

    } else if (this.flowPos === 3) {
        this.mvt_stem2();
        this.mvt_petals2();
        this.mvt_middle2();
        this.mvt_Hand2();
        this.mvt_Fingers2();
    }

    pop();

};

Flowers.prototype.newFlowermvt= function(){

    this.timer3++;

    if (this.timer3 >= this.flowWait) {
        this.flowPtr++;

        if (this.flowPtr>=this.flowSeq3[this.SeqID3].length) {
            this.SeqID3= floor( random(this.flowSeq3.length));
            this.flowPtr=0;
        }

        this.flowPos= this.flowSeq3[this.SeqID3][this.flowPtr][0];
        this.flowWait= this.flowSeq3[this.SeqID3][this.flowPtr][1] * frameRate();

        this.timer3=0;
    }

};

Flowers.prototype.mvt_stem= function(){
    // stem position 1
    stroke(0);
    line(this.stemX,this.stemY1,this.stemX,this.stemY2);
};

Flowers.prototype.mvt_stem2= function(){
    // stem position 2
    stroke(0);
    line(this.stemX2,this.stemY1,this.stemX2,this.stemY2);

};

Flowers.prototype.mvt_petals= function(){

    // petal one
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.42,height*0.46,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal two
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.38,height*0.46,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal three
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.38,height*0.5325,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal four
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.42,height*0.5325,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal five
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.4,height*0.45,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal six
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.4,height*0.55,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal seven
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.375,height*0.5,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal eight
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.425,height*0.5,(width*0.3)*0.1,(width*0.3)*0.1);
};

Flowers.prototype.mvt_petals2= function(){

    // petal one
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.47,height*0.46,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal two
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.43,height*0.46,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal three
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.43,height*0.5325,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal four
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.47,height*0.5325,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal five
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.45,height*0.45,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal six
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.45,height*0.55,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal seven
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.425,height*0.5,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal eight
    stroke(0);
    fill(246,192,235);
    ellipse(width*0.475,height*0.5,(width*0.3)*0.1,(width*0.3)*0.1);


};

Flowers.prototype.mvt_middle= function(){
    // flower middle pos 1
    fill(255,255,0);
    ellipse(width*0.4,height*0.5,(width*0.3)*0.1,(width*0.3)*0.1);
};

Flowers.prototype.mvt_middle2= function(){
    // flower middle pos 2
    fill(255,255,0);
    ellipse(this.stemX2,height*0.5,(width*0.3)*0.1,(width*0.3)*0.1);
};


Flowers.prototype.mvt_Hand1= function(){

    // hand
    noStroke();
    fill(255,255,0);
    ellipse(this.handX,this.handY,((width*0.3)*0.5),((width*0.3)*0.35));

};

Flowers.prototype.mvt_Hand2= function(){

    // hand
    noStroke();
    fill(255,255,0);
    ellipse(this.handX2,this.handY,((width*0.3)*0.5),((width*0.3)*0.35));

};

Flowers.prototype.mvt_Fingers1= function(){
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

Flowers.prototype.mvt_Fingers2= function(){
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
