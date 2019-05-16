export const controller = {
    "game": null,
    init(game) {
        this.game = game;
        window.addEventListener('keypress',(e)=>{
            if (e.key === ' '){
                this.game.bird.goUp();
            }
        });
        // window.addEventListener('touch-start',(e)=>{
        //     if (e.key === ' '){
        //         this.game.bird.goUp();
        // });
    }
}