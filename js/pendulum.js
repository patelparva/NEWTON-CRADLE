class Pendulum {
  constructor(x, y, color) {
    var options = {
      restitution: 1,
      friction: 1.0,
      frictionAir: 0,
      slop: 1,
      inertia: Infinity,
    };
    this.body = Bodies.circle(x, y, 30, options);
    this.x = x;
    this.y = y;
    this.color = color;
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    stroke(255)
    strokeWeight(3)
    fill(this.color);
    ellipse(0, 0, 60, 60);
    pop();
  }
}
