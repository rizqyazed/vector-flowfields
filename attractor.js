function Attractor(x, y, m) {

    this.pos = createVector(x, y);
    this.mass = m;

    this.attract = function(p) {
        print(p);
        let force = p5.Vector.sub(this.pos, p.pos);
        let distSq = constrain(force.magSq(), 25, 2500);
        let G = 100;
        let strength = G * (this.mass * p.mass) / distSq;
        force.setMag(strength);
        p.applyForce(force);
        print("HEL")
    }

    this.show = function() {
        fill('red');
        ellipse(this.pos.x, this.pos.y, 10);
    }
}