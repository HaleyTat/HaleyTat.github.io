function PersonTwo(u,v,size2) {

    this.u=u;
    this.v=v;
    this.mouthSize2=30;
    this.mouth2=PI/4;
    this.eyeSize2=size2;
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
    ellipse(400,250,200,270);


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
    // eyebrow1
    noFill();
    stroke(0);
    curve(300,230,320,190,360,190,380,230);
    // eyebrow2
    noFill();
    stroke(0);
    curve(400,230,420,190,460,190,480,230);

    if (this.facePos === 0) {
        this.mvt_openEye1();
        this.mvt_openEye2();
        this.mvt_openMouth2();
        this.newNoseMvt();
    } else if (this.facePos === 1) {
        this.mvt_openEye1();
        this.mvt_closedEye2();
        this.mvt_openMouth2();
        this.newNose2Mvt();

    } else if (this.facePos === 2) {
        this.mvt_closedEye1();
        this.mvt_openEye2();
        this.mvt_pursedLip();
        this.newNoseMvt();
    } else if (this.facePos === 3) {
        this.mvt_closedEye1();
        this.mvt_closedEye2();
        this.mvt_pursedLip();
        this.newNose2Mvt();
    }

    fill(0);
    strokeWeight(0.1);
    text(this.facialSeq[this.seqID], 20, 20);
    text(this.seqID, 20, 40);
    text(this.facePos, 20, 60);
    pop();
};

PersonTwo.prototype.mvt_openEye1 = function(){
    // open eye 1
    noStroke();
    fill(0);
    ellipse(this.u,this.v,this.eyeSize2,35);
};

PersonTwo.prototype.mvt_openEye2 = function(){
    // open eye 2
    noStroke();
    fill(0);
    ellipse(this.u+85,this.v,this.eyeSize2,35);
};

PersonTwo.prototype.mvt_closedEye1 = function(){
// closed eye 1
    noFill();
    stroke(0);
    curve(300,200,320,250,360,250,380,200);
};

PersonTwo.prototype.mvt_closedEye2 = function(){
    // closed eye 2
    noFill();
    stroke(0);
    curve(400,200,420,250,460,250,480,200);
};


PersonTwo.prototype.mvt_pursedLip = function(){
    // pursed Lip
    stroke(0);
    line(370,350,400,350);

};

PersonTwo.prototype.mvt_openMouth2 = function(){
    // mouth
    stroke(255,0,255);
    fill(255,0,255);
    curve(340,200,370,350,420,350,440,200);
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
    triangle(365,275,377,250,389,275);
};
PersonTwo.prototype.newNose2Mvt = function () {
    // nose
    noStroke();
    fill(250,51,224);
    triangle(360,265,377,240,389,265);
};
        // this.facePos = floor( random( 4 ) );
        // this.faceWait = floor( random( 20, 120 ) );
        // this.timer = 0;
