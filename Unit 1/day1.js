function setup() {
  createCanvas(800, 600) // calling a function
  textSize(48)
  ellipseMode(RADIUS)
}

function draw() {
  background(237, 240, 146)
  fill(184, 51, 232, 32)
  // stroke(59, 2, 79)
  noStroke()
  // noFill()
  circle(400,300,mouseX)
  fill(255, 107, 218, 32)
  square(500,400,mouseY)
  ellipse(100,100,mouseX,mouseY)
  //rect
  triangle(120,240,300,400,mouseX,mouseY)
  fill("black")
  text("editor.p5js.org",width/2,height/2)
}
