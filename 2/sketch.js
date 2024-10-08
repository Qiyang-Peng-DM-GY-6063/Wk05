// TODO: mouse hover effect

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
}

function draw() {
  let rx = 100;
  let ry = 50;
  let rw = 400;
  let rh = 200;

  overLapRect(rx,ry,rw,rh,"deeppink");
  overLapRect(700,700,50,50,"blue");


  let cx = 200;
  let cy = 500;
  let cr = 150;

  let distMouse = dist(mouseX, mouseY, cx, cy);

  push();
  if (distMouse < cr) {
    fill("deeppink");
  } else {
    fill(255);
  }
  ellipse(cx, cy, 2 * cr);
  pop();
}

