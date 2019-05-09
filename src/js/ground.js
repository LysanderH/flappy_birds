import * as CONSTANTEN from './constanten'

export const ground = {
    "game": game,
    "posX": 0,
    'coordinates': {
        frameX: 584,
        frameY: 0,
        frameW: 336,
        frameH: 112,
        canvasX: 0,
        canvasY: 0,
        canvasW: 336,
        canvasH: 112,
    },
    init(game) {
        this.game = game;
        this.coordinates.canvasY = this.game.canvas.height - this.coordinates.frameH;
    },
    update() {
        this.coordinates.canvasX -= CONSTANTEN.GROUND_STEPS;
        if (this.coordinates.canvasX <= CONSTANTEN.CANVAS_WIDTH - CONSTANTEN.GROUND_WIDTH) {
            this.coordinates.canvasX = 0;
        }
        this.game.renderSpriteFrame(this.coordinates);
    }
}