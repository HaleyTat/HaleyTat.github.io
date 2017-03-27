import processing.sound.;
Amplitude amp;
AudioIn in;

int cols, rows;
int scle=20;
float [][] terrain;
float flying= 0;
float col= 255;
float colChange=10;


void setup(){


    fullScreen(P3D);
    int w = 800;
    int h = 800;
    cols= w/scle;
    rows= h/scle;
    terrain = new float [cols][rows];
    //initializing audio input
    amp = new Amplitude(this);
    in = new AudioIn(this, 0);
    in.start();
    amp.input(in);

}

void draw(){

    int w = 600;
    int h = 600;
    float ampValue= amp.analyze();
    ampValue = map(ampValue, 0, 1, 0, 255);

    flying -= 0.03;
    float yoffset= flying;
    for ( int y = 0; y < rows; y++){
        float xoffset= 0;
        for (int x=0; x < cols; x++){
            terrain[x][y]= map(noise(xoffset,yoffset), 0, 1, -150, 100);
            xoffset += 0.1;
        }
        yoffset += 0.1;
    }

    background(255);
    stroke(0);
    noFill();
    translate(width/2, height/2);
    rotateX(PI/6);
    translate(-w/2, -h/2);
    for ( int y = 0; y < rows-1; y++){

        beginShape(TRIANGLE_STRIP);
        for (int x=0; x < cols; x++){

            // fill();
            fill(ampValue);
            vertex(x*scle, y*scle, terrain[x][y]);
            vertex(x*scle, (y+1)*scle, terrain[x][y+1]);

        }
        endShape();
    }


}
