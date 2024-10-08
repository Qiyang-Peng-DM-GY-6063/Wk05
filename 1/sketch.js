let randomColor;

// TODO: use mouseX and mouseY
function setup() {
  createCanvas(windowWidth, windowHeight);
  let x = 100;
  let y = 200;
  // rect(mouseX, mouseY, 100);
  randomColor = color(255, 20, 120);
}

function draw() {

  background(randomColor);

  let mv = map(mouseX,0, width, 32, 300);
  noStroke();
  fill(255);
  rect(mouseX-mv/2, mouseY-mv/2 , mv);

}

function mouseClicked(){
  randomColor = color(random(255), random(255), random(255));
}
