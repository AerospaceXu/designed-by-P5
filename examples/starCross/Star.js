class Star {
	constructor() {
		this.x = random(-width / 2, width / 2)
		this.y = random(-width / 2, width / 2)
		this.z = random(0, width)

		this.r = 25 + random(-2, 3)
		this.isMiss = false
		this.sx
		this.sy
	}

	update(speed) {
		this.z -= speed
		if (this.z <= 1) {
			this.x = random(-width / 2, width / 2)
			this.y = random(-width / 2, width / 2)
			this.z = width
			this.isMiss = false
		}
	}

	show() {
		fill(255)
		noStroke()
		const nowX = map(this.x / this.z, -1, 1, -width / 2, width / 2)
		const nowY = map(this.y / this.z, -1, 1, -width / 2, width / 2)
		if (!this.isMiss) {
			this.sx = nowX
			this.sy = nowY
			this.isMiss = true
		}
		const nowR = map(this.z, 0, width, this.r, 0)
		ellipse(nowX, nowY, nowR, nowR)

		stroke(255)
		triangle(nowX + nowR / 3, nowY + nowR / 3, nowX - nowR / 3, nowY - nowR / 3, this.sx, this.sy)
	}
}
