
let colorList = ['#73a8b2', "#a08a8c", '#eabc68', '#f6ef7c']

let n = Math.random()
let rand = Math.floor(n * colorList.length);

function setup() {
    createCanvas(windowWidth, windowHeight);
    //add code!

}

function draw() {
   
    circle(mouseX,mouseY,400);
    fill(colorList[rand])
    
    
    noStroke();

    if(mouseIsPressed){
        fill("white");
        
    }


}