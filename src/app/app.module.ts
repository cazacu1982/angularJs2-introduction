import { NgModule} from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { RoutesAppComponent } from './RoutesApp.component';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { AnimationComponent } from './animation/animation.component';
import { BackgroundDirective } from './attribute-directives/background.directive';
import { BackgroundComponent } from './attribute-directives/background.component';
import { HeroBirthdayComponent } from './pipes/hero-birthday.component';
import { RouteComponent } from './routing/route.component';
import { RouteModule } from './routing/route.module';
import { CrisisCenterModule }     from './routing/crisis-center/crisis-center.module';




@NgModule({
    imports: [
        BrowserModule,
        RouteModule,
        CrisisCenterModule,
        FormsModule,
        RouterModule.forRoot([

            { path: '', redirectTo: 'app', pathMatch: 'full' },
            { path: 'app', component: AppComponent },
            {
                path: 'form/form',
                component: FormComponent
            },
            {
                path: 'animation/animation',
                component: AnimationComponent
            },
            {
                path: 'attribute-directives/background',
                component: BackgroundComponent
            },
            {
                path: 'pipes/hero-birthday',
                component: HeroBirthdayComponent
            },
            {
                path: 'routing/route',
                component: RouteComponent
            }
        ])
    ],
    providers: [
        {provide:LocationStrategy, useClass: HashLocationStrategy}
    ],
    declarations: [
        AppComponent,
        FormComponent,
        AnimationComponent,
        BackgroundDirective,
        BackgroundComponent,
        HeroBirthdayComponent,
        RoutesAppComponent
    ],
    bootstrap: [RoutesAppComponent ],

})
export class AppModule {}
