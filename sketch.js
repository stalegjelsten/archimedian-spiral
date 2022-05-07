let i = 0;
let saved = false;
let points = [];
let revs = 0;
let t = 0;
let angleDelta = 118;

function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES)
  frameRate(60)
  background(220);
  colorMode(HSB)

}

function rotated_squares() {
  if (10 * i < 0.8 * width) {
    fill((i * 10) % 255, 210, 150, 0.1);

    stroke(0)
    rectMode(CENTER)
    translate(width / 2, height / 2)
    rotate(- 5 * i)
    rect(0, 0, 0.8 * width - 10 * i)

    i++;

  }
  else {
    if (saved == false) {
      saveCanvas("image", "png")
      saved = true;
    }
  }

}

function spiral() {
  noFill()
  let dx = i * cos(i)
  let dy = i * sin(i)
  translate(width / 2 + dx, height / 2 + dy);
  rotate(i);
  // rect(0, 0, 50, 50)
  point(0, 0)
  i++;
}

function spiral_with_vertices() {
  background(220);
  translate(width / 2, height / 2);
  let point = createVector(t * cos(i), t * sin(i));
  points.push(point);
  stroke(0);
  noFill();
  strokeWeight(2);
  beginShape();
  for (let j = 0; j < points.length; j++) {
    vertex(points[j].x, points[j].y);
  }
  endShape();
  i = i + angleDelta; // change value to ~ 88 to get square spiral

  if (t == 500) {
    points = [];
    revs++;
    i = 0;
    t = 0;
    angleDelta = 360 / (2 + revs) - 2;
  }

  t++;

  if (revs > 10) { noLoop() }
}

function draw() {
  // rotated_squares()
  spiral_with_vertices()


}

