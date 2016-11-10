import { Component} from '@angular/core';



@Component({
    template:  `
        <div class="container"  style="text-align: center; margin-top: 5%; max-width: 320px;">
            <h2>CRISIS CENTER</h2>
             <ul class="items" style=" width: 100%; text-align: left; padding-left: 0">
            <li *ngFor="let crisis of crises; let i = index"
             (click)="onSelect(i)" 
            style="list-style-type: none; cursor: pointer">
            <span class="badge">{{crisis.id}}</span> <a [routerLink]="[crisis.id]">{{ crisis.name }}</a>
            </li>
        </ul>
         <button style="background-color: red; border-radius: 5px"><a routerLink="/route" routerLinkActive="active">Back</a></button>
        <p>Welcome to the Crisis Center</p>
        
        </div>
      `
   
    })
export class CrisisCenterComponent {
   
  public crises: Array<any> = [
    { id: 1, name: 'Dragon Burning Cities'},
    { id: 2, name: 'Sky Rains Great White Sharks'},
    { id: 3, name: 'Giant Asteroid Heading For Earth'},
    { id: 4, name: 'Procrastinators Meeting Delayed Again'}
];
    
    onSelect(index: any){

    }
}




