// TIMD Project 1 Class sketch file

function Head(x,y){

    this.x=x;
    this.y=y;
    // this.earX;
    // this.earY;
    // this.ear2X;
    // this.ear2Y;
    this.speed=1;
}

Head.prototype.display= function(){

    image(img,this.x,this.y,swidth=img.width,sheight=img.height);

    noStroke();
    fill(179, 102, 255);
    ellipse(this.x,this.y,30,40);
    noStroke();
    fill(230, 204, 255);
    ellipse(this.x,this.y,5,10);


};

Head.prototype.move= function() {

    this.y=this.y+this.speed;

    if (this.y>height) {
        this.y=this.y*0.2;
    }

};
