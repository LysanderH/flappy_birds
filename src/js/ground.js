import * as CONSTANTEN from './constanten'

export const ground = {
    "game": game,
    "posX": 0,

    init(game) {
        this.game = game;
    },
    update() {
        this.posX -= CONSTANTEN.GROUND_STEPS;
        if (this.posX <= CONSTANTEN.CANVAS_WIDTH - CONSTANTEN.GROUND_WIDTH) {
            this.posX = 0;
        }
        this.game.c.drawImage(this.game.spriteImg, CONSTANTEN.GROUND_SPRITE_POSX, 0, CONSTANTEN.GROUND_WIDTH, CONSTANTEN.GROUND_HEIGHT, this.posX, this.game.canvas.height - CONSTANTEN.GROUND_HEIGHT, CONSTANTEN.GROUND_WIDTH, CONSTANTEN.GROUND_HEIGHT);
    }
}