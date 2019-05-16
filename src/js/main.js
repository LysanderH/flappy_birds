import {background} from './background';
import {ground} from './ground';
import {Pipes} from './pipes';
import {bird} from './bird';
import {controller} from "./controller";

const game = {
    "canvas": document.querySelector('#game'),
    "c": null,
    "spriteUrl": '../resources/sprite.png',
    "spriteImg": new Image(),

    "background": background,
    "ground": ground,
    "pipe": null,
    "bird": bird,
    "controller": controller,

    "counter": 0,

    init() {
        this.c = this.canvas.getContext('2d');

        this.spriteImg.src = this.spriteUrl;

        this.spriteImg.addEventListener('load', () => {
            this.background.init(this);
            this.ground.init(this);
            this.bird.init(this);
            this.controller.init(this);
            this.animate();
        })
    },
    animate() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.background.update();
        this.bird.update();
        // console.log(Pipes);
        this.Pipes = new Pipes(game);
        this.Pipes.update();
        this.ground.update();
        this.counter =+ 1;
        requestAnimationFrame(() => {
            this.animate();
        });
    },
    renderSpriteFrame(coordinates) {
        this.c.drawImage(this.spriteImg,
            coordinates.frameX,
            coordinates.frameY,
            coordinates.frameW,
            coordinates.frameH,
            coordinates.canvasX,
            coordinates.canvasY,
            coordinates.canvasW,
            coordinates.canvasH
        );
    }

};

game.init();