import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { JhipsterSharedModule } from '../shared';
import {ButtonModule, Schedule} from 'primeng/primeng';
import {ScheduleModule} from 'primeng/primeng';

import { HOME_ROUTE, HomeComponent } from './';

@NgModule({
    imports: [
        JhipsterSharedModule,
        BrowserAnimationsModule,
        ButtonModule,
        ScheduleModule,
        RouterModule.forRoot([ HOME_ROUTE ], { useHash: true })
    ],
    declarations: [
        HomeComponent,
    ],
    entryComponents: [
    ],
    providers: [
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterHomeModule {}
