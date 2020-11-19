import { style, animate, transition, trigger } from '@angular/animations';

export const faceInOutAnimation = trigger('faceInOutAnimation', [
    transition(':enter', [
        style({opacity: 0}),
        animate(500, style({opcity: 1}))
    ])
])