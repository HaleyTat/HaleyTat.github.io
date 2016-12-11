// final project

//description: two classes of side profiles talking to one another
function Flowers(){

    this.stemX=width*0.4;
    this.stemY1=height*0.75;
    this.stemY2=height*0.5;
}
Flowers.prototype.display= function(){
    stroke(0);
    line(this.stemX,this.stemY1,this.stemX,this.stemY2);
    // petal one
    fill(246,192,235);
    ellipse(width*0.42,height*0.46,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal two
    fill(246,192,235);
    ellipse(width*0.38,height*0.46,(width*0.3)*0.1,(width*0.3)*0.1);

    // petal three
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

    // flower middle
    fill(255,255,0);
    ellipse(width*0.4,height*0.5,(width*0.3)*0.1,(width*0.3)*0.1);

};
