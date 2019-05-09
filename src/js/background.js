import * as CONSTANTEN from './constanten'

export const background = {
    "game": null,

    init(game) {
        this.game = game;

    },
    update() {
        this.game.c.drawImage(this.game.spriteImg, 0, 0, CONSTANTEN.CANVAS_WIDTH, CONSTANTEN.CANVAS_HEIGHT, 0, 0, this.game.canvas.width, this.game.canvas.height)
    },
}