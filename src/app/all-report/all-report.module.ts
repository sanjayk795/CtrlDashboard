import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthGuard, SharedModule } from '../shared';
import { AllReportComponent } from './all-report.component';

const allReportRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'all-report',
    component: AllReportComponent,
    canActivate: [AuthGuard]
  }
]);

@NgModule({
  imports: [
    CommonModule,
    allReportRouting,
    SharedModule
  ],
  declarations: [AllReportComponent]
})
export class AllReportModule { }
