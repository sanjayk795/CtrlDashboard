import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthGuard, SharedModule} from '../shared';
import {OffReportComponent} from './off-report.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from 'angular2-datatable';

const offReportRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'off-report',
        component: OffReportComponent,
        canActivate: [AuthGuard]
    }
]);

@NgModule({
    imports: [
        CommonModule,
        offReportRouting,
        SharedModule,
        NgbModule,
        DataTableModule
    ],
    declarations: [OffReportComponent]
})
export class OffReportModule {
}
