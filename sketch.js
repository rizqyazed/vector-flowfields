let wOff = 25;
let hOff = 25;
let scl = 25;
let cols, rows;
let particlesPerIteration = 1000;
let inc = 0.07;
let zoff = 0;
let particles = [];
let fieldflow;
let saveBut;
let attractor;

function vectorField() {
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0
    for (var x = 0; x < cols; x++) {
      var i = x + y * cols
      var r = noise(xoff, yoff, zoff) *  TWO_PI;
      var v = p5.Vector.fromAngle(r);
      v.setMag(5);
      fieldflow[i] = v;
      xoff += inc;
      // stroke(0, 100);
      // strokeWeight(1);
      // push();
      // translate(x * scl, y* scl);
      // rotate(v.heading());
      // line(0, 0, scl, 0);
      // pop();
    }
    yoff += inc;

    // Time Dimesion
    zoff += 0.00003;
  }
}

function setup() {

  // Graphical Setup
  createCanvas(windowWidth - wOff, windowHeight - hOff);
  smooth(8);
  colorMode(RGB);
  background(240);

  // saveBut = createButton('Save Canvas'); 
  // saveBut.mousePressed(saveCanvas(c, "Canvas", "jpg"));
  
  cols = floor(width/ scl);
  rows = floor(height / scl);

  // Creates Vector Field
  fieldflow = new Array(cols * rows);
  // Paste VectorField function here for static fields
  // vectorField();

  for(var i = 0; i < particlesPerIteration; i++) {
    particles[i] = new Particle();
  }

  // attractor1 = new Attractor(random(width), random(height), 25);
  // attractor2 = new Attractor(random(width), random(height), 50);
  // attractor3 = new Attractor(random(width), random(height), 100);
  // attractor1.show();
  // attractor2.show();
}

function draw() {
  
  vectorField();
  // background("#161616");
  
  for(var i = 0; i < particles.length; i++) {
    particles[i].follow(fieldflow);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
}
