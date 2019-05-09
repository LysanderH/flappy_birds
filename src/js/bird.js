export const bird = {
    'game': null,
    'frameInt': 0,
    'coordinates': {
        frameX: 0,
        frameY: 982,
        frameW: 34,
        frameH: 24,
        canvasX: 20,
        canvasY: 0,
        canvasW: 34,
        canvasH: 24,
    },
    'birdstate': 0,
    'dxs': [
        6, 62, 118
    ],

    init(game) {
        this.game = game;
        this.coordinates.canvasY = this.game.canvas.height / 2;
    },
    update() {
        this.frameInt += 1;
        if (this.frameInt >= 5) {
            this.birdstate = this.birdstate + 1;
            this.frameInt = 0;
        }
        if (this.birdstate >= this.dxs.length) {
            this.birdstate = 0;
        }
        this.coordinates.frameX = this.dxs[this.birdstate];
        this.game.renderSpriteFrame(this.coordinates);
    }
};