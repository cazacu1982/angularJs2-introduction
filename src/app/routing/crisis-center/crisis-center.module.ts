import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';

//import { CrisisService }        from './crisis.service';

import { CrisisCenterComponent }     from './crisis-center.component';
import { CrisisDetailComponent }     from './crisis-detail.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CrisisCenterRoutingModule
    ],
    declarations: [
        CrisisCenterComponent,
        CrisisDetailComponent
    ],
    // providers: [
    //     CrisisService
    // ]
})
export class CrisisCenterModule {}