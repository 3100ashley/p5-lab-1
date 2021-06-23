let img;
function preload() {
  img = loadImage('./assests/beach.jpeg');
}

function setup() {
  createCanvas(displayWidth, displayHeight);
  img.resize(windowWidth, windowHeight);
}

function draw() {
  let fill_color = img.get(mouseX, mouseY);
  
  circle(mouseX,mouseY,400);
  fill("#73a8b2");
  noStroke();

  if(mouseIsPressed){
    fill(fill_color);
      
  }


}



