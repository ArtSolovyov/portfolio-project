import { Fireworks } from 'fireworks-js';

export function startFireworks() {
    const mainBlock = document.querySelector('.main');
    const fireworks = new Fireworks(mainBlock, {
        acceleration: 1,
        gravity: 0.7,
        traceSpeed: 2,
        opacity: 1,
        rocketsPoint: {
            min: 10,
            max: 70
        },
        mouse: {
            click: true,
            move: false,
            max: 1
        }
    });
    fireworks.start();
}
