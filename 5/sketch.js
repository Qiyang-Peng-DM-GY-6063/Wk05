// TODO: global state variables

let clickCounter;
let cc;

function setup() {
  createCanvas(windowWidth, windowHeight);
  clickCounter = 0;
  md = 0;
}

function draw() {
  background(20);
  ellipse(width / 2, height / 2, md);
}

function mouseReleased() {
  clickCounter += 1;
  md = map(clickCounter,0,10,200,10);
  print("Clickcounter "+clickCounter,"md " +md);
} 
