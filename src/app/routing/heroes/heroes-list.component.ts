import { Component, OnInit} from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
    template: `
    <div class="container" style="text-align: center; margin-top: 5%; max-width: 320px;">
        <h2>HEROES</h2>
        <ul class="items" style=" width: 100%; text-align: left; padding-left: 0">
            <li *ngFor="let hero of heroes"
             
             (click)="onSelect(hero)"
             style="list-style-type: none; cursor: pointer">
             <span class="badge">{{hero.id}}</span> {{hero.name}}
            </li>
        </ul>
        <button style="background-color: red; border-radius: 5px"><a routerLink="/route" routerLinkActive="active">Back</a></button>
    </div>
    `

})

export class HeroListComponent {

 heroes= [
        {id: 11, name: 'Mr. Nice'},
        {id: 12, name: 'Narco'},
        {id: 13, name: 'Bombasto'},
        {id: 14, name: 'Celeritas'},
        {id: 15, name: 'Magneta'},
        {id: 16, name: 'RubberMan'},
        {id: 17, name: 'Dynama'},
        {id: 18, name: 'Dr IQ'},
        {id: 19, name: 'Magma'},
        {id: 20, name: 'Tornado'}
    ];
  
    constructor(
      private router: Router
    ){}

   
    onSelect(hero: any) {
        this.router.navigate(['/hero', hero.id]);
    }
}