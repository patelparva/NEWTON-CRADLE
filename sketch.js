const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;

var pendulum1, pendulum2, pendulum3, pendulum4, pendulum5;

function setup() {
  var canvas = createCanvas(
    (window.innerWidth / 2) * 1.5,
    (window.innerHeight / 2) * 1.5
  );
  engine = Engine.create();
  world = engine.world;

  let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelatio = pixelDensity();
  let options = {
    mouse: canvasmouse,
  };
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

  pendulum1 = new Pendulum(width / 5, 120, "#000000");
  pendulum2 = new Pendulum(width / 5 + 60, 120, "#000000");
  pendulum3 = new Pendulum(width / 5 + 120, 120, "#000000");
  pendulum4 = new Pendulum(width / 5 + 180, 120, "#000000");
  pendulum5 = new Pendulum(width / 5 + 240, 120, "#000000");

  sling1 = new Sling(pendulum1.body, { x: width / 5, y: 100 });
  sling2 = new Sling(pendulum2.body, { x: width / 5 + 60, y: 100 });
  sling3 = new Sling(pendulum3.body, { x: width / 5 + 120, y: 100 });
  sling4 = new Sling(pendulum4.body, { x: width / 5 + 180, y: 100 });
  sling5 = new Sling(pendulum5.body, { x: width / 5 + 240, y: 100 });
}

function draw() {
  background(0);

  Engine.update(engine);

  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();

  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}

function mouseDragged() {
  // Matter.Body.setPosition(pendulum1.body, { x: mouseX, y: mouseY });
}
