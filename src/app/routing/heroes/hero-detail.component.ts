import { Component, OnInit} from '@angular/core';

@Component({
    template: `
        <div class="container">
            <h2>HEROES</h2>
             <div *ngIf="hero">
                <h3>{{hero.name}}</h3>
                <div>
                  <label>Id: </label>{{hero.id}}</div>
                <div>
                  <label>Name: </label>
                  <input [(ngModel)]="hero.name" placeholder="name"/>
                </div>
               
              </div>
            <button style="background-color: red; border-radius: 5px"><a routerLink="/heroes" routerLinkActive="active">Back</a></button>
        </div>
        `
})

export class HeroDetailComponent {

}