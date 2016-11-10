import { Component } from '@angular/core'

@Component({
    template: `
  <div class="container" *ngIf="index" >
    <h3>{{index.name}}</h3>
    <div>
      <label>Id: </label>{{index.id}}</div>

  </div>
  `
})
export class CrisisDetailComponent {
    public show: boolean = false;
}