export const bird = {
    'game': null,
    'frameInt': 0,
    'coordinates': {
        frameX: [
            6, 62, 118
        ],
        frameY: 982,
        frameW: 34,
        frameH: 24,
        canvasX: 20,
        canvasY: 0,
        canvasW: 34,
        canvasH: 24,
    },
    'birdstate': 0,

    init(game) {
        this.game = game;
        this.coordinates.canvasY = this.game.canvas.height / 2
    },
    update() {
        this.frameInt += 1;
        if (this.frameInt >= 10){
            this.birdstate = this.birdstate + 1;
            this.frameInt = 0;
        }
        if (this.birdstate >= this.coordinates.frameX.length) {
            this.birdstate = 0;
        }
        // console.log(this.coordinates.frameX.length);
        this.game.c.drawImage(
            this.game.spriteImg,
            this.coordinates.frameX[this.birdstate],
            this.coordinates.frameY,
            this.coordinates.frameW,
            this.coordinates.frameH,
            this.coordinates.canvasX,
            this.coordinates.canvasY,
            this.coordinates.canvasW,
            this.coordinates.canvasH
        );
    }
}