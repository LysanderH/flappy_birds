export class Pipes {
    constructor(game) {
        this.game = game;
        this.delay = Math.random() * 100;
        this.topCoordinates = {
            frameX: 168,
            frameY: 646,
            frameW: 52,
            frameH: 320,
            canvasX: 0,
            canvasY: this.game.canvas.height - 320,
            canvasW: 52,
            canvasH: 320,
        };
        this.botCoordinates = {
            frameX: 112,
            frameY: 646,
            frameW: 52,
            frameH: 320,
            canvasX: 0,
            canvasY: 0,
            canvasW: 52,
            canvasH: 320,
        };
        this.update();
    };

    update() {
        this.botCoordinates.canvasX = this.game.canvas.width - this.botCoordinates.frameW;
        this.topCoordinates.canvasX = this.game.canvas.width - this.topCoordinates.frameW;
        this.botCoordinates.canvasX -= 1;
        this.topCoordinates.canvasX -= 1;
        this.game.renderSpriteFrame(this.botCoordinates);
        this.game.renderSpriteFrame(this.topCoordinates);
        // console.log(this.botCoordinates)
    }
}