//Code Snippet from Derrick McMillen https://replit.com/@demcrepl/p5js-Spirals?v=1

let backgroundcol;
let length = 100;

function setup() {
    backgroundcol = color(245, 224, 66);
    createCanvas(600, 600);
    stroke(245, 66, 173);
    noFill();
    background(backgroundcol);
}

function draw() {
    background(backgroundcol);
    if (mouseIsPressed) {
        stroke('red');
    } else {
        stroke('green');
    }
    ellipse(20, 30, mouseX, mouseY);
}
