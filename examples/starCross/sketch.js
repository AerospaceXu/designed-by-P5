let stars = [];

let wid, heig;

function setup() {
  wid = document.body.offsetWidth;
  heig = document.body.offsetHeight;
  createCanvas(wid, heig);
  let starsNumber = parseInt(width * height / 6500)
  for (let i = 0; i < starsNumber; i++) {
    let temp = new Star();
    stars.push(temp);
  }
}

function draw() {
  translate(wid / 2, heig / 2);
  background("#000");
  for (let i = 0; i < stars.length; i++) {
    stars[i].update(15);
    stars[i].show();
  }
}