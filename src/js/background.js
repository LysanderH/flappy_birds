export const background = {
    "game": null,
    init(game) {
        this.game = game;
    },
    update() {
        this.game.c.drawImage(this.game.sprite.spriteImg, 0, 0, 288, 511, 0, 0, this.game.canvas.width, this.game.canvas.height)
    },
}