let array = [];
let backgroundColor = (80, 189, 206);
let noiseOffset =  0.0;
let strokeWidth = 5;

function setup() {
  createCanvas(600, 600);
  background(backgroundColor);
  drawGrid()


}

function draw() {

  if (mouseIsPressed) {
    backgroundColor -= 5;
    background(backgroundColor);
    // line(mouseX, mouseY, pmouseX, pmouseY);
    array.push([mouseX, mouseY]);
    strokeWeight(strokeWidth);
    noFill();
    noiseOffset += 0.07;
    strokeWidth =  noise(noiseOffset) * 30;

    // stroke(map(mouseX, 0, 250, 0, 300, true));

    beginShape();
    for (let i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
    endShape();
  }

 if (key === 'c') {
   // clear the image
   clear();
 }

}

function keyTyped() {

  if (key === 's') {
    // save this image
    saveCanvas('fileName', 'png');
  } else if (key === 'd') {
    // display image
    background(255);

    beginShape();
    for (let i = 0; i < array.length; i++) {
      // line(array[i][0], array[i][1], array[i + 1][0], array[i + 1][1]);
      curveVertex(array[i][0], array[i][1])
    }
endShape();

  }

  return false;

}

function mousePressed() {
  array = [];
  backgroundColor = (80, 189, 206);
}

function drawGrid(){
  numCells = 20;

  for (let i = 0; i <= width; i += width / numCells){
    rect(i,  300, width / numCells, width / numCells)
  }
}
