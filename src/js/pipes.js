export const pipes = {
    'game': null,
    'coordinates': {
        frameX: 168,
        frameY: 646,
        frameW: 52,
        frameH: 320,
        canvasX: 0,
        canvasY: 0,
        canvasW: 52,
        canvasH: 320,
    },
    init(game) {
        this.game = game;
        // new Pipe(this.coordinates)
    },
    update() {
        this.game.renderSpriteFrame(this.coordinates);
        /*
         * canvas x doit avoir des hauteurs aléatoires
         */
        // this.game.c.drawImage(this.game.spriteImg, this.coordinates.frameX, this.coordinates.frameY, this.coordinates.frameW, this.coordinates.frameH, this.coordinates.canvasX, this.coordinates.canvasY, this.coordinates.canvasW, this.coordinates.canvasH);

    }
}