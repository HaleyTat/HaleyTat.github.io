// final project

//description: two classes of side profiles talking to one another

function PersonOne(x,y){

    this.x=width*0.25;
    this.y=height*0.4;
    this.sizeHead= (width*0.2);
    // eye parameters
    this.eyeX1=this.x*1.05;
    this.eyeY1=this.x*0.75;
    this.eyeSpace2=this.eyeX1*0.15;
    this.eyeSize1=(width*0.3)*0.05;
    // mouth parameters
    this.mouth1=PI/4;
    this.mouthX1=this.x*1.15;
    this.mouthY1=this.x*1.05;
    this.mouthSize1=(width*0.3)*0.08;
    this.smirkX=this.x*0.95;
    this.smirkY1=this.x*0.8;
    this.smirkCurve=this.x*1.075;
    // unibrow parameters
    this.uniBrowX1=(width*0.25)*1.1;
    this.uniBrowY1=(this.x*0.8);
    this.unibrowCurve=(this.x*0.6575);
    // face translations
    this.facePos2=5;
    this.timer2=0;
    this.faceWait2=60;
    this.facePtr2=5;
    this.SeqID2=0;

    this.facialSeq2= [ [ [5,0.5], [6,0.5], [5,1], [6,1], [8,1],
                            [7,1], [8,0.5], [7,0.5],
                                [5,4],[8,4]]
];
}

PersonOne.prototype.display= function(){

    this.newFaceMvt2();

    push();
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
    // noStroke();
    // fill(0);
    // ellipse(this.mouthX1,this.mouthY1,this.mouthSize1,this.mouthSize1);
    // closed mouth
    // noFill();
    // stroke(0);
    // curve(this.smirkX,this.smirkY1,this.smirkX*1.1,this.x*1.05,this.smirkX*1.2,this.x*1.125,this.smirkX*1.3,this.smirkCurve);

    // unibrow for now
    noFill();
    stroke(0);
    curve(this.uniBrowX1*0.8,this.uniBrowY1,this.uniBrowX1*0.85,this.unibrowCurve,this.uniBrowX1*1.15,this.unibrowCurve,this.uniBrowX1*1.3,this.uniBrowY1);

    // line test
    // stroke(0);
    // line(this.smirkX,this.smirkY1,this.smirkX*1.3,this.smirkCurve);
// };

    if (this.facePos2===5) {
        this.mvt_openMouth1();
    } else if (this.facePos2===6) {
        this.mvt_mouthClosed1();
    } else if (this.facePos2===7) {
        this.mvt_openMouth1();
    } else if (this.facePos2===8) {
        this.mvt_mouthClosed1();
    }

    pop();

PersonOne.prototype.newFaceMvt2= function(){
    this.timer2++;

    if (this.timer2>=this.faceWait2) {
        this.facePtr2++;
        if (this.facePtr2>=this.faceSeq2[this.SeqID2].length) {
            this.seqID= floor(random(this.facialSeq.length));
            this.facePtr2=5;
        }

        this.facePos2= this.facialSeq2 [this.SeqID2] [this.facePtr2] [0];
        this.faceWait2= this.facialSeq2 [this.SeqID2] [this.facePtr2] [1] * frameRate();

        this.timer2=0;
    }


};
// PersonOne.prototype.mvt_unibrow= function(){
//
//     // unibrow
//     noFill();
//     stroke(0);
//     curve(this.uniBrowX1,this.eyeY1,this.uniBrowX1*0.25,this.eyeY1,this.uniBrowX1*0.3,this.eyeY1,this.uniBrowX1*-0.5,this.eyeY1);
//

PersonOne.prototype.mvt_openMouth1= function(){
    // open mouth
    noStroke();
    fill(0);
    ellipse(this.mouthX1,this.mouthY1,this.mouthSize1,this.mouthSize1);

};

PersonOne.prototype.mvt_mouthClosed1= function(){
    // closed mouth
    noFill();
    stroke(0);
    curve(this.smirkX,this.smirkY1,this.smirkX*1.1,this.x*1.05,this.smirkX*1.2,this.x*1.125,this.smirkX*1.3,this.smirkCurve);

};

};
