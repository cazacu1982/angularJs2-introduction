import { Component } from '@angular/core';

@Component ({
    selector: 'hero-birthday',
    template: ` <div class="container">
                <h1>A pipe takes in data as input and transforms it to a desired output. </h1>
                <p>The hero's birthday is {{ birthday | date:format | uppercase}}</p>
                <button (click)="toggleFormat()" style="background-color: #8a4182">Toggle Format</button>
                </div>`
})

export class HeroBirthdayComponent {
      birthday = new Date(1982, 1, 27);
      toggle = true;

    get format() {return this.toggle ? 'shortDate' : 'fullDate'; }
    toggleFormat() {this.toggle = !this.toggle; }
}