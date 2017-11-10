import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AuthGuard, SharedModule} from '../shared';
import {CertifiedReportComponent} from './certified-report.component';
import {CertifiedReportAuthResolver} from './certifiedReport-auth-resolver.service';

const certifiedReportRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: 'certified-report',
        component: CertifiedReportComponent,
        canActivate:[AuthGuard]
    }
]);

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        certifiedReportRouting
    ],
    declarations: [CertifiedReportComponent],
    providers: [
        CertifiedReportAuthResolver
    ]
})
export class CertifiedReportModule {
}
