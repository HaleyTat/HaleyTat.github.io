//  Pacman class. Consturctor Method

function Pacman(x,y,size){

    this.xPos=x;
    this.yPos=y;
    this.speed=1;
    this.dir=1;
    this.size=size;
    this.eyePos=this.size/4;
    this.eyeSize=this.size*0.1;
    this.elapsedTime=0;
    this.finishTime=240;
}

Pacman.prototype.display= function(){

    push();


    translate(this.xPos,this.yPos);
    fill(255,255,0);
    arc(0,0,this.size,this.size,PI/4,-PI/4,PIE);
    fill(0);
    ellipse(0,-this.eyePos,this.eyeSize,this.eyeSize);


    pop();
};


Pacman.prototype.move= function(){
    var boundaryAmt = (this.size/2) + this.speed;

    this.timer();

    text(this.dir, 20, 20);
    text(this.speed, 20, 30);
    text(this.xPos, 20, 40);
    text(this.yPos, 20, 50);

    // north
    if (this.dir===0 && this.yPos>=boundaryAmt) {
        this.yPos=this.yPos-this.speed;
        // East
    } else if (this.dir===1 && this.xPos<=width-boundaryAmt) {
        this.xPos=this.xPos+this.speed;

        // South
    } else if (this.dir===2 && this.yPos<=height-boundaryAmt) {
        this.yPos=this.yPos+this.speed;

        // West
    } else if (this.dir===3 && this.xPos>=boundaryAmt) {
        this.xPos=this.xPos-this.speed;
    }

};

Pacman.prototype.timer= function() {
    var tempdir;
    this.elapsedTime++;

    if (this.elapsedTime>=this.finishTime) {
    //     change direction
        do {
            tempdir=floor(random(0,4));
        } while ( tempdir==this.dir );
        this.dir=tempdir;

    //     reset timer
    this.elapsedTime=0;
    //     new random time
    this.finishTime=floor(random(30,6*frameRate()));
    }



};
