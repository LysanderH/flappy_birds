import {background} from './background';
import {ground} from './ground';
import {pipes} from './pipes';
import {bird} from './bird';
import {controller} from "./controller";

const game = {
    "canvas": document.querySelector('#game'),
    "c": null,
    "spriteUrl": '../resources/sprite.png',
    "spriteImg": new Image(),

    "background": background,
    "ground": ground,
    "pipes": pipes,
    "bird": bird,
    "controller": controller,

    init() {
        this.c = this.canvas.getContext('2d');

        this.spriteImg.src = this.spriteUrl;

        this.spriteImg.addEventListener('load', () => {
            this.background.init(this);
            this.ground.init(this);
            this.pipes.init(this);
            this.bird.init(this);
            this.controller.init(this);
            this.animate();
        })
    },
    animate() {
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);


        this.background.update();
        this.ground.update();
        this.pipes.update();
        this.bird.update();
        this.controller.update();
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