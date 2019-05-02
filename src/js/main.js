import {background} from './background'
import {sprite} from './sprite'
import {ground} from './ground'

const game = {
    "canvas": document.querySelector('#game'),
    "c": null,
    "background": background,
    "sprite": sprite,
    "ground": ground,

    init() {
        this.c = this.canvas.getContext('2d');
        this.sprite.init(game);
        this.background.init(this);
        this.ground.init(this);
        this.sprite.spriteImg.addEventListener('load', ()=>{
            this.animate();
        })
    },
    animate() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.background.update();
        this.ground.update();
        requestAnimationFrame(() => {
            this.animate();
        });
    }
};

game.init();