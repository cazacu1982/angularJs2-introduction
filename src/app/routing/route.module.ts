import { NgModule }       from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import  { RouteComponent } from './route.component';
import { CrisisCenterComponent }     from './crisis-center/crisis-center.component';
import { HeroListComponent }    from './heroes/heroes-list.component';
import { HeroDetailComponent }    from './heroes/hero-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild([

            {path: 'heroes', component: HeroListComponent},
            {path: 'hero/:id', component: HeroDetailComponent},
            {path: 'route', component: RouteComponent},
            {
                path: 'crisis-center',
                component: CrisisCenterComponent,
            }
        ])

    ],
    declarations: [
        RouteComponent,
        HeroListComponent,
        HeroDetailComponent
    ],
   exports: [RouteComponent, HeroListComponent, HeroDetailComponent]
})
export class RouteModule { }