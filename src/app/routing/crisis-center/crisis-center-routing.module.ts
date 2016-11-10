import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { CrisisCenterComponent }  from './crisis-center.component';
import { CrisisDetailComponent }  from './crisis-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild([

            {
                path: 'crisis-center',
                component: CrisisCenterComponent
            },
            {path: 'crisis-center/:id', component: CrisisDetailComponent}
        ])
    ],
   
    exports: [
       RouterModule
    ]
})
export class CrisisCenterRoutingModule { }
