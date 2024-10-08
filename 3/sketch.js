// TODO: animation across the screen
//       wrap around
//       bounce

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);
  x=0;
  for (let x = 0; x < width; x += 2) {
    ellipse(x, height / 2, 100);
  }
}

function draw() {
  background(20);
  let xpos = 10*frameCount%width;
  ellipse(xpos,height/2,100);
  x=x+10;

  // if(x>width){
  //   x=0;
  // }
}
