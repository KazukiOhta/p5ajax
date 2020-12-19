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

    var json = {state: state};
    var newstate;

    var post = $.ajax({
        type: "POST",
        url: "/delta",
        data: json,
        async: false,
        dataType: "json",
        success: function(response) {
            console.log(response);
            newstate = response.state;
        }, 
        error: function(error) {
            console.log("Error occurred in post in keyPressed().");
            console.log(error);
        }
    })

    state = newstate;
}
