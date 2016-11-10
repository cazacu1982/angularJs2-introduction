import  { Component} from '@angular/core';

@Component({
    selector: 'my-route',
    template: `<nav style="text-align: center; margin-top: 5%">
                    <a style="color: red" routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
                    <a style="color: red" routerLink="/heroes" routerLinkActive="active">Heroes</a>
               </nav>
               <router-outlet></router-outlet>
               `
})

export class RouteComponent { }