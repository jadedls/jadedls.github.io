class Pipe {
    constructor(img) {
        this.img = img
        this.x = 500
        this.y = random(100, 200)
        this.width = img.width
        this.height = img.height
        this.scroll = -1
        this.gap = random(90, 110)
        this.scored = false
    }
    display() {
        image(this.img, this.x, this.y, this.width / 2, this.height)
        push()
        scale(1, -1)
        image(this.img, this.x, -this.y + this.gap, this.width / 2, this.height)
        pop()
    }

    update() {
        this.x += this.scroll
    }

}