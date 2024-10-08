// TODO: time with map() and mod

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(20);

  let P = 2000;

  let counter = millis()%P;
  let md = map(counter,0,P,20,300);
  let mr = map(counter, 0, P, 100, 255);

  fill(mr,50,50);

  ellipse(width / 2, height / 2, md);

}
