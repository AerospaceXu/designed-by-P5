function setup() {
  const width = document.body.offsetWidth;
  const height = document.body.offsetHeight;
  createCanvas(width, height);
  angleMode(DEGREES);
}

function draw() {
  background("#000");
  // 会绕着圆点旋转，所以必须把原点放到画面正中心
  translate(200, 200);
  rotate(-90);

  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(4)
  noFill();
  // ellipse(0, 0, 300, 300);

  stroke(255, 100, 150);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  stroke(150, 255, 150);
  let mintueAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, mintueAngle);

  stroke(150, 150, 250);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  // 开启指针
  // push();
  // rotate(secondAngle);
  // strokeWeight(2);
  // stroke(255, 100, 150);
  // line(0, 0, 100, 0);
  // pop();

  // push();
  // rotate(mintueAngle);
  // strokeWeight(4);
  // stroke(150, 255, 150);
  // line(0, 0, 100, 0);
  // pop();

  // push();
  // rotate(hourAngle);
  // strokeWeight(8);
  // stroke(150, 150, 250);
  // line(0, 0, 40, 0);
  // pop();

  // stroke(255);
  // strokeWeight(8);
  // point(0, 0);
}