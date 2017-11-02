import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthGuard, SharedModule} from '../shared';
import {CertifiedReportComponent} from './certified-report.component';

const certifiedReportRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'certified-report',
        component: CertifiedReportComponent
    }
]);

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        certifiedReportRouting
    ],
    declarations: [CertifiedReportComponent]
})
export class CertifiedReportModule {
}
