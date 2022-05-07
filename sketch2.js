let params = {
    angleInc: 10,
    numberOfCorners: 4,
    numberOfShapes: 1,
    hue: 0,
    saturation: 100,
    brightness: 100,
    alpha: 0.1,
    radius: 10
}

let shapes = []

function setup() {
    createCanvas(600, 600)
    // angleMode(DEGREES)
    rectMode(CENTER)
    colorMode(HSB)

    let gui = new dat.GUI()
    gui.add(params, "angleInc", 0, 30, 1)
    gui.add(params, "numberOfCorners", 3, 30, 1)
    gui.add(params, "numberOfShapes", 0, 100, 1)
    gui.add(params, "radius", 5, width / 2, 10)
    gui.add(params, "hue", 0, 360, 1)
    gui.add(params, "saturation", 0, 100, 1)
    gui.add(params, "brightness", 0, 100, 1)
    gui.add(params, "alpha", 0, 1, 0.01)

}

// function createShapes() {
//     for (let i = 0; i < params.numberOfShapes; i++) {
//         shapes.push(1)
//     }
// }

function polygon(x, y, radius, npoints) {
    let angle = TWO_PI / npoints;
    fill(params.hue, params.saturation, params.brightness, params.alpha)
    beginShape();
    for (let a = 0; a < TWO_PI; a += angle) {
        let sx = x + cos(a) * radius;
        let sy = y + sin(a) * radius;
        vertex(sx, sy);
    }
    endShape(CLOSE);
}

function mouseClicked() {
    redraw()
}


function draw() {
    background(220)
    translate(width / 2, height / 2)

    for (let i = 0; i < params.numberOfShapes; i++) {
        rotate(i * params.angleInc / (100 * TWO_PI))
        polygon(0, 0, params.radius + 10 * i, params.numberOfCorners)
    }

}
