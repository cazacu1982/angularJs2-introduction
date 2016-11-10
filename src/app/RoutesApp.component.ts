import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
    selector: 'my-app',
    template: `<nav>
                    <a [routerLink]="['app']" routerLinkActive="active">Home</a>
                    <a routerLink="/form/form" routerLinkActive="active">Form</a>
                    <a routerLink="/animation/animation" routerLinkActive="active">Animation</a>
                    <a routerLink="/attribute-directives/background" routerLinkActive="active">Attribute Directives</a>
                    <a routerLink="/pipes/hero-birthday" routerLinkActive="active">Pipes</a>
                    <a routerLink="/routing/route" routerLinkActive="active">Routing</a>
                    
               </nav>
               <router-outlet></router-outlet>`,
    styles: ['nav {text-align: center; margin-top: 5%; font-size: 2vw;}']
})
export class RoutesAppComponent { }