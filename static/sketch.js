let state = 0;

function setup() {
    createCanvas(100, 100);
    state = 0;
}

function draw() {
    background(220);
    textSize(60);
    textAlign(CENTER);
    text(state, 50, 70);
}

function keyPressed(){
    console.log(state);
}
