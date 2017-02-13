// TIMD Project 1 Class sketch file

function Animal(x,y){

    this.x=x;
    this.y=y;
    this.speed=1;
    // this.lifespan=255;
}

Animal.prototype.display= function(){

    image(animals,this.x,this.y);


};
Animal.prototype.move= function() {

    this.y=this.y*this.speed;

    if (this.y>800) {
        this.speed=0.8;
        this.y=this.y*this.speed;
    }



};
