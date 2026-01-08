let colors = ['#e6194b', '#3cb44b', '#ffe119', '#4363d8', '#f58231', '#911eb4', '#46f0f0', '#f032e6', '#bcf60c', '#fabebe', '#008080', '#e6beff', '#9a6324', '#fffac8', '#800000', '#aaffc3', '#808000', '#ffd8b1', '#000075', '#808080', '#ffffff', '#000000'];

function setup() {
  createCanvas(windowWidth-20, windowHeight-20);
}

function draw() {
  background(colors[19]);
  fill(colors[0])
  stroke(colors[21])
  circle(200,300,80)  // and ellipse
  textSize(50)
  text('what I want',100,200)
  rect(100,200,50,100) // and square
  stroke(colors[8])
  // noFill()
  triangle(50,100,100,200,300,700)
  arc(600,500,50,50,0,TWO_PI-QUARTER_PI) // HALF_PI, QUARTER_PI, TWO_PI
  
  beginShape()
  curveVertex(20,30)
  curveVertex(50,80)
  curveVertex(mouseX,mouseY)
  curveVertex(600,500)
  curveVertex(300,400)
  endShape(CLOSE)
}
