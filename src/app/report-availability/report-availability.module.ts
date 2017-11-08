import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from 'angular2-datatable';
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
        reportAvailabilityRouting,
        NgbModule,
        DataTableModule
    ],
    declarations: [ReportAvailabilityComponent]
})
export class ReportAvailabilityModule {
}
