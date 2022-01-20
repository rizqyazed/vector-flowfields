function Particle() {

    this.pos = createVector(random(50, width - 50), random(50, height - 50));
    // this.pos = createVector(random(width), random(height));
    this.vel = p5.Vector.random2D();
    this.acc = createVector(0, 0);
    this.mass = 5;
    this.maxSpeed = 1;

    this.update = function() {
        this.vel.add(this.acc)
        this.vel.limit(this.maxSpeed);
        this.pos.add(this.vel)
        this.acc.mult(0);
    }

    this.show = function() {
        stroke(0, 5);
        strokeWeight(1);
        // fill(0 , 5);
        // ellipse(this.pos.x, this.pos.y, 0.5);
        point(this.pos.x, this.pos.y);
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }

    this.follow = function(v) {
        var x = floor(this.pos.x / scl);
        var y = floor(this.pos.y / scl);
        var i = x + y * cols;
        this.applyForce(v[i]);
    }

    this.edges = function() {
        if (this.pos.x < 50) this.pos.x = width - 50;
        if (this.pos.x > width - 50) this.pos.x = 50;
        if (this.pos.y < 50) this.pos.y = height - 50;
        if (this.pos.y > height - 50) this.pos.y = 50;
    }
}