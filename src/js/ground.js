export const ground = {
    "game": game,
    "posX": 0,

    init(game) {
        this.game = game;
    },
    update() {
        this.posX -= 1;
        if (this.posX <= 288-336){
            this.posX = 0;
        }
        this.game.c.drawImage(this.game.sprite.spriteImg, 584, 0, 336, 112, this.posX, this.game.canvas.height - 112, 336, 112);
    }
}