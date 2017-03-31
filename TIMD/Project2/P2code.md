float a;                 // Angle of rotation
float offset = PI/24.0;  // Angle offset between boxes
int num = 24;            // Number of boxes
import processing.sound;
SoundFile file;
float b = 0.0;
float s = 0.0;

void setup() {
  //size(640, 360, P3D);
  fullScreen(P3D);
  noStroke();
  frameRate(30);
 file = new SoundFile(this, "chimes.wav");
 file.play();
}


void draw() {

  float x;
  float y;

  background(255);



 for (int i=0; i < 50; i++){


    x = (i+1) * (width / 5) - (width/5/2);
    y = ((i % 2)+1) * (height / 2 / 2);

    pushMatrix();
    translate(x,y);
    display();
    popMatrix();

    if(mousePressed){
      x= (i+2) * (width /2) - (width/2/2);
         rotateY(a + offset*i);
    }
  }

 a += 0.01;

}

 void display(){


 for(int i = 0; i < num; i++) {

    int s = second();
    float boxSize=s;
    float blue = map(i, 0, num-1, 100, 241);
    pushMatrix();
    stroke(0);
    noFill();
    //rotateY(a + offset*i);
    rotateX(a/2 + offset*i);
    box(170+boxSize++);
    popMatrix();
  }


 }
