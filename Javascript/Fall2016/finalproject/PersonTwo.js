function PersonTwo(x,y) {

    this.x = x;
    this.y = y;
    this.size = width * 0.3;
    // eye parameters
    this.eyeHght= height * -0.04;
    this.eyeX=this.size*-0.35;
    this.eyeY=this.size*-0.15;
    this.eyeHeight1=height * 0.07;
    this.eyeSize2=this.size*0.1;
    this.eyeSpace = this.size*0.3;
    this.eyeCurve=this.eyeHght*0.103;
    this.eyeClosed11=this.size*-0.5;
    this.eyeClosed12=this.size*-0.2;
    // mouth parameters
    this.mouthSize2=this.size*0.15;
    this.mouth2=PI/4;
    // other parameters
    this.facePos = 0;
    this.faceWait = 60;
    this.timer = 0;

    this.facePtr = 0;
    this.seqID = 0;

    this.facialSeq = [
        [[0, 0.5], [1,0.5], [0, 1], [3, 1]],
        [[3, 0.5], [0,0.5], [3, 1]],
        [[1, 1], [2, 1], [1, 1]],
        [[0, 4]]
];

}

PersonTwo.prototype.picture= function(){
    this.newFaceMvt();

    push();
    // head
    noStroke();
    fill(246,192,235);
    translate(this.x, this.y);
    ellipse(0,0,this.size,this.size*1.3);

    // hair
    noStroke();
    fill(250,51,224);
    ellipse(this.size*-0.2,this.size*-0.6,this.size*0.75,this.size*0.45);
    // eyebrow1
    noFill();
    stroke(0);
    curve(this.eyeClosed11,this.eyeHeight1,this.size*-0.4,(height*-0.14),this.size*-0.3,(height*-0.14),this.eyeClosed12,this.eyeHeight1);
    // eyebrow2
    noFill();
    stroke(0);
    curve(this.eyeClosed11+this.eyeSpace,this.eyeHeight1,this.size*-0.4+this.eyeSpace,(height*-0.15),this.size*-0.3+this.eyeSpace,(height*-0.15),this.eyeClosed12+this.eyeSpace,this.eyeHeight1);


    if (this.facePos === 0) {
        this.mvt_openEye1();
        this.mvt_closedEye2();
        this.mvt_openMouth2();
        this.newNose2Mvt();
    } else if (this.facePos === 1) {
        // this.mvt_openEye1();
        // this.mvt_closedEye2();
        // this.mvt_openMouth2();
        // this.newNoseMvt();
        this.mvt_openEye1();
        this.mvt_openEye2();
        this.mvt_openMouth2();
        this.newNoseMvt();

    } else if (this.facePos === 2) {
        this.mvt_closedEye1();
        this.mvt_closedEye2();
        this.mvt_pursedLip();
        this.newNose2Mvt();
    } else if (this.facePos === 3) {
        this.mvt_openEye1();
        this.mvt_openEye2();
        this.mvt_pursedLip();
        this.newNoseMvt();
    }

    pop();
};

PersonTwo.prototype.mvt_openEye1 = function(){
    // open eye 1
    noStroke();
    fill(0);
    ellipse(this.eyeX,this.eyeY,this.eyeSize2,this.eyeSize2*1.6);
};

PersonTwo.prototype.mvt_openEye2 = function(){
    // open eye 2
    noStroke();
    fill(0);
    ellipse(this.eyeX+this.eyeSpace, this.eyeY, this.eyeSize2,this.eyeSize2*1.6);
};

PersonTwo.prototype.mvt_closedEye1 = function(){
// closed eye 1
    noFill();
    stroke(0);
    curve(this.eyeClosed11,this.eyeY,this.size*-0.4,this.eyeHght,this.size*-0.3,this.eyeHght,this.eyeClosed12,this.eyeY);
};

PersonTwo.prototype.mvt_closedEye2 = function(){
    // closed eye 2
    noFill();
    stroke(0);
    curve(this.eyeClosed11+this.eyeSpace,this.eyeY,this.size*-0.4+this.eyeSpace,this.eyeHght,this.size*-0.3+this.eyeSpace,this.eyeHght,this.eyeClosed12+this.eyeSpace,this.eyeY);
};


PersonTwo.prototype.mvt_pursedLip = function(){
    // pursed Lip
    stroke(0);
    line(this.size*-0.275,height*0.2,this.size*-0.1,height*0.2);

};

PersonTwo.prototype.mvt_openMouth2 = function(){
    // mouth
    stroke(255,0,255);
    fill(255,0,255);
    curve(this.size*-0.4,height*0.05,this.size*-0.3,height*0.2,this.size*-0.1,height*0.2,this.size*-0.05,height*0.0025);
};




PersonTwo.prototype.newFaceMvt = function () {
    this.timer++;
    if ( this.timer >= this.faceWait) {
        this.facePtr++;

        if (this.facePtr >= this.facialSeq[this.seqID].length) {
            this.seqID = floor( random( this.facialSeq.length ) );
            this.facePtr = 0;
        }

        this.facePos = this.facialSeq[this.seqID][this.facePtr][0];
        this.faceWait = this.facialSeq[this.seqID][this.facePtr][1] * frameRate();

        this.timer = 0;
    }
};

PersonTwo.prototype.newNoseMvt = function () {
    // nose
    noStroke();
    fill(250,51,224);
    triangle(this.size*-0.25,height*0.05,this.size*-0.2,0,this.size*-0.15,height*0.05);
};
        // this.facePos = floor( random( 4 ) );
        // this.faceWait = floor( random( 20, 120 ) );
        // this.timer = 0;

PersonTwo.prototype.newNose2Mvt = function () {
    // nose
    noStroke();
    fill(250,51,224);
    triangle(this.size*-0.275,height*0.075,this.size*-0.225,height*0.025,this.size*-0.175,height*0.075);
};
