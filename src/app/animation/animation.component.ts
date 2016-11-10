import {
    Component,
    trigger,
    state,
    style,
    transition,
    animate
} from '@angular/core';



@Component ({

    selector: 'hero-list',
    template: `
    <ul>
        <li  *ngFor="let hero of heroes"
            [@heroState]="state"
            (click)="toggleState(hero)"
            class="hero-list">
            {{hero}}
        </li>
    </ul>
    `,
    styleUrls: ['./hero-list.component.css'],
    animations: [
        trigger('heroState', [

            state('inactive', style({
                backgroundColor: '#ccc',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: 'red',
                transform: 'scale(1.2)',
                width: '30%'
            })),
            transition('* => active', [
                animate(250, style({width: '40%'})),
            ]),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out')),

        ])
     ]

})

export class AnimationComponent {
    heroes= ['Superman', 'Batman', 'Spiderman', 'Catwomen'];
    state= 'inactive';

    toggleState(e:any) {
        console.log( e);

            this.state = (this.state === 'active' ? 'inactive' : 'active');

    }

}