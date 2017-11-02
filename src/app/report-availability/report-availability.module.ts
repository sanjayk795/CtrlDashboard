import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthGuard, SharedModule} from '../shared';
import {ReportAvailabilityComponent} from './report-availability.component';

const reportAvailabilityRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'report-availability',
        component: ReportAvailabilityComponent
    }
]);

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        reportAvailabilityRouting
    ],
    declarations: [ReportAvailabilityComponent]
})
export class ReportAvailabilityModule {
}
