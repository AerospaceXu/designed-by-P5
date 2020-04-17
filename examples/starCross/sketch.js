let stars = []

const wid = document.body.offsetWidth
const heig = document.body.offsetHeight

function setup() {
	createCanvas(wid, heig)
	let starsNumber = parseInt((width * height) / 6500)
	for (let i = 0; i < starsNumber; i++) {
		const temp = new Star()
		stars.push(temp)
	}
}

function draw() {
	translate(wid / 2, heig / 2)
	background('#000')
	for (let i = 0; i < stars.length; i++) {
		stars[i].update(15)
		stars[i].show()
	}
}
