export const bird = {
    'game': null,
    'frameInt': 0,
    'position': {
        x:20,
        y:0
    },
    'coordinates': {
        frameX: 0,
        frameY: 982,
        frameW: 34,
        frameH: 24,
        canvasX: -17,
        canvasY: -12,
        canvasW: 34,
        canvasH: 24,
    },
    'birdstate': 0,
    'dxs': [
        6, 62, 118
    ],
    'fallSpeed': 0,
    'gravity': .3,
    'maxFallSpeed': 7,
    'angle': 0,

    init(game) {
        this.game = game;
        this.position.y = this.game.canvas.height / 2;

        /*
         * Pour calculer la vitesse de chute max, il calculer la rassine carré de la hauteur de chute / accélération de chute
         */
        // this.maxFallSpeed = Math.sqrt(2 * (this.game.ground.position.y * 0.0002645833) / this.gravity);
    },
    update() {
        this.flap();
        this.fall();
        this.collisionGround();
        this.rotation();
    },
    flap() {
        this.frameInt += 1;
        if (this.frameInt >= 10) {
            this.birdstate = this.birdstate + 1;
            this.frameInt = 0;
        }
        if (this.birdstate >= this.dxs.length) {
            this.birdstate = 0;
        }
        this.coordinates.frameX = this.dxs[this.birdstate];
    },
    fall() {
        this.fallSpeed += this.gravity;
        this.position.y += this.fallSpeed;
        if (this.fallSpeed > this.maxFallSpeed) {
            this.fallSpeed = this.maxFallSpeed;
        }
    },
    collisionGround() {
        if (this.position.y >= this.game.ground.coordinates.canvasY - this.coordinates.frameH) {
            this.goUp();
        }
    },
    rotation() {
        this.angle = 50 / this.maxFallSpeed * this.fallSpeed;
        this.render();
    },
    goUp() {
        this.fallSpeed = -this.maxFallSpeed;
    },
    render(){
        this.game.c.save();
        this.game.c.translate(this.position.x + (this.coordinates.frameW / 2), this.position.y + (this.coordinates.frameH / 2));
        this.game.c.rotate(Math.PI / 180 * this.angle);
        this.game.renderSpriteFrame(this.coordinates);
        this.game.c.restore();
    }
};